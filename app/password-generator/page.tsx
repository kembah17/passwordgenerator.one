import type { Metadata } from "next";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import AdSlot from "@/components/ui/AdSlot";
import TrustBadge from "@/components/ui/TrustBadge";
import RelatedTools from "@/components/ui/RelatedTools";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Password Generator - Create Strong Random Passwords Instantly",
  description:
    "Generate cryptographically secure random passwords with customizable length, character types, and strength analysis. 100% client-side using Web Crypto API.",
  alternates: { canonical: "https://passwordgenerator.one/password-generator/" },
};

const faqItems = [
  {
    question: "How does this password generator work?",
    answer:
      "Our generator uses the Web Crypto API (crypto.getRandomValues()) built into your browser to produce cryptographically secure random values. Each character is selected with true randomness, making the passwords unpredictable and secure.",
  },
  {
    question: "Is my generated password stored anywhere?",
    answer:
      "No. The password is generated entirely in your browser and never sent to any server. Once you close or refresh the page, the password exists only if you copied it.",
  },
  {
    question: "How long should my password be?",
    answer:
      "We recommend at least 16 characters for important accounts. For maximum security, use 20+ characters with a mix of uppercase, lowercase, numbers, and symbols. Our strength meter shows you exactly how secure your password is.",
  },
  {
    question: "What does 'Exclude Ambiguous Characters' mean?",
    answer:
      "Ambiguous characters are ones that look similar in many fonts: 0 (zero) and O (letter O), l (lowercase L) and 1 (one), I (uppercase i). Excluding them makes passwords easier to read and type manually.",
  },
  {
    question: "Can I use this for generating API keys or tokens?",
    answer:
      "Yes! Set a longer length (32-64 characters) and enable all character types for maximum entropy. The cryptographic randomness makes it suitable for security tokens.",
  },
];

export default function PasswordGeneratorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-hero)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="container"
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--color-heading)",
              marginBottom: "0.75rem",
            }}
          >
            Password Generator
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Generate strong, random passwords with customizable length and
            character types. Powered by the Web Crypto API for true
            cryptographic randomness.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <PasswordGenerator />
        </div>
      </section>

      {/* Trust Badge */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <TrustBadge variant="generated" />
        </div>
      </section>

      <div className="container">
        <AdSlot slot="password-gen-mid" />
      </div>

      {/* SEO Content */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>Why Use a Random Password Generator?</h2>
            <p>
              Humans are terrible at creating random passwords. We tend to use
              patterns, dictionary words, and personal information that attackers
              can guess. A cryptographic password generator eliminates human bias
              entirely, producing passwords with maximum entropy per character.
            </p>
            <h3>Understanding Password Entropy</h3>
            <p>
              Entropy measures the unpredictability of a password in bits. A
              password with 80 bits of entropy would take billions of years to
              crack with current technology. Our generator shows you the exact
              entropy of each password so you can make informed security
              decisions.
            </p>
            <h3>Best Practices for Password Security</h3>
            <ul>
              <li>Use a unique password for every account</li>
              <li>Aim for at least 16 characters with mixed character types</li>
              <li>Store passwords in a reputable password manager</li>
              <li>Enable two-factor authentication wherever possible</li>
              <li>Never share passwords via email or messaging apps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--color-heading)",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="container" style={{ paddingBottom: "2rem" }}>
        <RelatedTools currentPath="/password-generator" />
      </section>

      <div className="container">
        <AdSlot slot="password-gen-bottom" />
      </div>
    </>
  );
}
