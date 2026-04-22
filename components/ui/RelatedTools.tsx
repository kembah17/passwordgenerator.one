"use client";

import Link from "next/link";

interface Tool {
  name: string;
  href: string;
  description: string;
  icon: string;
}

const ALL_TOOLS: Tool[] = [
  { name: "Password Generator", href: "/password-generator", description: "Generate secure random passwords", icon: "🔑" },
  { name: "Passphrase Generator", href: "/passphrase-generator", description: "Create memorable secure passphrases", icon: "📝" },
  { name: "Password Strength Checker", href: "/password-strength-checker", description: "Analyze your password security", icon: "🛡️" },
];

export default function RelatedTools({ currentPath }: { currentPath: string }) {
  const related = ALL_TOOLS.filter((t) => t.href !== currentPath);

  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "1rem" }}>
        Related Tools
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        {related.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "1.25rem",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "0.75rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span style={{ fontSize: "1.75rem" }}>{tool.icon}</span>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text)", margin: 0 }}>
                {tool.name}
              </h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: "0.25rem 0 0 0" }}>
                {tool.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
