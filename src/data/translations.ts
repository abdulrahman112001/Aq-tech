export type Language = "en" | "ar"

const en = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Work",
    process: "Process",
    contact: "Contact",
    cta: "Start a Project",
  },
  hero: {
    eyebrow: "Digital Innovation Partner",
    titleLine1: "We Build Technology",
    titleHighlight: "That Moves Business Forward",
    description:
      "AQTech designs and engineers web, mobile, and AI-powered products that help ambitious companies launch faster, scale smarter, and stay ahead.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "View Our Work",
    scroll: "Scroll to explore",
  },
  about: {
    eyebrow: "About AQTech",
    title: "A Technology Partner, Not Just a Vendor",
    description:
      "Founded to bridge the gap between ambitious ideas and reliable engineering, AQTech brings together designers, engineers, and strategists who care about outcomes as much as code. We embed with your team to design, build, and scale products that hold up under real-world growth.",
    valuesTitle: "What Drives Us",
  },
  services: {
    eyebrow: "What We Do",
    title: "Services Built Around Your Growth",
    description:
      "From first sketch to production scale, our team covers the full technology stack your product needs.",
  },
  process: {
    eyebrow: "How We Work",
    title: "A Process Built for Clarity",
    description:
      "No black boxes. Every engagement follows a transparent process so you always know what's next.",
  },
  portfolio: {
    eyebrow: "Our Work",
    title: "Selected Projects",
    description:
      "A sample of the products we've designed, engineered, and shipped for our clients.",
    all: "All",
    viewProject: "View Details",
    back: "Back to Work",
    techUsed: "Technology Used",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Let's Build Something Great",
    description:
      "Tell us about your project and we'll get back to you within one business day.",
    formName: "Full Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formSuccess: "Thanks! Your message has been received — we'll be in touch soon.",
    formError: "Something went wrong. Please try again or email us directly.",
    infoTitle: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
  },
  footer: {
    description:
      "AQTech is a technology partner helping ambitious companies design, build, and scale digital products.",
    quickLinks: "Quick Links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved.",
  },
  common: {
    learnMore: "Learn More",
  },
}

const ar: typeof en = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    process: "منهجيتنا",
    contact: "تواصل معنا",
    cta: "ابدأ مشروعك",
  },
  hero: {
    eyebrow: "شريكك في التحول الرقمي",
    titleLine1: "نبني تقنية",
    titleHighlight: "تدفع أعمالك إلى الأمام",
    description:
      "تصمم AQTech وتطور مواقع الويب وتطبيقات الجوال والحلول المعتمدة على الذكاء الاصطناعي لمساعدة الشركات الطموحة على الانطلاق بسرعة والنمو بذكاء.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
    scroll: "مرر للاستكشاف",
  },
  about: {
    eyebrow: "عن AQTech",
    title: "شريك تقني، لا مجرد مزوّد خدمة",
    description:
      "تأسست AQTech لتكون الجسر بين الأفكار الطموحة والهندسة الموثوقة، حيث يجمع فريقنا بين المصممين والمهندسين والاستراتيجيين الذين يهتمون بالنتائج بقدر اهتمامهم بجودة الكود. نعمل كامتداد لفريقك في تصميم وبناء وتوسيع منتجات تتحمل النمو الحقيقي.",
    valuesTitle: "ما الذي يحركنا",
  },
  services: {
    eyebrow: "ماذا نقدم",
    title: "خدمات مصممة لدعم نموك",
    description:
      "من أول رسمة حتى الإطلاق على نطاق واسع، يغطي فريقنا كل ما يحتاجه منتجك التقني.",
  },
  process: {
    eyebrow: "كيف نعمل",
    title: "منهجية واضحة في كل خطوة",
    description:
      "لا صناديق سوداء. كل مشروع يمر بعملية شفافة حتى تعرف دائماً الخطوة القادمة.",
  },
  portfolio: {
    eyebrow: "أعمالنا",
    title: "مشاريع مختارة",
    description: "نماذج من المنتجات التي صممناها وطورناها وأطلقناها لعملائنا.",
    all: "الكل",
    viewProject: "عرض التفاصيل",
    back: "العودة إلى الأعمال",
    techUsed: "التقنيات المستخدمة",
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "لنصنع شيئاً رائعاً معاً",
    description: "أخبرنا عن مشروعك وسنتواصل معك خلال يوم عمل واحد.",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formSubject: "الموضوع",
    formMessage: "الرسالة",
    formSubmit: "إرسال الرسالة",
    formSending: "جاري الإرسال...",
    formSuccess: "شكراً لك! تم استلام رسالتك وسنتواصل معك قريباً.",
    formError: "حدث خطأ ما. حاول مرة أخرى أو راسلنا مباشرة عبر البريد الإلكتروني.",
    infoTitle: "معلومات التواصل",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    locationLabel: "الموقع",
  },
  footer: {
    description:
      "AQTech شريك تقني يساعد الشركات الطموحة على تصميم وبناء وتوسيع منتجاتها الرقمية.",
    quickLinks: "روابط سريعة",
    servicesTitle: "خدماتنا",
    contactTitle: "تواصل معنا",
    rights: "جميع الحقوق محفوظة.",
  },
  common: {
    learnMore: "اعرف المزيد",
  },
}

export const translations: Record<Language, typeof en> = { en, ar }
export type TranslationType = typeof en
