// AQTech's real portfolio — case studies delivered by the team.
export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  tags: string[]
  features: string[]
  duration: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: "school-points",
    title: "School Points",
    category: "Education",
    summary:
      "Smart system for tracking student points and analyzing behavior to enhance academic engagement and discipline in schools.",
    description:
      "School Points (بوينت) is an innovative school management platform designed to track student behavior and academic performance through a gamified points system. The platform helps schools reduce absenteeism by 21%, decrease negative behaviors by 68%, and increase positive behaviors by 71%. It features a smart dashboard for monitoring, a motivating points system, real-time parent communication, detailed reports, and a rewards store. The system is flexible to adapt to each school's policies while maintaining high security standards for student data.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Smart dashboard for behavior & academic tracking",
      "Gamified points system for student motivation",
      "Real-time parent communication & reports",
      "Rewards store with customizable gifts",
      "Multi-role access (Admin, Teacher, Parent)",
      "Arabic/English bilingual support",
    ],
    duration: "Dec 2024",
    link: "https://school-points.com/",
  },
  {
    slug: "elearning-pro",
    title: "eLearning Pro",
    category: "Education",
    summary:
      "A comprehensive e-learning platform with multi-user system (Student, Teacher, Admin), course management, quizzes, payment integration, live classes, and certificates.",
    description:
      "eLearning Pro is a full-featured educational platform that provides a complete solution for online learning. The platform supports three user types: students, teachers, and administrators, each with dedicated dashboards and features. Teachers can create courses with chapters and lessons, upload videos, and conduct live classes using LiveKit. Students can browse courses, track progress, take quizzes, and earn certificates. The platform includes multiple payment gateways (Stripe, PayPal, Paymob, Tap Payments), coupon system, wishlist, and comprehensive admin controls.",
    tags: ["Next.js", "React.js", "TypeScript", "LiveKit", "Stripe", "PayPal"],
    features: [
      "Multi-user authentication (Student, Teacher, Admin)",
      "Course creation with chapters, lessons & video uploads",
      "Quiz system with multiple choice questions",
      "Payment integration (Stripe, PayPal, Paymob, Tap)",
      "Live classes with LiveKit integration",
      "Automatic certificate generation",
    ],
    duration: "Dec 2024",
    link: "https://elearning-pro-pearl.vercel.app/",
  },
  {
    slug: "misbar-tech",
    title: "Misbar Tech",
    category: "ERP System",
    summary:
      "A comprehensive enterprise resource planning system designed for large-scale organizations. Streamlines operations across sales, purchasing, inventory, accounting, and POS.",
    description:
      "Misbar Tech is a powerful ERP solution that revolutionizes how large organizations manage their daily operations. The system provides an integrated approach to handling sales processes, purchasing workflows, inventory management, accounting modules, and point-of-sale functionality. Built with scalability in mind, it supports multiple branches, users, and complex business workflows while maintaining excellent performance.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Multi-branch management system",
      "Real-time inventory tracking",
      "Advanced reporting and analytics",
      "Role-based access control",
      "Integration with accounting systems",
    ],
    duration: "Oct 2024 – Present",
    link: "https://misbar-tech.com/en",
  },
  {
    slug: "fatora-cloud",
    title: "Fatora Cloud",
    category: "ERP System",
    summary:
      "Cloud-based ERP and invoicing system (الفاتورة السحابية) for managing invoices, accounting, inventory, and business operations with a modern Arabic-first interface.",
    description:
      "Fatora Cloud is a cloud-based ERP and electronic invoicing platform built for small and medium businesses. It centralizes invoicing, accounting, inventory, and day-to-day operations in a single, secure workspace. The system is designed Arabic-first with full RTL support, offering a clean and intuitive dashboard, role-based access, and real-time data so business owners can manage their finances from anywhere.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Electronic invoicing & billing management",
      "Integrated accounting modules",
      "Inventory and product management",
      "Arabic-first UI with full RTL support",
    ],
    duration: "2025",
    link: "https://fatora-iota.vercel.app/auth/login",
  },
  {
    slug: "iropit",
    title: "iRopit",
    category: "Platform",
    summary:
      "Cross-platform device sync app that brings your phone's SMS, calls, and app notifications to your computer in real-time with end-to-end 256-bit encryption.",
    description:
      "iRopit is a smart device sync platform that seamlessly connects your phone with your computer. It lets users view and manage SMS messages, access the complete call history, and receive WhatsApp, Telegram, and other app notifications directly on the desktop in real-time. The platform includes cross-device chat with file sharing and protects all data with 256-bit end-to-end encryption. It ships as a web landing site paired with an Android app and a Chrome extension.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Real-time SMS sync to the desktop",
      "Complete call history access",
      "WhatsApp & Telegram notification sync",
      "256-bit end-to-end encryption",
    ],
    duration: "2025",
    link: "https://www.iropit.com/",
  },
  {
    slug: "rakaya-platform",
    title: "Rakaya Platform",
    category: "Corporate",
    summary:
      "Advisory services platform for organizational development. Displays company services, tasks, and comprehensive business solutions.",
    description:
      "Rakaya is a professional advisory services platform that empowers organizations to achieve their full potential. The platform showcases comprehensive business consulting services, organizational development solutions, and strategic planning tools. With a modern, bilingual interface supporting both Arabic and English, it serves clients across the Middle East region.",
    tags: ["Next.js", "Tailwind CSS"],
    features: [
      "Bilingual support (Arabic/English)",
      "Service showcase with detailed descriptions",
      "Client testimonials section",
      "Contact and inquiry forms",
    ],
    duration: "Oct 2023 – Present",
    link: "https://www.rakaya.sa/",
  },
  {
    slug: "tajeer-car-rent",
    title: "Tajeer Car Rent",
    category: "Car Rental",
    summary:
      "TAAJEER marketplace platform for car rental in Saudi Arabia. Enables car rental companies to list and display their vehicles and services with easy booking.",
    description:
      "Tajeer is a comprehensive car rental marketplace serving the Saudi Arabian market. The platform connects car rental companies with customers, providing an intuitive interface for browsing, comparing, and booking vehicles. Features include advanced filtering, real-time availability checking, and secure booking processes.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Vehicle search and filtering",
      "Real-time availability",
      "Secure booking system",
      "Company dashboards",
    ],
    duration: "Jun 2021 – Jan 2022",
    link: "https://www.tajeercarrent.com/",
  },
  {
    slug: "vip-car-rental-uae",
    title: "VIP Car Rental UAE",
    category: "Car Rental",
    summary:
      "Premium car rental platform in UAE offering luxury and economy vehicles. Features advanced search, booking system, and fleet management.",
    description:
      "VIP Car Rental is a premium vehicle rental service operating in the UAE, offering an extensive fleet of luxury and economy vehicles. The platform provides seamless booking experience with advanced search capabilities, detailed vehicle specifications, and transparent pricing.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Luxury vehicle catalog",
      "Advanced booking system",
      "Price comparison tools",
      "Multi-language support",
    ],
    duration: "3 months",
    link: "https://www.vipcarrental.ae/",
  },
  {
    slug: "next-car",
    title: "Next Car",
    category: "Car Rental",
    summary:
      "Modern car rental platform with sleek UI, vehicle filtering, booking management, and responsive design for all devices.",
    description:
      "Next Car is a modern car rental solution built with the latest web technologies. The platform offers a sleek, user-friendly interface that makes finding and booking the perfect vehicle effortless, with comprehensive filtering options and a streamlined booking process.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Modern UI/UX design",
      "Advanced vehicle filtering",
      "Quick booking process",
      "Mobile-first responsive design",
    ],
    duration: "2 months",
    link: "https://next-car-rho.vercel.app/",
  },
  {
    slug: "rental-car",
    title: "Rental Car",
    category: "Car Rental",
    summary:
      "User-friendly car rental website with vehicle catalog, pricing comparison, and seamless reservation process.",
    description:
      "Rental Car is a streamlined car rental platform designed with user experience as the top priority. The clean interface allows customers to quickly browse available vehicles, compare pricing options, and complete reservations in minutes.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Simple and clean interface",
      "Quick vehicle search",
      "Transparent pricing",
      "Easy reservation flow",
    ],
    duration: "1 month",
    link: "https://rental-car-nine.vercel.app/",
  },
  {
    slug: "bayan-dashboard",
    title: "Bayan Dashboard",
    category: "Dashboard",
    summary:
      "Comprehensive admin dashboard with data visualization, analytics, user management, and reporting features for business intelligence.",
    description:
      "Bayan Dashboard is a powerful business intelligence platform that transforms raw data into actionable insights. The dashboard features interactive charts, real-time analytics, comprehensive user management, and customizable reporting tools.",
    tags: ["React.js", "TypeScript", "Chart.js"],
    features: [
      "Interactive data visualization",
      "Real-time analytics",
      "User management system",
      "Custom report generation",
    ],
    duration: "3 months",
    link: "https://bayan-dashborad.vercel.app/",
  },
  {
    slug: "saray-el-nile",
    title: "Saray El Nile",
    category: "Tourism",
    summary:
      "Online tourism booking platform for exploring and reserving tours across Egyptian destinations with smooth interactive experience.",
    description:
      "Saray El Nile is a premier tourism platform showcasing the beauty of Egypt's destinations along the Nile. The platform offers an immersive browsing experience with stunning visuals, detailed tour information, and seamless booking capabilities.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Beautiful destination galleries",
      "Tour package customization",
      "Secure booking system",
      "Interactive itineraries",
    ],
    duration: "2 months",
    link: "https://vercel.com/stayexpo/saray-el-nile",
  },
  {
    slug: "quran-courses",
    title: "Quran Courses",
    category: "Education",
    summary:
      "Platform for online Quran memorization through video meetings with separate sections for students and teachers, featuring real-time chat.",
    description:
      "Quran Courses is an innovative e-learning platform dedicated to Quran memorization and Islamic education. The platform connects qualified teachers with students worldwide through video conferencing, with scheduled lessons, progress tracking, and real-time chat.",
    tags: ["React.js", "Jitsi Meet", "Real-time Chat"],
    features: [
      "Live video lessons with Jitsi",
      "Student progress tracking",
      "Real-time chat system",
      "Teacher dashboard",
    ],
    duration: "4 months",
    link: "https://quranqurses-oky5.vercel.app/",
  },
  {
    slug: "ealaani-ads-platform",
    title: "Ealaani Ads Platform",
    category: "Marketing",
    summary:
      "Digital advertising and marketing platform for creating, managing, and tracking ad campaigns with analytics dashboard.",
    description:
      "Ealaani is a comprehensive digital advertising platform that empowers businesses to create, manage, and optimize their marketing campaigns, with powerful analytics, audience targeting tools, and campaign performance tracking.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Campaign creation wizard",
      "Analytics dashboard",
      "Audience targeting",
      "Budget management",
    ],
    duration: "3 months",
    link: "https://ealaani.vercel.app/",
  },
  {
    slug: "ealaani-dev",
    title: "Ealaani Dev",
    category: "Marketing",
    summary:
      "Development version of Ealaani platform with advanced features for campaign management and performance tracking.",
    description:
      "Ealaani Dev is the development and staging environment for the Ealaani advertising platform, including all production features plus experimental capabilities being tested before public release.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Beta features testing",
      "Advanced analytics",
      "A/B testing tools",
      "Performance monitoring",
    ],
    duration: "Ongoing",
    link: "https://ealaani-dev.vercel.app/",
  },
  {
    slug: "new-clinic",
    title: "New Clinic",
    category: "Healthcare",
    summary:
      "Medical clinic management system with patient records, appointment scheduling, doctor profiles, and healthcare services.",
    description:
      "New Clinic is a comprehensive healthcare management system designed for medical clinics and healthcare providers. The platform streamlines patient management, appointment scheduling, medical records, and billing processes.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Patient record management",
      "Appointment scheduling",
      "Doctor profiles and availability",
      "Billing and invoicing",
    ],
    duration: "3 months",
    link: "https://new-clinic-zrx3.vercel.app/",
  },
  {
    slug: "angazatk-admin",
    title: "Angazatk Admin",
    category: "Dashboard",
    summary:
      "Admin control panel for the Angazatk platform with user management, content moderation, and system configuration.",
    description:
      "Angazatk Admin is a powerful administrative dashboard for managing the Angazatk platform. It provides comprehensive tools for user management, content moderation, system configuration, and analytics.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "User management",
      "Content moderation tools",
      "System configuration",
      "Role-based permissions",
    ],
    duration: "2 months",
    link: "https://angazatk-admin.vercel.app/",
  },
  {
    slug: "tour-platform",
    title: "Tour Platform",
    category: "Tourism",
    summary:
      "Tourism and travel booking platform with tour packages, itinerary planning, and reservation management.",
    description:
      "Tour Platform is a comprehensive travel booking solution that connects travelers with unique tour experiences, featuring detailed tour packages, customizable itineraries, secure booking, and travel planning tools.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Tour package browsing",
      "Itinerary customization",
      "Secure reservations",
      "Review system",
    ],
    duration: "2 months",
    link: "https://tour-phi-ten.vercel.app/login",
  },
  {
    slug: "egypt-book-tours",
    title: "Egypt Book Tours",
    category: "Tourism",
    summary:
      "Tourism booking platform for a leading Egyptian travel company. Allows tourists to browse, book, and customize trips across Egypt.",
    description:
      "Egypt Book Tours is a premier tourism platform dedicated to showcasing Egypt's rich heritage and breathtaking destinations, offering comprehensive tour packages with detailed itineraries, pricing, and booking capabilities.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Destination exploration",
      "Tour customization",
      "Group booking options",
      "Photo galleries",
    ],
    duration: "2 months",
    link: "https://egypt-book-tours-ashy.vercel.app/",
  },
  {
    slug: "egypt-travel-light",
    title: "Egypt Travel Light",
    category: "Tourism",
    summary:
      "Lightweight travel booking website for Egypt tourism with fast loading, tour packages, and easy reservation system.",
    description:
      "Egypt Travel Light is an optimized, fast-loading travel platform focused on delivering essential booking functionality with maximum performance, even on slower connections.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Lightning-fast performance",
      "Essential booking features",
      "Mobile-optimized",
      "Simple navigation",
    ],
    duration: "1 month",
    link: "https://egypt-travel-light-eta.vercel.app/",
  },
  {
    slug: "withaq-vdr",
    title: "Withaq VDR",
    category: "Business",
    summary:
      "Virtual Data Room platform for secure document sharing, due diligence, and confidential business transactions.",
    description:
      "Withaq VDR is a secure Virtual Data Room solution designed for businesses requiring confidential document management, providing bank-level security for sharing sensitive documents during due diligence, M&A transactions, and legal proceedings.",
    tags: ["Next.js", "React.js", "TypeScript"],
    features: [
      "Secure document storage",
      "Granular access controls",
      "Audit trail logging",
      "Encrypted file sharing",
    ],
    duration: "4 months",
    link: "https://withaqvdr-front.vercel.app/login",
  },
  {
    slug: "zaman-platform",
    title: "Zaman Platform",
    category: "Platform",
    summary:
      "Multi-purpose platform with modern design, offering various services and features with Arabic RTL support.",
    description:
      "Zaman Platform is a versatile, multi-service platform built with modern web technologies. Featuring full Arabic RTL support, the platform serves diverse user needs with an elegant, intuitive interface and a modular architecture.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Full RTL support",
      "Multi-service architecture",
      "Modern UI/UX",
      "Easy customization",
    ],
    duration: "2 months",
    link: "https://zaman-new.vercel.app/",
  },
  {
    slug: "games-platform",
    title: "Games Platform",
    category: "Entertainment",
    summary:
      "Interactive gaming platform with game library, user profiles, achievements, and social features.",
    description:
      "Games Platform is an engaging gaming hub where players can discover, play, and compete in various games. The platform features a comprehensive game library, user profiles with achievement tracking, leaderboards, and social features.",
    tags: ["React.js", "JavaScript", "CSS"],
    features: [
      "Game library",
      "User profiles",
      "Achievement system",
      "Leaderboards",
    ],
    duration: "2 months",
    link: "https://games-2.vercel.app/",
  },
  {
    slug: "anjazatk",
    title: "Anjazatk",
    category: "Productivity",
    summary:
      "Achievement and goal tracking platform helping users set, monitor, and accomplish their personal and professional goals.",
    description:
      "Anjazatk is a productivity platform designed to help individuals and teams achieve their goals, providing tools for setting SMART goals, tracking progress, celebrating milestones, and staying motivated.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Goal setting tools",
      "Progress tracking",
      "Milestone celebrations",
      "Analytics dashboard",
    ],
    duration: "2 months",
    link: "https://anjazatk.vercel.app/",
  },
  {
    slug: "e-learning-platform",
    title: "E-Learning Platform",
    category: "Education",
    summary:
      "Comprehensive online learning platform with courses, video lessons, quizzes, progress tracking, and certificates.",
    description:
      "E-Learning Platform is a full-featured online education solution that brings quality learning experiences to students everywhere, offering structured courses, video lessons, interactive quizzes, progress tracking, and achievement certificates.",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    features: [
      "Video course library",
      "Interactive quizzes",
      "Progress tracking",
      "Certificate generation",
    ],
    duration: "4 months",
    link: "https://elearning-user-rmz.vercel.app/",
  },
  {
    slug: "mv-dashboard",
    title: "MV Dashboard",
    category: "Dashboard",
    summary:
      "Feature-rich admin dashboard with data management, user analytics, reporting tools, and system controls.",
    description:
      "MV Dashboard is a comprehensive administrative interface providing powerful tools for data management and business intelligence, featuring intuitive data visualization, user analytics, automated reporting, and system control panels.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Data visualization",
      "User analytics",
      "Automated reports",
      "Role management",
    ],
    duration: "3 months",
    link: "https://mv-dashboard.vercel.app/login",
  },
  {
    slug: "realstates-erp",
    title: "Realstates - ERP",
    category: "ERP System",
    summary:
      "Comprehensive ERP system focused on real estate management, incorporating essential data management, accounting, and employee modules with property sale and rental capabilities.",
    description:
      "Realstates ERP is a specialized enterprise resource planning system tailored for the real estate industry. The platform manages property listings, sales processes, rental agreements, accounting, and employee operations.",
    tags: ["React.js", "TypeScript", "React Query"],
    features: [
      "Property management",
      "Sales and rental tracking",
      "Accounting integration",
      "Employee management",
    ],
    duration: "6 months",
  },
  {
    slug: "erb-system-gold",
    title: "ERB System - Gold Companies",
    category: "ERP System",
    summary:
      "Efficiently manages gold companies with seamless data management, advanced analytics, and streamlined operations using atomic design pattern.",
    description:
      "ERB System is a specialized ERP solution designed for gold trading and jewelry companies. The system handles inventory management, pricing based on gold rates, customer management, and sales tracking, built with atomic design principles.",
    tags: ["React.js", "React Query", "TypeScript", "Formik"],
    features: [
      "Gold inventory management",
      "Real-time pricing",
      "Customer management",
      "Sales tracking",
    ],
    duration: "5 months",
  },
  {
    slug: "master-travel-erp",
    title: "Master Travel System - ERP",
    category: "ERP System",
    summary:
      "Comprehensive ERP system for the tourism industry with booking processes for Hajj, Umrah, local tours, and airline tickets.",
    description:
      "Master Travel System is an all-in-one ERP solution for travel agencies and tourism companies. The platform manages Hajj and Umrah bookings, local tour packages, airline ticketing, hotel reservations, and customer relationships.",
    tags: ["React.js", "TypeScript"],
    features: [
      "Hajj & Umrah booking",
      "Tour package management",
      "Airline ticketing",
      "Customer CRM",
    ],
    duration: "6 months",
  },
  {
    slug: "pilgrims-platform",
    title: "Pilgrims Platform",
    category: "Religious Services",
    summary:
      "Multi-tasking platform built dynamically with customizable colors and features to produce multiple platforms simultaneously.",
    description:
      "Pilgrims Platform is an innovative multi-tenant solution designed for Hajj and Umrah service providers. The platform features dynamic theming, allowing each client to have a customized branded experience, with modular features enabled per client.",
    tags: ["React.js", "TypeScript", "Dynamic Theming"],
    features: [
      "Dynamic theming",
      "Multi-tenant architecture",
      "Pilgrim registration",
      "Document management",
    ],
    duration: "4 months",
  },
  {
    slug: "tarteel-dashboard",
    title: "Tarteel Dashboard",
    category: "Dashboard",
    summary:
      "Control panel for the Tarteel platform managing sessions, teachers, students, and site content with role-based permissions.",
    description:
      "Tarteel Dashboard is the administrative backbone of the Tarteel Quran learning platform. It provides comprehensive tools for managing teachers, students, session scheduling, content management, and platform settings.",
    tags: ["React.js", "TypeScript"],
    features: [
      "Teacher management",
      "Student enrollment",
      "Session scheduling",
      "Role-based access",
    ],
    duration: "3 months",
  },
  {
    slug: "elmarma",
    title: "Elmarma",
    category: "Sports",
    summary:
      "Football news site displaying instant news, match times, player transfers, club details, and statistics.",
    description:
      "Elmarma is a comprehensive football news and statistics platform covering leagues and tournaments worldwide, providing real-time match updates, transfer news, player statistics, club information, and league standings.",
    tags: ["React.js", "API Integration"],
    features: [
      "Live match updates",
      "Transfer news",
      "Player statistics",
      "League standings",
    ],
    duration: "3 months",
  },
  {
    slug: "elite-platform",
    title: "Elite Platform",
    category: "Education",
    summary:
      "Educational platform for UAE teachers providing paid and free courses with direct broadcasting and payment integration.",
    description:
      "Elite Platform is an educational marketplace connecting teachers with students in the UAE. Teachers can create and sell courses, offer free content, and conduct live broadcasts, with payments, enrollment, and content delivery handled end-to-end.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Course marketplace",
      "Live broadcasting",
      "Payment integration",
      "Content analytics",
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
