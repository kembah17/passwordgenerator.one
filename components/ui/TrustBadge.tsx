"use client";

export default function TrustBadge({ variant = "generated" }: { variant?: "generated" | "never-leaves" | "zero-server" }) {
  const badges = {
    generated: {
      icon: "🔒",
      title: "Generated in Your Browser",
      description: "This tool uses the Web Crypto API built into your browser. No passwords are ever sent to any server.",
    },
    "never-leaves": {
      icon: "🛡️",
      title: "Your Password Never Leaves Your Browser",
      description: "All analysis happens locally using JavaScript. Your password is never transmitted, stored, or logged anywhere.",
    },
    "zero-server": {
      icon: "🚫",
      title: "Zero Server Communication",
      description: "This tool operates entirely offline after loading. No network requests are made during password generation or analysis.",
    },
  };

  const badge = badges[variant];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        padding: "1rem",
        backgroundColor: "var(--color-success-bg)",
        border: "1px solid var(--color-success)",
        borderRadius: "0.75rem",
        marginTop: "0.5rem",
      }}
    >
      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{badge.icon}</span>
      <div>
        <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--color-success)", margin: 0 }}>
          {badge.title}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", margin: "0.25rem 0 0 0", lineHeight: 1.5 }}>
          {badge.description}
        </p>
      </div>
    </div>
  );
}
