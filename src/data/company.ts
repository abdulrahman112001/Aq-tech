import { projects } from "./projects"

// NOTE: Replace these placeholder values (email, phone, socials, and the
// non-project stats below) with AQTech's real details before launch. The
// "Projects Delivered" stat is computed from src/data/projects.ts, so it
// stays accurate as you add more work.
export const companyData = {
  name: "AQTech",
  legalName: "AQTech Technologies",
  tagline: "Engineering Technology That Moves Business Forward",
  shortDescription:
    "AQTech is a technology partner that designs, builds, and scales web, mobile, and AI-powered products for ambitious businesses.",
  email: "info@aqtech.com",
  phone: "+20 100 000 0000",
  location: "Cairo, Egypt",
  locationNote: "Remote-first — working with clients worldwide",
  linkedin: "https://www.linkedin.com/company/aqtech",
  twitter: "https://twitter.com/aqtech",
  github: "https://github.com/aqtech",
  instagram: "https://www.instagram.com/aqtech",
  founded: "2020",

  stats: [
    { value: `${projects.length}+`, label: "Projects Delivered" },
    { value: "40+", label: "Happy Clients" },
    { value: "12+", label: "Countries Served" },
    { value: "6+", label: "Years of Experience" },
  ],

  values: [
    {
      title: "Innovation First",
      description:
        "We stay ahead of the technology curve, applying modern tools and architectures to solve real business problems.",
    },
    {
      title: "Engineering Excellence",
      description:
        "Clean, scalable, well-tested code is non-negotiable. We build systems that last and grow with your business.",
    },
    {
      title: "True Partnership",
      description:
        "We work as an extension of your team — transparent communication, shared goals, and long-term relationships.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "We dive into your business goals, users, and constraints to define a clear, actionable roadmap.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our team crafts intuitive, research-driven experiences and system architecture before a line of code is written.",
    },
    {
      step: "03",
      title: "Develop",
      description:
        "We build in focused, iterative sprints — with regular demos, so you always see real progress.",
    },
    {
      step: "04",
      title: "Deliver & Support",
      description:
        "We launch with confidence and stay on as your technology partner for growth, maintenance, and scaling.",
    },
  ],
}
