export interface ToolData {
  name: string;
  slug: string;
  href: string;
  icon: string;
  description: string;
  shortDescription: string;
}

export const TOOLS: ToolData[] = [
  {
    name: "Password Generator",
    slug: "password-generator",
    href: "/password-generator/",
    icon: "🔑",
    description:
      "Generate cryptographically secure random passwords with customizable length, character types, and complexity. Powered by the Web Crypto API.",
    shortDescription: "Generate secure random passwords instantly",
  },
  {
    name: "Passphrase Generator",
    slug: "passphrase-generator",
    href: "/passphrase-generator/",
    icon: "📝",
    description:
      "Create strong, memorable passphrases from a curated wordlist. Choose word count, separators, and optional numbers or symbols.",
    shortDescription: "Create memorable secure passphrases",
  },
  {
    name: "Password Strength Checker",
    slug: "password-strength-checker",
    href: "/password-strength-checker/",
    icon: "🛡️",
    description:
      "Analyze any password in real time. Get entropy calculations, crack time estimates, pattern detection, and actionable improvement suggestions.",
    shortDescription: "Check how strong your password really is",
  },
];

export function getToolBySlug(slug: string): ToolData | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
