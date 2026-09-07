export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    id: "web",
    icon: "code",
    title: "Web Development",
    description:
      "Custom, high-performance web applications built with modern frameworks like React and Next.js.",
    features: ["Custom Web Apps", "E-Commerce", "Progressive Web Apps", "API Integration"],
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that feel fast, polished, and reliable.",
    features: ["iOS & Android", "React Native", "App Store Deployment", "Offline-First Apps"],
  },
  {
    id: "ai",
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Intelligent automation, chatbots, and predictive analytics that turn your data into a competitive edge.",
    features: ["AI Chatbots", "Predictive Analytics", "Process Automation", "LLM Integrations"],
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Scalable cloud architecture, CI/CD pipelines, and infrastructure that keeps your product fast and secure.",
    features: ["Cloud Architecture", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Security"],
  },
  {
    id: "design",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Research-driven product design that turns complex workflows into simple, delightful experiences.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
  },
  {
    id: "consulting",
    icon: "compass",
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help you modernize systems, cut costs, and plan for scale.",
    features: ["Tech Strategy", "System Audits", "Digital Transformation", "Team Augmentation"],
  },
]
