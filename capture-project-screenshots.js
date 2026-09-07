// One-off tool: captures a homepage screenshot for each portfolio project that has
// a live `link`, saved into public/projects/<slug>.jpg. Re-run any time project
// links change; existing images for already-captured slugs are skipped unless
// FORCE=1 is set in the environment. Not part of the build — run manually with:
//   node capture-project-screenshots.js
const fs = require("fs")
const path = require("path")
const { chromium } = require("playwright-core")

const PROJECTS = [
  ["school-points", "https://school-points.com/"],
  ["elearning-pro", "https://elearning-pro-pearl.vercel.app/"],
  ["misbar-tech", "https://misbar-tech.com/en"],
  ["fatora-cloud", "https://fatora-iota.vercel.app/auth/login"],
  ["iropit", "https://www.iropit.com/"],
  ["rakaya-platform", "https://www.rakaya.sa/"],
  ["tajeer-car-rent", "https://www.tajeercarrent.com/"],
  ["vip-car-rental-uae", "https://www.vipcarrental.ae/"],
  ["next-car", "https://next-car-rho.vercel.app/"],
  ["rental-car", "https://rental-car-nine.vercel.app/"],
  ["bayan-dashboard", "https://bayan-dashborad.vercel.app/"],
  ["saray-el-nile", "https://vercel.com/stayexpo/saray-el-nile"],
  ["quran-courses", "https://quranqurses-oky5.vercel.app/"],
  ["ealaani-ads-platform", "https://ealaani.vercel.app/"],
  ["ealaani-dev", "https://ealaani-dev.vercel.app/"],
  ["new-clinic", "https://new-clinic-zrx3.vercel.app/"],
  ["angazatk-admin", "https://angazatk-admin.vercel.app/"],
  ["tour-platform", "https://tour-phi-ten.vercel.app/login"],
  ["egypt-book-tours", "https://egypt-book-tours-ashy.vercel.app/"],
  ["egypt-travel-light", "https://egypt-travel-light-eta.vercel.app/"],
  ["withaq-vdr", "https://withaqvdr-front.vercel.app/login"],
  ["zaman-platform", "https://zaman-new.vercel.app/"],
  ["games-platform", "https://games-2.vercel.app/"],
  ["anjazatk", "https://anjazatk.vercel.app/"],
  ["e-learning-platform", "https://elearning-user-rmz.vercel.app/"],
  ["mv-dashboard", "https://mv-dashboard.vercel.app/login"],
]

const OUT_DIR = path.join(__dirname, "public", "projects")
const VIEWPORT = { width: 1440, height: 900 }
const FORCE = process.env.FORCE === "1"

function withTimeout(promise, ms, label) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`watchdog timeout (${label})`)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const browser = await chromium.launch()
  const results = []

  for (const [slug, url] of PROJECTS) {
    const outPath = path.join(OUT_DIR, `${slug}.jpg`)
    if (!FORCE && fs.existsSync(outPath)) {
      console.log(`SKIP ${slug}  (already captured)`)
      continue
    }

    const context = await browser.newContext({
      viewport: VIEWPORT,
      ignoreHTTPSErrors: true,
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    })
    const page = await context.newPage()
    try {
      await withTimeout(
        (async () => {
          await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 })
          await page.waitForTimeout(2000)
          await page.screenshot({ path: outPath, type: "jpeg", quality: 80 })
        })(),
        22000,
        slug
      )
      results.push({ slug, url, finalUrl: page.url(), ok: true })
      console.log(`OK   ${slug}  ->  ${page.url()}`)
    } catch (err) {
      results.push({ slug, url, ok: false, error: String(err.message || err) })
      console.log(`FAIL ${slug}  ->  ${err.message || err}`)
    } finally {
      await context.close().catch(() => {})
    }
  }

  await browser.close()

  const failed = results.filter((r) => !r.ok)
  console.log("\n--- Summary ---")
  console.log(`Attempted: ${results.length}, Failed: ${failed.length}`)
  if (failed.length) {
    console.log("Failed:", failed.map((f) => f.slug).join(", "))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
