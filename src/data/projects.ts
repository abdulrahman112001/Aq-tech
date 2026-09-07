// Sample / placeholder portfolio items — swap these for AQTech's real case
// studies, client names, and screenshots before launch.
export interface Project {
  slug: string
  title: string
  category: "Web" | "Mobile" | "AI" | "Cloud"
  summary: string
  description: string
  tags: string[]
  image: string
  year: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: "nova-commerce",
    title: "Nova Commerce",
    category: "Web",
    summary: "A headless e-commerce platform built for scale and speed.",
    description:
      "Nova Commerce is a headless storefront that handles thousands of concurrent shoppers with sub-second page loads, dynamic pricing, and a fully custom checkout experience.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/projects/nova-commerce.jpg",
    year: "2025",
  },
  {
    slug: "fintrack",
    title: "FinTrack",
    category: "Web",
    summary: "A real-time financial analytics dashboard for SMEs.",
    description:
      "FinTrack gives small businesses a live view of cash flow, forecasting, and expenses with automated bank feed reconciliation.",
    tags: ["React", "Node.js", "D3.js", "PostgreSQL"],
    image: "/projects/fintrack.jpg",
    year: "2024",
  },
  {
    slug: "medconnect",
    title: "MedConnect",
    category: "Mobile",
    summary: "A cross-platform healthcare booking and telehealth app.",
    description:
      "MedConnect connects patients with clinics for appointment booking, reminders, and secure video consultations across iOS and Android.",
    tags: ["React Native", "Firebase", "WebRTC"],
    image: "/projects/medconnect.jpg",
    year: "2024",
  },
  {
    slug: "logichain",
    title: "LogiChain",
    category: "Cloud",
    summary: "A supply-chain visibility platform running on a modern cloud stack.",
    description:
      "LogiChain gives logistics teams real-time shipment tracking and automated alerts, built on a resilient, auto-scaling cloud architecture.",
    tags: ["AWS", "Kubernetes", "Next.js", "GraphQL"],
    image: "/projects/logichain.jpg",
    year: "2023",
  },
  {
    slug: "eduSphere",
    title: "EduSphere",
    category: "AI",
    summary: "An AI-personalized e-learning platform.",
    description:
      "EduSphere adapts lesson paths to each learner using an AI recommendation engine, boosting completion rates across thousands of students.",
    tags: ["Python", "TensorFlow", "Next.js", "PostgreSQL"],
    image: "/projects/edusphere.jpg",
    year: "2023",
  },
  {
    slug: "smarthome-hub",
    title: "SmartHome Hub",
    category: "Mobile",
    summary: "An IoT control app for connected home devices.",
    description:
      "SmartHome Hub lets users manage lighting, security, and climate devices from one app, with automation rules and voice assistant integration.",
    tags: ["React Native", "MQTT", "AWS IoT"],
    image: "/projects/smarthome-hub.jpg",
    year: "2022",
  },
]
