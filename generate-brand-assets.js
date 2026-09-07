// One-off tool: renders the AQTech brand mark and social share image using the
// same design tokens as the live site (src/app/globals.css), then writes them
// straight into src/app/ where Next.js's metadata file conventions pick them
// up automatically (icon.png, apple-icon.png, favicon.ico, opengraph-image.png,
// twitter-image.png). Re-run with: node generate-brand-assets.js
const fs = require("fs")
const path = require("path")
const { chromium } = require("playwright-core")

const APP_DIR = path.join(__dirname, "src", "app")

const FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap" rel="stylesheet">'

function markHtml(size) {
  const radius = Math.round(size * 0.22)
  const fontSize = Math.round(size * 0.42)
  return `<!doctype html><html><head>${FONT_LINK}<style>
    html,body{margin:0;padding:0;background:transparent}
    .mark{
      width:${size}px;height:${size}px;border-radius:${radius}px;
      background:linear-gradient(135deg,#2f6bff 0%,#00c2ff 100%);
      display:flex;align-items:center;justify-content:center;
      font-family:'Manrope',Arial,sans-serif;font-weight:800;
      font-size:${fontSize}px;color:#ffffff;letter-spacing:-0.02em;
    }
  </style></head><body><div class="mark">AQ</div></body></html>`
}

function ogHtml() {
  return `<!doctype html><html><head>${FONT_LINK}<style>
    html,body{margin:0;padding:0}
    .card{
      width:1200px;height:630px;position:relative;overflow:hidden;
      background:#05070d;
      font-family:'Manrope',Arial,sans-serif;
      display:flex;flex-direction:column;align-items:flex-start;justify-content:center;
      padding:0 90px;box-sizing:border-box;
    }
    .grid{
      position:absolute;inset:0;
      background-image:
        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size:56px 56px;
    }
    .glow{
      position:absolute;width:520px;height:520px;border-radius:9999px;
      background:#2f6bff;filter:blur(120px);opacity:0.35;
      top:-160px;right:-120px;
    }
    .glow2{
      position:absolute;width:420px;height:420px;border-radius:9999px;
      background:#8b7cff;filter:blur(120px);opacity:0.3;
      bottom:-160px;left:-100px;
    }
    .row{display:flex;align-items:center;gap:20px;position:relative;z-index:1}
    .mark{
      width:72px;height:72px;border-radius:18px;
      background:linear-gradient(135deg,#2f6bff 0%,#00c2ff 100%);
      display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:30px;color:#fff;letter-spacing:-0.02em;
    }
    .name{font-size:34px;font-weight:800;color:#eef2ff;letter-spacing:-0.01em}
    h1{
      position:relative;z-index:1;
      font-size:56px;font-weight:800;line-height:1.15;color:#eef2ff;
      margin:36px 0 22px 0;max-width:920px;letter-spacing:-0.02em;
    }
    .highlight{
      background:linear-gradient(135deg,#2f6bff 0%,#00c2ff 55%,#8b7cff 100%);
      -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
    }
    p{
      position:relative;z-index:1;
      font-family:Arial,sans-serif;
      font-size:24px;color:#94a3b8;max-width:760px;line-height:1.5;margin:0;
    }
  </style></head><body>
    <div class="card">
      <div class="grid"></div>
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="row"><div class="mark">AQ</div><div class="name">AQTech</div></div>
      <h1>We Build Technology <span class="highlight">That Moves Business Forward</span></h1>
      <p>AQTech designs and engineers web, mobile, and AI-powered products that help ambitious companies launch faster, scale smarter, and stay ahead.</p>
    </div>
  </body></html>`
}

async function shoot(page, html, selector, outPath, width, height, transparent) {
  await page.setViewportSize({ width, height })
  await page.setContent(html, { waitUntil: "networkidle" })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(150)
  const el = await page.$(selector)
  if (!el) throw new Error(`selector ${selector} not found for ${outPath}`)
  await el.screenshot({ path: outPath, omitBackground: Boolean(transparent) })
}

// Minimal, spec-valid single-image ICO container wrapping a PNG payload
// (supported since Windows Vista and by every modern browser).
function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(1, 4) // image count

  const entry = Buffer.alloc(16)
  entry.writeUInt8(size >= 256 ? 0 : size, 0) // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
  entry.writeUInt8(0, 2) // color palette
  entry.writeUInt8(0, 3) // reserved
  entry.writeUInt16LE(1, 4) // color planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8) // image data size
  entry.writeUInt32LE(6 + 16, 12) // offset

  return Buffer.concat([header, entry, pngBuffer])
}

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ backgroundColor: "#00000000" })

  // App icon (also used as the source for favicon.ico) + Apple touch icon.
  await shoot(page, markHtml(512), ".mark", path.join(APP_DIR, "icon.png"), 512, 512, true)
  await shoot(page, markHtml(180), ".mark", path.join(APP_DIR, "apple-icon.png"), 180, 180, true)
  const faviconSrc = path.join(__dirname, ".fav-src-32.png")
  await shoot(page, markHtml(32), ".mark", faviconSrc, 32, 32, true)

  // Social share image (Open Graph + Twitter card).
  await shoot(page, ogHtml(), ".card", path.join(APP_DIR, "opengraph-image.png"), 1200, 630, false)
  fs.copyFileSync(
    path.join(APP_DIR, "opengraph-image.png"),
    path.join(APP_DIR, "twitter-image.png")
  )

  await browser.close()

  const pngBuffer = fs.readFileSync(faviconSrc)
  const ico = pngToIco(pngBuffer, 32)
  fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), ico)
  fs.unlinkSync(faviconSrc)

  console.log("Generated:")
  for (const f of [
    "icon.png",
    "apple-icon.png",
    "favicon.ico",
    "opengraph-image.png",
    "twitter-image.png",
  ]) {
    const p = path.join(APP_DIR, f)
    console.log(` - ${f}  (${fs.statSync(p).size} bytes)`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
