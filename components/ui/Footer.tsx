"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", marginBottom: "0.75rem" }}>
            PasswordGenerator.one
          </h3>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            Free, secure password tools that run entirely in your browser. No data is ever sent to any server.
          </p>
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", marginBottom: "0.75rem" }}>
            Tools
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/password-generator" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Password Generator</Link>
            <Link href="/passphrase-generator" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Passphrase Generator</Link>
            <Link href="/password-strength-checker" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Password Strength Checker</Link>
          </div>
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", marginBottom: "0.75rem" }}>
            Company
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/about" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textDecoration: "none" }}>About</Link>
            <Link href="/privacy" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem 1rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} PasswordGenerator.one. All rights reserved.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
          🔒 100% client-side &bull; No data collection
        </p>
      </div>
    </footer>
  );
}
