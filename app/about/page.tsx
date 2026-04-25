import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "About PasswordGenerator.one - Privacy-First Password Tools",
  description:
    "Learn about PasswordGenerator.one, our privacy-first approach to password security, and why all our tools run 100% in your browser.",
  alternates: { canonical: "https://passwordgenerator.one/about/" },
};

export default function AboutPage() {
  return (
    <>
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
            About PasswordGenerator.one
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Free, privacy-first password security tools that run entirely in
            your browser.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>Our Mission</h2>
            <p>
              PasswordGenerator.one exists to make strong password security
              accessible to everyone. We believe that generating and managing
              secure passwords should be free, private, and effortless.
            </p>

            <h2>Privacy First, Always</h2>
            <p>
              Every tool on this site runs <strong>100% in your browser</strong>.
              We use the Web Crypto API built into modern browsers to generate
              cryptographically secure random values. Your passwords, passphrases,
              and analyzed text <strong>never leave your device</strong>.
            </p>
            <p>
              We do not collect, store, transmit, or log any passwords or
              security-related data. Period. You can verify this by using our
              tools with your internet connection disabled — they work
              perfectly offline after the page loads.
            </p>

            <h2>Our Tools</h2>
            <ul>
              <li>
                <Link href="/password-generator/" style={{ color: "var(--color-primary)" }}>
                  <strong>Password Generator</strong>
                </Link>{" "}
                — Create strong random passwords with customizable length and
                character types
              </li>
              <li>
                <Link href="/passphrase-generator/" style={{ color: "var(--color-primary)" }}>
                  <strong>Passphrase Generator</strong>
                </Link>{" "}
                — Generate memorable multi-word passphrases that are easy to
                remember and hard to crack
              </li>
              <li>
                <Link href="/password-strength-checker/" style={{ color: "var(--color-primary)" }}>
                  <strong>Password Strength Checker</strong>
                </Link>{" "}
                — Analyze any password with entropy calculation, crack time
                estimates, and improvement suggestions
              </li>
            </ul>

            <h2>Technology</h2>
            <p>
              Our tools are built with modern web technologies:
            </p>
            <ul>
              <li><strong>Web Crypto API</strong> — Browser-native cryptographic random number generation</li>
              <li><strong>Next.js</strong> — React framework for fast, SEO-optimized pages</li>
              <li><strong>Client-side processing</strong> — All computation happens in your browser</li>
              <li><strong>No tracking scripts</strong> — We respect your privacy beyond just passwords</li>
            </ul>

            <h2>Open and Transparent</h2>
            <p>
              We are committed to transparency. Our strength analysis algorithms,
              entropy calculations, and password generation methods are all
              based on well-established cryptographic principles. We use
              industry-standard approaches recommended by security researchers
              and organizations like NIST.
            </p>

            <h2>Contact</h2>
            <p>
              Have questions, suggestions, or feedback? We would love to hear
              from you. Reach out at{" "}
              <strong>hello@passwordgenerator.one</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <AdSlot slot="about-bottom" />
      </div>
    </>
  );
}
