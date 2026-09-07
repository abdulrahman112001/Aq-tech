"use client"

type IconName =
  | "code"
  | "smartphone"
  | "brain"
  | "cloud"
  | "palette"
  | "compass"
  | "mail"
  | "phone"
  | "map-pin"
  | "linkedin"
  | "twitter"
  | "github"
  | "instagram"
  | "arrow-right"
  | "arrow-left"
  | "check"

const paths: Record<IconName, React.ReactNode> = {
  code: (
    <path d="M8 4L2 12l6 8M16 4l6 8-6 8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  smartphone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </>
  ),
  brain: (
    <path
      d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 2.8 3 3 0 00 1.5 5.5A3.5 3.5 0 009 20a3 3 0 003-3V7a3 3 0 00-3-3zm6 0a3 3 0 013 3v1a3 3 0 012 2.8 3 3 0 01-1.5 5.5A3.5 3.5 0 0115 20a3 3 0 01-3-3V7a3 3 0 013-3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cloud: (
    <path
      d="M7 18a4 4 0 01-.6-7.96A5.5 5.5 0 0117.5 9 4.5 4.5 0 0117 18H7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  palette: (
    <path
      d="M12 3a9 9 0 100 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0021 10.5C21 6.4 16.9 3 12 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path
      d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 13v4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  twitter: (
    <path
      d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 3.6A11.4 11.4 0 013 4.9a4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 003.2 3.9c-.6.1-1.2.2-1.8.1a4 4 0 003.7 2.8A8 8 0 012 18.6a11.4 11.4 0 006.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2.3-2.1z"
      strokeLinejoin="round"
    />
  ),
  github: (
    <path
      d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 011-2.7c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1a10 10 0 015.2 0c2-1.3 2.9-1 2.9-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 011 2.7c0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.9v2.7c0 .3.2.6.7.5A10 10 0 0012 2z"
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" strokeLinecap="round" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  "arrow-left": <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />,
  check: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />,
}

export default function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
