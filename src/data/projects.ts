// AQTech's real portfolio — case studies delivered by the team.
export interface Project {
  slug: string
  title: string
  category: string
  categoryAr: string
  summary: string
  summaryAr: string
  description: string
  descriptionAr: string
  tags: string[]
  features: string[]
  featuresAr: string[]
  duration: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: "school-points",
    title: "School Points",
    category: "Education",
    categoryAr: "التعليم",
    summary:
      "Smart system for tracking student points and analyzing behavior to enhance academic engagement and discipline in schools.",
    summaryAr:
      "نظام ذكي لتتبع نقاط الطلاب وتحليل السلوك بهدف تعزيز التحصيل الدراسي والانضباط في المدارس.",
    description:
      "School Points (بوينت) is an innovative school management platform designed to track student behavior and academic performance through a gamified points system. The platform helps schools reduce absenteeism by 21%, decrease negative behaviors by 68%, and increase positive behaviors by 71%. It features a smart dashboard for monitoring, a motivating points system, real-time parent communication, detailed reports, and a rewards store. The system is flexible to adapt to each school's policies while maintaining high security standards for student data.",
    descriptionAr:
      "بوينت (School Points) منصة مبتكرة لإدارة المدارس مصممة لمتابعة سلوك الطلاب وأدائهم الدراسي من خلال نظام نقاط تحفيزي. تساعد المنصة المدارس على خفض معدلات الغياب بنسبة 21%، وتقليل السلوكيات السلبية بنسبة 68%، وزيادة السلوكيات الإيجابية بنسبة 71%. وتضم لوحة تحكم ذكية للمتابعة، ونظام نقاط محفّز، وتواصلاً فورياً مع أولياء الأمور، وتقارير تفصيلية، ومتجراً للمكافآت. كما يتميز النظام بمرونته للتكيّف مع سياسات كل مدرسة مع الحفاظ على أعلى معايير أمان بيانات الطلاب.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Smart dashboard for behavior & academic tracking",
      "Gamified points system for student motivation",
      "Real-time parent communication & reports",
      "Rewards store with customizable gifts",
      "Multi-role access (Admin, Teacher, Parent)",
      "Arabic/English bilingual support",
    ],
    featuresAr: [
      "لوحة تحكم ذكية لمتابعة السلوك والتحصيل الدراسي",
      "نظام نقاط تحفيزي لتشجيع الطلاب",
      "تواصل فوري مع أولياء الأمور وتقارير مباشرة",
      "متجر مكافآت بهدايا قابلة للتخصيص",
      "صلاحيات متعددة الأدوار (مدير، معلم، ولي أمر)",
      "دعم ثنائي اللغة (عربي/إنجليزي)",
    ],
    duration: "Dec 2024",
    link: "https://school-points.com/",
  },
  {
    slug: "elearning-pro",
    title: "eLearning Pro",
    category: "Education",
    categoryAr: "التعليم",
    summary:
      "A comprehensive e-learning platform with multi-user system (Student, Teacher, Admin), course management, quizzes, payment integration, live classes, and certificates.",
    summaryAr:
      "منصة تعليم إلكتروني متكاملة بنظام متعدد المستخدمين (طالب، معلم، مدير)، تشمل إدارة الدورات، الاختبارات، بوابات الدفع، الحصص المباشرة، والشهادات.",
    description:
      "eLearning Pro is a full-featured educational platform that provides a complete solution for online learning. The platform supports three user types: students, teachers, and administrators, each with dedicated dashboards and features. Teachers can create courses with chapters and lessons, upload videos, and conduct live classes using LiveKit. Students can browse courses, track progress, take quizzes, and earn certificates. The platform includes multiple payment gateways (Stripe, PayPal, Paymob, Tap Payments), coupon system, wishlist, and comprehensive admin controls.",
    descriptionAr:
      "eLearning Pro منصة تعليمية متكاملة توفر حلاً شاملاً للتعلّم عن بُعد. تدعم المنصة ثلاثة أنواع من المستخدمين: الطلاب والمعلمين والمديرين، ولكل منهم لوحة تحكم ومزايا مخصصة. يمكن للمعلمين إنشاء الدورات بفصول ودروس، ورفع الفيديوهات، وعقد حصص مباشرة عبر LiveKit. أما الطلاب فيمكنهم تصفح الدورات ومتابعة تقدمهم وأداء الاختبارات والحصول على الشهادات. كما تضم المنصة عدة بوابات دفع (Stripe وPayPal وPaymob وTap Payments)، ونظام كوبونات خصم، وقائمة أمنيات، وأدوات إدارة شاملة.",
    tags: ["Next.js", "React.js", "TypeScript", "LiveKit", "Stripe", "PayPal"],
    features: [
      "Multi-user authentication (Student, Teacher, Admin)",
      "Course creation with chapters, lessons & video uploads",
      "Quiz system with multiple choice questions",
      "Payment integration (Stripe, PayPal, Paymob, Tap)",
      "Live classes with LiveKit integration",
      "Automatic certificate generation",
    ],
    featuresAr: [
      "نظام دخول متعدد المستخدمين (طالب، معلم، مدير)",
      "إنشاء الدورات بفصول ودروس ورفع الفيديوهات",
      "نظام اختبارات بأسئلة اختيار من متعدد",
      "بوابات دفع متكاملة (Stripe وPayPal وPaymob وTap)",
      "حصص مباشرة عبر LiveKit",
      "إصدار الشهادات تلقائياً",
    ],
    duration: "Dec 2024",
    link: "https://elearning-pro-pearl.vercel.app/",
  },
  {
    slug: "misbar-tech",
    title: "Misbar Tech",
    category: "ERP System",
    categoryAr: "نظام تخطيط الموارد (ERP)",
    summary:
      "A comprehensive enterprise resource planning system designed for large-scale organizations. Streamlines operations across sales, purchasing, inventory, accounting, and POS.",
    summaryAr:
      "نظام متكامل لتخطيط موارد المؤسسات مصمم للمؤسسات الكبرى، يُنظّم العمليات عبر المبيعات والمشتريات والمخزون والحسابات ونقاط البيع.",
    description:
      "Misbar Tech is a powerful ERP solution that revolutionizes how large organizations manage their daily operations. The system provides an integrated approach to handling sales processes, purchasing workflows, inventory management, accounting modules, and point-of-sale functionality. Built with scalability in mind, it supports multiple branches, users, and complex business workflows while maintaining excellent performance.",
    descriptionAr:
      "مصبار تك حل قوي لتخطيط موارد المؤسسات يُحدث نقلة نوعية في طريقة إدارة المؤسسات الكبرى لعملياتها اليومية. يوفر النظام نهجاً متكاملاً لإدارة عمليات البيع وسير عمل المشتريات وإدارة المخزون ووحدات الحسابات ونقاط البيع. وقد صُمم مع مراعاة قابلية التوسع، فهو يدعم الفروع المتعددة والمستخدمين وسير العمل المعقد للأعمال، مع الحفاظ على أداء ممتاز.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Multi-branch management system",
      "Real-time inventory tracking",
      "Advanced reporting and analytics",
      "Role-based access control",
      "Integration with accounting systems",
    ],
    featuresAr: [
      "نظام إدارة متعدد الفروع",
      "تتبع المخزون لحظياً",
      "تقارير وتحليلات متقدمة",
      "صلاحيات وصول قائمة على الأدوار",
      "تكامل مع الأنظمة المحاسبية",
    ],
    duration: "Oct 2024 – Present",
    link: "https://misbar-tech.com/en",
  },
  {
    slug: "fatora-cloud",
    title: "Fatora Cloud",
    category: "ERP System",
    categoryAr: "نظام تخطيط الموارد (ERP)",
    summary:
      "Cloud-based ERP and invoicing system (الفاتورة السحابية) for managing invoices, accounting, inventory, and business operations with a modern Arabic-first interface.",
    summaryAr:
      "نظام تخطيط موارد وفوترة سحابي (الفاتورة السحابية) لإدارة الفواتير والحسابات والمخزون وعمليات الأعمال بواجهة عصرية مصممة أولاً باللغة العربية.",
    description:
      "Fatora Cloud is a cloud-based ERP and electronic invoicing platform built for small and medium businesses. It centralizes invoicing, accounting, inventory, and day-to-day operations in a single, secure workspace. The system is designed Arabic-first with full RTL support, offering a clean and intuitive dashboard, role-based access, and real-time data so business owners can manage their finances from anywhere.",
    descriptionAr:
      "الفاتورة السحابية (Fatora Cloud) منصة سحابية لتخطيط الموارد والفوترة الإلكترونية مُصممة للشركات الصغيرة والمتوسطة. تجمع المنصة الفوترة والحسابات والمخزون والعمليات اليومية في مساحة عمل آمنة واحدة. صُمم النظام أولاً باللغة العربية بدعم كامل للكتابة من اليمين إلى اليسار، مع لوحة تحكم بسيطة وسهلة الاستخدام، وصلاحيات قائمة على الأدوار، وبيانات لحظية تتيح لأصحاب الأعمال إدارة أموالهم من أي مكان.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Electronic invoicing & billing management",
      "Integrated accounting modules",
      "Inventory and product management",
      "Arabic-first UI with full RTL support",
    ],
    featuresAr: [
      "إدارة الفوترة الإلكترونية والحسابات",
      "وحدات محاسبية متكاملة",
      "إدارة المخزون والمنتجات",
      "واجهة مصممة أولاً بالعربية بدعم كامل للكتابة من اليمين لليسار",
    ],
    duration: "2025",
    link: "https://fatora-iota.vercel.app/auth/login",
  },
  {
    slug: "iropit",
    title: "iRopit",
    category: "Platform",
    categoryAr: "منصة",
    summary:
      "Cross-platform device sync app that brings your phone's SMS, calls, and app notifications to your computer in real-time with end-to-end 256-bit encryption.",
    summaryAr:
      "تطبيق مزامنة أجهزة متعدد المنصات ينقل رسائل هاتفك النصية ومكالماتك وإشعارات التطبيقات إلى حاسوبك لحظياً بتشفير من طرف إلى طرف بقوة 256 بت.",
    description:
      "iRopit is a smart device sync platform that seamlessly connects your phone with your computer. It lets users view and manage SMS messages, access the complete call history, and receive WhatsApp, Telegram, and other app notifications directly on the desktop in real-time. The platform includes cross-device chat with file sharing and protects all data with 256-bit end-to-end encryption. It ships as a web landing site paired with an Android app and a Chrome extension.",
    descriptionAr:
      "آي روبيت (iRopit) منصة ذكية لمزامنة الأجهزة تربط هاتفك بحاسوبك بسلاسة. تتيح للمستخدمين عرض الرسائل النصية وإدارتها، والوصول إلى سجل المكالمات الكامل، واستقبال إشعارات واتساب وتيليجرام وغيرها من التطبيقات مباشرة على سطح المكتب لحظياً. كما تضم المنصة محادثات بين الأجهزة مع مشاركة الملفات، وتحمي جميع البيانات بتشفير من طرف إلى طرف بقوة 256 بت. وتُقدَّم في صورة موقع تعريفي مصحوب بتطبيق أندرويد وإضافة لمتصفح كروم.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Real-time SMS sync to the desktop",
      "Complete call history access",
      "WhatsApp & Telegram notification sync",
      "256-bit end-to-end encryption",
    ],
    featuresAr: [
      "مزامنة الرسائل النصية لحظياً مع سطح المكتب",
      "الوصول إلى سجل المكالمات الكامل",
      "مزامنة إشعارات واتساب وتيليجرام",
      "تشفير من طرف إلى طرف بقوة 256 بت",
    ],
    duration: "2025",
    link: "https://www.iropit.com/",
  },
  {
    slug: "rakaya-platform",
    title: "Rakaya Platform",
    category: "Corporate",
    categoryAr: "الشركات",
    summary:
      "Advisory services platform for organizational development. Displays company services, tasks, and comprehensive business solutions.",
    summaryAr:
      "منصة خدمات استشارية للتطوير المؤسسي، تعرض خدمات الشركة ومهامها وحلولها الشاملة للأعمال.",
    description:
      "Rakaya is a professional advisory services platform that empowers organizations to achieve their full potential. The platform showcases comprehensive business consulting services, organizational development solutions, and strategic planning tools. With a modern, bilingual interface supporting both Arabic and English, it serves clients across the Middle East region.",
    descriptionAr:
      "رقايا منصة استشارية احترافية تمكّن المؤسسات من تحقيق كامل إمكاناتها. تعرض المنصة خدمات استشارات أعمال شاملة، وحلول تطوير مؤسسي، وأدوات تخطيط استراتيجي، بواجهة عصرية ثنائية اللغة (عربي/إنجليزي) تخدم العملاء في جميع أنحاء الشرق الأوسط.",
    tags: ["Next.js", "Tailwind CSS"],
    features: [
      "Bilingual support (Arabic/English)",
      "Service showcase with detailed descriptions",
      "Client testimonials section",
      "Contact and inquiry forms",
    ],
    featuresAr: [
      "دعم ثنائي اللغة (عربي/إنجليزي)",
      "عرض الخدمات بأوصاف تفصيلية",
      "قسم آراء العملاء",
      "نماذج التواصل والاستفسار",
    ],
    duration: "Oct 2023 – Present",
    link: "https://www.rakaya.sa/",
  },
  {
    slug: "tajeer-car-rent",
    title: "Tajeer Car Rent",
    category: "Car Rental",
    categoryAr: "تأجير السيارات",
    summary:
      "TAAJEER marketplace platform for car rental in Saudi Arabia. Enables car rental companies to list and display their vehicles and services with easy booking.",
    summaryAr:
      "منصة تأجير (TAAJEER) لتأجير السيارات في المملكة العربية السعودية، تتيح لشركات تأجير السيارات عرض مركباتها وخدماتها مع نظام حجز سهل.",
    description:
      "Tajeer is a comprehensive car rental marketplace serving the Saudi Arabian market. The platform connects car rental companies with customers, providing an intuitive interface for browsing, comparing, and booking vehicles. Features include advanced filtering, real-time availability checking, and secure booking processes.",
    descriptionAr:
      "تأجير سوق إلكتروني شامل لتأجير السيارات يخدم السوق السعودي. تربط المنصة بين شركات تأجير السيارات والعملاء عبر واجهة سهلة لتصفح المركبات ومقارنتها وحجزها. وتشمل مزاياها فلترة متقدمة، والتحقق من التوفر لحظياً، وعمليات حجز آمنة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Vehicle search and filtering",
      "Real-time availability",
      "Secure booking system",
      "Company dashboards",
    ],
    featuresAr: [
      "البحث عن المركبات وفلترتها",
      "التحقق من التوفر لحظياً",
      "نظام حجز آمن",
      "لوحات تحكم للشركات",
    ],
    duration: "Jun 2021 – Jan 2022",
    link: "https://www.tajeercarrent.com/",
  },
  {
    slug: "vip-car-rental-uae",
    title: "VIP Car Rental UAE",
    category: "Car Rental",
    categoryAr: "تأجير السيارات",
    summary:
      "Premium car rental platform in UAE offering luxury and economy vehicles. Features advanced search, booking system, and fleet management.",
    summaryAr:
      "منصة متميزة لتأجير السيارات في الإمارات تقدّم مركبات فاخرة واقتصادية، مع بحث متقدم ونظام حجز وإدارة أسطول.",
    description:
      "VIP Car Rental is a premium vehicle rental service operating in the UAE, offering an extensive fleet of luxury and economy vehicles. The platform provides seamless booking experience with advanced search capabilities, detailed vehicle specifications, and transparent pricing.",
    descriptionAr:
      "في آي بي لتأجير السيارات خدمة تأجير مركبات متميزة تعمل في الإمارات، وتضم أسطولاً واسعاً من المركبات الفاخرة والاقتصادية. توفر المنصة تجربة حجز سلسة بإمكانيات بحث متقدمة، ومواصفات تفصيلية للمركبات، وأسعار شفافة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Luxury vehicle catalog",
      "Advanced booking system",
      "Price comparison tools",
      "Multi-language support",
    ],
    featuresAr: [
      "كتالوج للمركبات الفاخرة",
      "نظام حجز متقدم",
      "أدوات مقارنة الأسعار",
      "دعم متعدد اللغات",
    ],
    duration: "3 months",
    link: "https://www.vipcarrental.ae/",
  },
  {
    slug: "next-car",
    title: "Next Car",
    category: "Car Rental",
    categoryAr: "تأجير السيارات",
    summary:
      "Modern car rental platform with sleek UI, vehicle filtering, booking management, and responsive design for all devices.",
    summaryAr:
      "منصة عصرية لتأجير السيارات بواجهة أنيقة وفلترة للمركبات وإدارة حجوزات وتصميم متجاوب لجميع الأجهزة.",
    description:
      "Next Car is a modern car rental solution built with the latest web technologies. The platform offers a sleek, user-friendly interface that makes finding and booking the perfect vehicle effortless, with comprehensive filtering options and a streamlined booking process.",
    descriptionAr:
      "نكست كار حل عصري لتأجير السيارات مبني بأحدث تقنيات الويب. تقدّم المنصة واجهة أنيقة وسهلة الاستخدام تجعل إيجاد المركبة المناسبة وحجزها أمراً بسيطاً، مع خيارات فلترة شاملة وعملية حجز مبسطة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Modern UI/UX design",
      "Advanced vehicle filtering",
      "Quick booking process",
      "Mobile-first responsive design",
    ],
    featuresAr: [
      "تصميم واجهة وتجربة مستخدم عصري",
      "فلترة متقدمة للمركبات",
      "عملية حجز سريعة",
      "تصميم متجاوب يراعي الجوال أولاً",
    ],
    duration: "2 months",
    link: "https://next-car-rho.vercel.app/",
  },
  {
    slug: "rental-car",
    title: "Rental Car",
    category: "Car Rental",
    categoryAr: "تأجير السيارات",
    summary:
      "User-friendly car rental website with vehicle catalog, pricing comparison, and seamless reservation process.",
    summaryAr:
      "موقع سهل الاستخدام لتأجير السيارات يضم كتالوج مركبات، ومقارنة أسعار، وعملية حجز سلسة.",
    description:
      "Rental Car is a streamlined car rental platform designed with user experience as the top priority. The clean interface allows customers to quickly browse available vehicles, compare pricing options, and complete reservations in minutes.",
    descriptionAr:
      "رينتال كار منصة مبسطة لتأجير السيارات صُممت مع إعطاء الأولوية لتجربة المستخدم. تتيح الواجهة النظيفة للعملاء تصفح المركبات المتاحة بسرعة ومقارنة خيارات الأسعار وإتمام الحجز خلال دقائق.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Simple and clean interface",
      "Quick vehicle search",
      "Transparent pricing",
      "Easy reservation flow",
    ],
    featuresAr: [
      "واجهة بسيطة ونظيفة",
      "بحث سريع عن المركبات",
      "أسعار شفافة",
      "عملية حجز سهلة",
    ],
    duration: "1 month",
    link: "https://rental-car-nine.vercel.app/",
  },
  {
    slug: "bayan-dashboard",
    title: "Bayan Dashboard",
    category: "Dashboard",
    categoryAr: "لوحة تحكم",
    summary:
      "Comprehensive admin dashboard with data visualization, analytics, user management, and reporting features for business intelligence.",
    summaryAr:
      "لوحة تحكم إدارية شاملة تضم عرضاً بصرياً للبيانات وتحليلات وإدارة مستخدمين وتقارير لذكاء الأعمال.",
    description:
      "Bayan Dashboard is a powerful business intelligence platform that transforms raw data into actionable insights. The dashboard features interactive charts, real-time analytics, comprehensive user management, and customizable reporting tools.",
    descriptionAr:
      "لوحة بيان منصة قوية لذكاء الأعمال تحوّل البيانات الخام إلى رؤى قابلة للتنفيذ. تضم اللوحة رسوماً بيانية تفاعلية، وتحليلات لحظية، وإدارة شاملة للمستخدمين، وأدوات تقارير قابلة للتخصيص.",
    tags: ["React.js", "TypeScript", "Chart.js"],
    features: [
      "Interactive data visualization",
      "Real-time analytics",
      "User management system",
      "Custom report generation",
    ],
    featuresAr: [
      "عرض بصري تفاعلي للبيانات",
      "تحليلات لحظية",
      "نظام إدارة المستخدمين",
      "إنشاء تقارير مخصصة",
    ],
    duration: "3 months",
    link: "https://bayan-dashborad.vercel.app/",
  },
  {
    slug: "saray-el-nile",
    title: "Saray El Nile",
    category: "Tourism",
    categoryAr: "السياحة",
    summary:
      "Online tourism booking platform for exploring and reserving tours across Egyptian destinations with smooth interactive experience.",
    summaryAr:
      "منصة سياحية إلكترونية لاستكشاف وحجز الجولات في الوجهات المصرية بتجربة تفاعلية سلسة.",
    description:
      "Saray El Nile is a premier tourism platform showcasing the beauty of Egypt's destinations along the Nile. The platform offers an immersive browsing experience with stunning visuals, detailed tour information, and seamless booking capabilities.",
    descriptionAr:
      "سراي النيل منصة سياحية رائدة تعرض جمال الوجهات المصرية على ضفاف النيل. تقدّم المنصة تجربة تصفح غامرة بصور مبهرة، ومعلومات تفصيلية عن الجولات، وإمكانيات حجز سلسة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Beautiful destination galleries",
      "Tour package customization",
      "Secure booking system",
      "Interactive itineraries",
    ],
    featuresAr: [
      "معارض صور جذابة للوجهات",
      "تخصيص باقات الجولات",
      "نظام حجز آمن",
      "برامج رحلات تفاعلية",
    ],
    duration: "2 months",
    link: "https://vercel.com/stayexpo/saray-el-nile",
  },
  {
    slug: "quran-courses",
    title: "Quran Courses",
    category: "Education",
    categoryAr: "التعليم",
    summary:
      "Platform for online Quran memorization through video meetings with separate sections for students and teachers, featuring real-time chat.",
    summaryAr:
      "منصة لتحفيظ القرآن الكريم عبر لقاءات فيديو، بأقسام منفصلة للطلاب والمعلمين ودردشة فورية.",
    description:
      "Quran Courses is an innovative e-learning platform dedicated to Quran memorization and Islamic education. The platform connects qualified teachers with students worldwide through video conferencing, with scheduled lessons, progress tracking, and real-time chat.",
    descriptionAr:
      "دورات القرآن منصة تعليمية مبتكرة مخصصة لتحفيظ القرآن الكريم والتعليم الإسلامي. تربط المنصة معلمين مؤهلين بطلاب حول العالم عبر مكالمات الفيديو، مع دروس مجدولة، ومتابعة للتقدم، ودردشة فورية.",
    tags: ["React.js", "Jitsi Meet", "Real-time Chat"],
    features: [
      "Live video lessons with Jitsi",
      "Student progress tracking",
      "Real-time chat system",
      "Teacher dashboard",
    ],
    featuresAr: [
      "دروس فيديو مباشرة عبر Jitsi",
      "متابعة تقدم الطالب",
      "نظام دردشة فورية",
      "لوحة تحكم للمعلم",
    ],
    duration: "4 months",
    link: "https://quranqurses-oky5.vercel.app/",
  },
  {
    slug: "ealaani-ads-platform",
    title: "Ealaani Ads Platform",
    category: "Marketing",
    categoryAr: "التسويق",
    summary:
      "Digital advertising and marketing platform for creating, managing, and tracking ad campaigns with analytics dashboard.",
    summaryAr:
      "منصة إعلانات وتسويق رقمي لإنشاء الحملات الإعلانية وإدارتها ومتابعتها عبر لوحة تحليلات.",
    description:
      "Ealaani is a comprehensive digital advertising platform that empowers businesses to create, manage, and optimize their marketing campaigns, with powerful analytics, audience targeting tools, and campaign performance tracking.",
    descriptionAr:
      "إعلاني منصة إعلانات رقمية شاملة تمكّن الشركات من إنشاء حملاتها التسويقية وإدارتها وتحسينها، مع تحليلات قوية، وأدوات استهداف الجمهور، ومتابعة أداء الحملات.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Campaign creation wizard",
      "Analytics dashboard",
      "Audience targeting",
      "Budget management",
    ],
    featuresAr: [
      "معالج إنشاء الحملات",
      "لوحة تحليلات",
      "استهداف الجمهور",
      "إدارة الميزانية",
    ],
    duration: "3 months",
    link: "https://ealaani.vercel.app/",
  },
  {
    slug: "ealaani-dev",
    title: "Ealaani Dev",
    category: "Marketing",
    categoryAr: "التسويق",
    summary:
      "Development version of Ealaani platform with advanced features for campaign management and performance tracking.",
    summaryAr:
      "النسخة التطويرية من منصة إعلاني بمزايا متقدمة لإدارة الحملات ومتابعة الأداء.",
    description:
      "Ealaani Dev is the development and staging environment for the Ealaani advertising platform, including all production features plus experimental capabilities being tested before public release.",
    descriptionAr:
      "إعلاني - النسخة التطويرية هي بيئة التطوير والاختبار لمنصة إعلاني الإعلانية، وتضم جميع مزايا الإصدار الرسمي بالإضافة إلى إمكانيات تجريبية قيد الاختبار قبل الإطلاق العام.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Beta features testing",
      "Advanced analytics",
      "A/B testing tools",
      "Performance monitoring",
    ],
    featuresAr: [
      "اختبار مزايا تجريبية",
      "تحليلات متقدمة",
      "أدوات اختبار A/B",
      "مراقبة الأداء",
    ],
    duration: "Ongoing",
    link: "https://ealaani-dev.vercel.app/",
  },
  {
    slug: "new-clinic",
    title: "New Clinic",
    category: "Healthcare",
    categoryAr: "الرعاية الصحية",
    summary:
      "Medical clinic management system with patient records, appointment scheduling, doctor profiles, and healthcare services.",
    summaryAr:
      "نظام إدارة عيادات طبية يضم سجلات المرضى وجدولة المواعيد وملفات الأطباء وخدمات الرعاية الصحية.",
    description:
      "New Clinic is a comprehensive healthcare management system designed for medical clinics and healthcare providers. The platform streamlines patient management, appointment scheduling, medical records, and billing processes.",
    descriptionAr:
      "نيو كلينك نظام شامل لإدارة الرعاية الصحية مصمم للعيادات الطبية ومقدمي الرعاية الصحية. تُبسّط المنصة إدارة المرضى وجدولة المواعيد والسجلات الطبية وعمليات الفوترة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Doctor profiles and availability",
      "Billing and invoicing",
    ],
    featuresAr: [
      "إدارة سجلات المرضى",
      "جدولة المواعيد",
      "ملفات الأطباء ومواعيد توفرهم",
      "الفوترة والحسابات",
    ],
    duration: "3 months",
    link: "https://new-clinic-zrx3.vercel.app/",
  },
  {
    slug: "angazatk-admin",
    title: "Angazatk Admin",
    category: "Dashboard",
    categoryAr: "لوحة تحكم",
    summary:
      "Admin control panel for the Angazatk platform with user management, content moderation, and system configuration.",
    summaryAr:
      "لوحة تحكم إدارية لمنصة أنجزتك تضم إدارة المستخدمين ومراجعة المحتوى وإعدادات النظام.",
    description:
      "Angazatk Admin is a powerful administrative dashboard for managing the Angazatk platform. It provides comprehensive tools for user management, content moderation, system configuration, and analytics.",
    descriptionAr:
      "لوحة أنجزتك الإدارية لوحة تحكم قوية لإدارة منصة أنجزتك، توفر أدوات شاملة لإدارة المستخدمين ومراجعة المحتوى وإعدادات النظام والتحليلات.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "User management",
      "Content moderation tools",
      "System configuration",
      "Role-based permissions",
    ],
    featuresAr: [
      "إدارة المستخدمين",
      "أدوات مراجعة المحتوى",
      "إعدادات النظام",
      "صلاحيات قائمة على الأدوار",
    ],
    duration: "2 months",
    link: "https://angazatk-admin.vercel.app/",
  },
  {
    slug: "tour-platform",
    title: "Tour Platform",
    category: "Tourism",
    categoryAr: "السياحة",
    summary:
      "Tourism and travel booking platform with tour packages, itinerary planning, and reservation management.",
    summaryAr:
      "منصة حجوزات سياحية وسفر تضم باقات جولات وتخطيط برامج رحلات وإدارة الحجوزات.",
    description:
      "Tour Platform is a comprehensive travel booking solution that connects travelers with unique tour experiences, featuring detailed tour packages, customizable itineraries, secure booking, and travel planning tools.",
    descriptionAr:
      "تور بلاتفورم حل شامل لحجوزات السفر يربط المسافرين بتجارب سياحية فريدة، ويضم باقات جولات تفصيلية، وبرامج رحلات قابلة للتخصيص، وحجزاً آمناً، وأدوات تخطيط للسفر.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Tour package browsing",
      "Itinerary customization",
      "Secure reservations",
      "Review system",
    ],
    featuresAr: [
      "تصفح باقات الجولات",
      "تخصيص برامج الرحلات",
      "حجوزات آمنة",
      "نظام تقييمات",
    ],
    duration: "2 months",
    link: "https://tour-phi-ten.vercel.app/login",
  },
  {
    slug: "egypt-book-tours",
    title: "Egypt Book Tours",
    category: "Tourism",
    categoryAr: "السياحة",
    summary:
      "Tourism booking platform for a leading Egyptian travel company. Allows tourists to browse, book, and customize trips across Egypt.",
    summaryAr:
      "منصة حجوزات سياحية لشركة سفر مصرية رائدة، تتيح للسياح تصفح رحلات مصر وحجزها وتخصيصها.",
    description:
      "Egypt Book Tours is a premier tourism platform dedicated to showcasing Egypt's rich heritage and breathtaking destinations, offering comprehensive tour packages with detailed itineraries, pricing, and booking capabilities.",
    descriptionAr:
      "إيجيبت بوك تورز منصة سياحية رائدة مخصصة لعرض تراث مصر الغني ووجهاتها الخلابة، وتقدّم باقات جولات شاملة ببرامج رحلات تفصيلية وأسعار وإمكانيات حجز.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Destination exploration",
      "Tour customization",
      "Group booking options",
      "Photo galleries",
    ],
    featuresAr: [
      "استكشاف الوجهات",
      "تخصيص الجولات",
      "خيارات الحجز الجماعي",
      "معارض صور",
    ],
    duration: "2 months",
    link: "https://egypt-book-tours-ashy.vercel.app/",
  },
  {
    slug: "egypt-travel-light",
    title: "Egypt Travel Light",
    category: "Tourism",
    categoryAr: "السياحة",
    summary:
      "Lightweight travel booking website for Egypt tourism with fast loading, tour packages, and easy reservation system.",
    summaryAr:
      "موقع سفر خفيف لحجوزات السياحة في مصر، بتحميل سريع وباقات جولات ونظام حجز سهل.",
    description:
      "Egypt Travel Light is an optimized, fast-loading travel platform focused on delivering essential booking functionality with maximum performance, even on slower connections.",
    descriptionAr:
      "إيجيبت ترافيل لايت منصة سفر محسّنة وسريعة التحميل تركّز على تقديم وظائف الحجز الأساسية بأعلى أداء، حتى مع الاتصالات البطيئة.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Lightning-fast performance",
      "Essential booking features",
      "Mobile-optimized",
      "Simple navigation",
    ],
    featuresAr: [
      "أداء فائق السرعة",
      "مزايا حجز أساسية",
      "محسّن للجوال",
      "تصفح بسيط",
    ],
    duration: "1 month",
    link: "https://egypt-travel-light-eta.vercel.app/",
  },
  {
    slug: "withaq-vdr",
    title: "Withaq VDR",
    category: "Business",
    categoryAr: "الأعمال",
    summary:
      "Virtual Data Room platform for secure document sharing, due diligence, and confidential business transactions.",
    summaryAr:
      "منصة غرفة بيانات افتراضية لمشاركة المستندات بأمان، والفحص النافي للجهالة، والمعاملات التجارية السرية.",
    description:
      "Withaq VDR is a secure Virtual Data Room solution designed for businesses requiring confidential document management, providing bank-level security for sharing sensitive documents during due diligence, M&A transactions, and legal proceedings.",
    descriptionAr:
      "وثاق VDR حل آمن لغرفة البيانات الافتراضية مصمم للشركات التي تحتاج إدارة سرية للمستندات، ويوفر أماناً بمستوى البنوك لمشاركة المستندات الحساسة أثناء الفحص النافي للجهالة، وصفقات الاندماج والاستحواذ، والإجراءات القانونية.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Secure document storage",
      "Granular access controls",
      "Audit trail logging",
      "Encrypted file sharing",
    ],
    featuresAr: [
      "تخزين آمن للمستندات",
      "صلاحيات وصول دقيقة",
      "سجل تدقيق كامل للعمليات",
      "مشاركة ملفات مشفّرة",
    ],
    duration: "4 months",
    link: "https://withaqvdr-front.vercel.app/login",
  },
  {
    slug: "zaman-platform",
    title: "Zaman Platform",
    category: "Platform",
    categoryAr: "منصة",
    summary:
      "Multi-purpose platform with modern design, offering various services and features with Arabic RTL support.",
    summaryAr:
      "منصة متعددة الأغراض بتصميم عصري، تقدّم خدمات ومزايا متنوعة بدعم كامل للعربية من اليمين إلى اليسار.",
    description:
      "Zaman Platform is a versatile, multi-service platform built with modern web technologies. Featuring full Arabic RTL support, the platform serves diverse user needs with an elegant, intuitive interface and a modular architecture.",
    descriptionAr:
      "منصة زمان منصة متعددة الخدمات ومرنة، مبنية بأحدث تقنيات الويب. وبفضل دعمها الكامل للعربية من اليمين إلى اليسار، تلبي المنصة احتياجات متنوعة للمستخدمين بواجهة أنيقة وسهلة الاستخدام وبنية معيارية.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Full RTL support",
      "Multi-service architecture",
      "Modern UI/UX",
      "Easy customization",
    ],
    featuresAr: [
      "دعم كامل للكتابة من اليمين لليسار",
      "بنية متعددة الخدمات",
      "واجهة وتجربة مستخدم عصرية",
      "تخصيص سهل",
    ],
    duration: "2 months",
    link: "https://zaman-new.vercel.app/",
  },
  {
    slug: "games-platform",
    title: "Games Platform",
    category: "Entertainment",
    categoryAr: "الترفيه",
    summary:
      "Interactive gaming platform with game library, user profiles, achievements, and social features.",
    summaryAr:
      "منصة ألعاب تفاعلية تضم مكتبة ألعاب وملفات مستخدمين وإنجازات ومزايا اجتماعية.",
    description:
      "Games Platform is an engaging gaming hub where players can discover, play, and compete in various games. The platform features a comprehensive game library, user profiles with achievement tracking, leaderboards, and social features.",
    descriptionAr:
      "منصة الألعاب مركز ألعاب ممتع يتيح للاعبين اكتشاف ألعاب متنوعة ولعبها والتنافس فيها. تضم المنصة مكتبة ألعاب شاملة، وملفات مستخدمين مع تتبع للإنجازات، ولوحات صدارة، ومزايا اجتماعية.",
    tags: ["React.js", "JavaScript", "CSS"],
    features: [
      "Game library",
      "User profiles",
      "Achievement system",
      "Leaderboards",
    ],
    featuresAr: [
      "مكتبة ألعاب",
      "ملفات المستخدمين",
      "نظام إنجازات",
      "لوحات الصدارة",
    ],
    duration: "2 months",
    link: "https://games-2.vercel.app/",
  },
  {
    slug: "anjazatk",
    title: "Anjazatk",
    category: "Productivity",
    categoryAr: "الإنتاجية",
    summary:
      "Achievement and goal tracking platform helping users set, monitor, and accomplish their personal and professional goals.",
    summaryAr:
      "منصة لتتبع الإنجازات والأهداف تساعد المستخدمين على تحديد أهدافهم الشخصية والمهنية ومتابعتها وتحقيقها.",
    description:
      "Anjazatk is a productivity platform designed to help individuals and teams achieve their goals, providing tools for setting SMART goals, tracking progress, celebrating milestones, and staying motivated.",
    descriptionAr:
      "أنجزتك منصة إنتاجية مصممة لمساعدة الأفراد والفرق على تحقيق أهدافهم، وتوفر أدوات لتحديد أهداف ذكية (SMART)، ومتابعة التقدم، والاحتفاء بالإنجازات، والحفاظ على الدافعية.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Goal setting tools",
      "Progress tracking",
      "Milestone celebrations",
      "Analytics dashboard",
    ],
    featuresAr: [
      "أدوات تحديد الأهداف",
      "متابعة التقدم",
      "الاحتفاء بالإنجازات",
      "لوحة تحليلات",
    ],
    duration: "2 months",
    link: "https://anjazatk.vercel.app/",
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning Platform",
    category: "Education",
    categoryAr: "التعليم",
    summary:
      "Comprehensive online learning platform with courses, video lessons, quizzes, progress tracking, and certificates.",
    summaryAr:
      "منصة تعليم إلكتروني شاملة تضم دورات ودروس فيديو واختبارات ومتابعة تقدم وشهادات.",
    description:
      "E-Learning Platform is a full-featured online education solution that brings quality learning experiences to students everywhere, offering structured courses, video lessons, interactive quizzes, progress tracking, and achievement certificates.",
    descriptionAr:
      "منصة التعليم الإلكتروني حل تعليمي متكامل يقدّم تجارب تعلّم عالية الجودة للطلاب في كل مكان، عبر دورات منظمة، ودروس فيديو، واختبارات تفاعلية، ومتابعة للتقدم، وشهادات إنجاز.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Video course library",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate generation",
    ],
    featuresAr: [
      "مكتبة دورات فيديو",
      "اختبارات تفاعلية",
      "متابعة التقدم",
      "إصدار الشهادات",
    ],
    duration: "4 months",
    link: "https://elearning-user-rmz.vercel.app/",
  },
  {
    slug: "mv-dashboard",
    title: "MV Dashboard",
    category: "Dashboard",
    categoryAr: "لوحة تحكم",
    summary:
      "Feature-rich admin dashboard with data management, user analytics, reporting tools, and system controls.",
    summaryAr:
      "لوحة تحكم إدارية غنية بالمزايا تضم إدارة البيانات وتحليلات المستخدمين وأدوات التقارير وإعدادات النظام.",
    description:
      "MV Dashboard is a comprehensive administrative interface providing powerful tools for data management and business intelligence, featuring intuitive data visualization, user analytics, automated reporting, and system control panels.",
    descriptionAr:
      "لوحة MV واجهة إدارية شاملة توفر أدوات قوية لإدارة البيانات وذكاء الأعمال، وتضم عرضاً بصرياً سهلاً للبيانات، وتحليلات للمستخدمين، وتقارير آلية، ولوحات تحكم بالنظام.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Data visualization",
      "User analytics",
      "Automated reports",
      "Role management",
    ],
    featuresAr: [
      "عرض بصري للبيانات",
      "تحليلات المستخدمين",
      "تقارير آلية",
      "إدارة الأدوار",
    ],
    duration: "3 months",
    link: "https://mv-dashboard.vercel.app/login",
  },
  {
    slug: "realstates-erp",
    title: "Realstates - ERP",
    category: "ERP System",
    categoryAr: "نظام تخطيط الموارد (ERP)",
    summary:
      "Comprehensive ERP system focused on real estate management, incorporating essential data management, accounting, and employee modules with property sale and rental capabilities.",
    summaryAr:
      "نظام تخطيط موارد شامل يركّز على إدارة العقارات، ويضم وحدات أساسية لإدارة البيانات والحسابات والموظفين مع إمكانيات بيع العقارات وتأجيرها.",
    description:
      "Realstates ERP is a specialized enterprise resource planning system tailored for the real estate industry. The platform manages property listings, sales processes, rental agreements, accounting, and employee operations.",
    descriptionAr:
      "ريل استيتس ERP نظام متخصص لتخطيط موارد المؤسسات مصمم لقطاع العقارات. تُدير المنصة إعلانات العقارات، وعمليات البيع، وعقود الإيجار، والحسابات، وعمليات الموظفين.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Property management",
      "Sales and rental tracking",
      "Accounting integration",
      "Employee management",
    ],
    featuresAr: [
      "إدارة العقارات",
      "متابعة المبيعات والإيجارات",
      "تكامل محاسبي",
      "إدارة الموظفين",
    ],
    duration: "6 months",
  },
  {
    slug: "erb-system-gold",
    title: "ERB System - Gold Companies",
    category: "ERP System",
    categoryAr: "نظام تخطيط الموارد (ERP)",
    summary:
      "Efficiently manages gold companies with seamless data management, advanced analytics, and streamlined operations using atomic design pattern.",
    summaryAr:
      "يدير شركات الذهب بكفاءة عبر إدارة بيانات سلسة وتحليلات متقدمة وعمليات مبسطة باستخدام نمط التصميم الذري (Atomic Design).",
    description:
      "ERB System is a specialized ERP solution designed for gold trading and jewelry companies. The system handles inventory management, pricing based on gold rates, customer management, and sales tracking, built with atomic design principles.",
    descriptionAr:
      "نظام ERB حل متخصص لتخطيط موارد المؤسسات مصمم لشركات تجارة الذهب والمجوهرات. يتولى النظام إدارة المخزون، والتسعير وفق أسعار الذهب، وإدارة العملاء، ومتابعة المبيعات، وقد بُني وفق مبادئ التصميم الذري.",
    tags: ["React.js", "React Query", "TypeScript", "Formik"],
    features: [
      "Gold inventory management",
      "Real-time pricing",
      "Customer management",
      "Sales tracking",
    ],
    featuresAr: [
      "إدارة مخزون الذهب",
      "تسعير لحظي",
      "إدارة العملاء",
      "متابعة المبيعات",
    ],
    duration: "5 months",
  },
  {
    slug: "master-travel-erp",
    title: "Master Travel System - ERP",
    category: "ERP System",
    categoryAr: "نظام تخطيط الموارد (ERP)",
    summary:
      "Comprehensive ERP system for the tourism industry with booking processes for Hajj, Umrah, local tours, and airline tickets.",
    summaryAr:
      "نظام تخطيط موارد شامل لقطاع السياحة يضم عمليات حجز الحج والعمرة والجولات المحلية وتذاكر الطيران.",
    description:
      "Master Travel System is an all-in-one ERP solution for travel agencies and tourism companies. The platform manages Hajj and Umrah bookings, local tour packages, airline ticketing, hotel reservations, and customer relationships.",
    descriptionAr:
      "نظام ماستر ترافيل حل متكامل لتخطيط موارد المؤسسات مخصص لوكالات السفر وشركات السياحة. تُدير المنصة حجوزات الحج والعمرة، وباقات الجولات المحلية، وتذاكر الطيران، وحجوزات الفنادق، وعلاقات العملاء.",
    tags: ["React.js", "TypeScript"],
    features: [
      "Hajj & Umrah booking",
      "Tour package management",
      "Airline ticketing",
      "Customer CRM",
    ],
    featuresAr: [
      "حجوزات الحج والعمرة",
      "إدارة باقات الجولات",
      "إصدار تذاكر الطيران",
      "إدارة علاقات العملاء (CRM)",
    ],
    duration: "6 months",
  },
  {
    slug: "pilgrims-platform",
    title: "Pilgrims Platform",
    category: "Religious Services",
    categoryAr: "الخدمات الدينية",
    summary:
      "Multi-tasking platform built dynamically with customizable colors and features to produce multiple platforms simultaneously.",
    summaryAr:
      "منصة متعددة المهام مبنية بشكل ديناميكي بألوان ومزايا قابلة للتخصيص لإنتاج عدة منصات في آن واحد.",
    description:
      "Pilgrims Platform is an innovative multi-tenant solution designed for Hajj and Umrah service providers. The platform features dynamic theming, allowing each client to have a customized branded experience, with modular features enabled per client.",
    descriptionAr:
      "منصة الحجاج حل مبتكر متعدد المستأجرين مصمم لمقدمي خدمات الحج والعمرة. تتميز المنصة بتصميم ديناميكي يتيح لكل عميل تجربة مخصصة بهويته الخاصة، مع مزايا معيارية تُفعّل حسب كل عميل.",
    tags: ["React.js", "TypeScript", "Dynamic Theming"],
    features: [
      "Dynamic theming",
      "Multi-tenant architecture",
      "Pilgrim registration",
      "Document management",
    ],
    featuresAr: [
      "تصميم ديناميكي قابل للتخصيص",
      "بنية متعددة المستأجرين",
      "تسجيل الحجاج",
      "إدارة المستندات",
    ],
    duration: "4 months",
  },
  {
    slug: "tarteel-dashboard",
    title: "Tarteel Dashboard",
    category: "Dashboard",
    categoryAr: "لوحة تحكم",
    summary:
      "Control panel for the Tarteel platform managing sessions, teachers, students, and site content with role-based permissions.",
    summaryAr:
      "لوحة تحكم لمنصة ترتيل تُدير الجلسات والمعلمين والطلاب ومحتوى الموقع بصلاحيات قائمة على الأدوار.",
    description:
      "Tarteel Dashboard is the administrative backbone of the Tarteel Quran learning platform. It provides comprehensive tools for managing teachers, students, session scheduling, content management, and platform settings.",
    descriptionAr:
      "لوحة ترتيل هي العمود الفقري الإداري لمنصة ترتيل لتعليم القرآن الكريم. توفر أدوات شاملة لإدارة المعلمين والطلاب وجدولة الجلسات وإدارة المحتوى وإعدادات المنصة.",
    tags: ["React.js", "TypeScript"],
    features: [
      "Teacher management",
      "Student enrollment",
      "Session scheduling",
      "Role-based access",
    ],
    featuresAr: [
      "إدارة المعلمين",
      "تسجيل الطلاب",
      "جدولة الجلسات",
      "صلاحيات قائمة على الأدوار",
    ],
    duration: "3 months",
  },
  {
    slug: "elmarma",
    title: "Elmarma",
    category: "Sports",
    categoryAr: "الرياضة",
    summary:
      "Football news site displaying instant news, match times, player transfers, club details, and statistics.",
    summaryAr:
      "موقع أخبار كرة قدم يعرض الأخبار الفورية ومواعيد المباريات وانتقالات اللاعبين وتفاصيل الأندية والإحصائيات.",
    description:
      "Elmarma is a comprehensive football news and statistics platform covering leagues and tournaments worldwide, providing real-time match updates, transfer news, player statistics, club information, and league standings.",
    descriptionAr:
      "الملعب منصة شاملة لأخبار كرة القدم وإحصائياتها تغطي الدوريات والبطولات حول العالم، وتقدّم تحديثات فورية للمباريات، وأخبار الانتقالات، وإحصائيات اللاعبين، ومعلومات الأندية، وترتيب الدوريات.",
    tags: ["React.js", "API Integration"],
    features: [
      "Live match updates",
      "Transfer news",
      "Player statistics",
      "League standings",
    ],
    featuresAr: [
      "تحديثات مباشرة للمباريات",
      "أخبار الانتقالات",
      "إحصائيات اللاعبين",
      "ترتيب الدوريات",
    ],
    duration: "3 months",
  },
  {
    slug: "elite-platform",
    title: "Elite Platform",
    category: "Education",
    categoryAr: "التعليم",
    summary:
      "Educational platform for UAE teachers providing paid and free courses with direct broadcasting and payment integration.",
    summaryAr:
      "منصة تعليمية لمعلمي الإمارات تقدّم دورات مدفوعة ومجانية مع بث مباشر وبوابات دفع متكاملة.",
    description:
      "Elite Platform is an educational marketplace connecting teachers with students in the UAE. Teachers can create and sell courses, offer free content, and conduct live broadcasts, with payments, enrollment, and content delivery handled end-to-end.",
    descriptionAr:
      "منصة إيليت سوق تعليمي يربط المعلمين بالطلاب في الإمارات. يمكن للمعلمين إنشاء الدورات وبيعها، وتقديم محتوى مجاني، وعقد بث مباشر، مع إدارة كاملة للمدفوعات والتسجيل وتسليم المحتوى.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Course marketplace",
      "Live broadcasting",
      "Payment integration",
      "Content analytics",
    ],
    featuresAr: [
      "سوق للدورات",
      "بث مباشر",
      "بوابات دفع متكاملة",
      "تحليلات المحتوى",
    ],
    duration: "4 months",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const projectCategories = Array.from(
  new Set(projects.map((p) => p.category))
)

export function getCategoryLabel(category: string, isRTL: boolean): string {
  if (!isRTL) return category
  const project = projects.find((p) => p.category === category)
  return project?.categoryAr ?? category
}
