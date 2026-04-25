import Link from "next/link";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";
import HomeToolGrid from "@/components/ui/HomeToolGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://passwordgenerator.one/" },
};

const homeFaq = [
  {
    question: "Is PasswordGenerator.one really free?",
    answer:
      "Yes, all tools are 100% free with no account required. We sustain the site through non-intrusive advertising.",
  },
  {
    question: "Are my passwords stored or sent to a server?",
    answer:
      "Never. Every tool runs entirely in your browser using the Web Crypto API. No passwords, passphrases, or analyzed text ever leaves your device.",
  },
  {
    question: "What makes these passwords secure?",
    answer:
      "We use the Web Crypto API (<code>crypto.getRandomValues()</code>), which provides cryptographically secure random numbers. This is the same standard used by password managers and security software.",
  },
  {
    question: "Should I use a password or a passphrase?",
    answer:
      "Both can be secure. Passwords are compact and work everywhere. Passphrases are longer but easier to remember. For maximum security, use a passphrase of 5+ words or a password of 16+ characters with mixed character types.",
  },
  {
    question: "Can I use these tools on my phone?",
    answer:
      "Absolutely. All tools are fully responsive and work on any device with a modern browser \u2014 no app download needed.",
  },
];

export default function HomePage() {
  return (
    <>
      <FaqSchema items={homeFaq} />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-hero)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "var(--color-heading)",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Free Secure{" "}
            <span style={{ color: "var(--color-primary)" }}>Password Generator</span>
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Generate strong passwords, memorable passphrases, and check password
            strength &mdash; all 100% in your browser. Nothing ever leaves your
            device.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/password-generator/" className="btn-primary">
              Generate Password
            </Link>
            <Link href="/password-strength-checker/" className="btn-secondary">
              Check Strength
            </Link>
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="container" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "var(--color-heading)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Password Security Tools
        </h2>
        <HomeToolGrid />
      </section>

      <div className="container">
        <AdSlot slot="home-mid" />
      </div>

      {/* Trust Badges */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              icon: "\uD83D\uDD12",
              title: "100% Private",
              desc: "All tools run in your browser using the Web Crypto API. No data is ever sent to any server.",
            },
            {
              icon: "\u26A1",
              title: "Instant Results",
              desc: "Generate passwords and analyze strength in milliseconds. No loading, no waiting.",
            },
            {
              icon: "\uD83C\uDF10",
              title: "Works Everywhere",
              desc: "Fully responsive tools that work on desktop, tablet, and mobile. No app needed.",
            },
          ].map((badge) => (
            <div
              key={badge.title}
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "2px solid var(--color-border)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                {badge.icon}
              </span>
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--color-heading)",
                  marginBottom: "0.5rem",
                }}
              >
                {badge.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section
        className="container"
        style={{ paddingTop: "1rem", paddingBottom: "2rem" }}
      >
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "2px solid var(--color-border)",
            borderRadius: "0.75rem",
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div className="article-content">
            <h2>Why You Need a Strong Password</h2>
            <p>
              Weak passwords are the number one cause of data breaches. Over 80%
              of hacking-related breaches involve stolen or weak credentials.
              Using a unique, randomly generated password for every account is
              the single most effective step you can take to protect your online
              identity.
            </p>
            <h3>How Our Password Generator Works</h3>
            <p>
              PasswordGenerator.one uses the <strong>Web Crypto API</strong>{" "}
              (<code>crypto.getRandomValues()</code>) built into every modern
              browser to produce cryptographically secure random values. This
              means your passwords are generated with true randomness &mdash; not
              pseudo-random algorithms that can be predicted.
            </p>
            <h3>Passwords vs. Passphrases</h3>
            <p>
              A traditional password like <code>X7#mK9$pL2</code> is strong but
              hard to remember. A passphrase like{" "}
              <code>correct-horse-battery-staple</code> can be equally secure
              while being much easier to type and recall. Our tools let you
              generate both styles so you can choose what works best for each
              situation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "var(--color-heading)",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FAQ items={homeFaq} />
        </div>
      </section>

      <div className="container">
        <AdSlot slot="home-bottom" />
      </div>
    </>
  );
}
