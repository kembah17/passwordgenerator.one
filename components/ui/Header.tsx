"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/password-generator", label: "Password Generator" },
  { href: "/passphrase-generator", label: "Passphrase Generator" },
  { href: "/password-strength-checker", label: "Strength Checker" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "2px solid var(--color-border)",
        boxShadow: "var(--shadow-sm)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--color-heading)",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#059669" strokeWidth="2" fill="rgba(5, 150, 105, 0.1)" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="12" cy="16.5" r="1.5" fill="#059669" />
          </svg>
          <span>Password<span style={{ color: "var(--color-primary)" }}>Generator</span></span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text)",
                textDecoration: "none",
                transition: "color 0.2s ease, background-color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="mobile-nav">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              color: "var(--color-text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            padding: "0.5rem 1rem 1rem",
          }}
          className="mobile-menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .desktop-nav { display: none; }
        .mobile-nav { display: flex; }
        .mobile-menu { display: block; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
