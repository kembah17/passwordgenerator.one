import type { Metadata } from "next";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "Privacy Policy - PasswordGenerator.one",
  description:
    "Our privacy policy explains how PasswordGenerator.one protects your data. All tools run client-side - we never collect, store, or transmit your passwords.",
  alternates: { canonical: "https://passwordgenerator.one/privacy/" },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Last updated: April 2025
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>Summary</h2>
            <p>
              <strong>Your passwords never leave your device.</strong> All
              password generation, passphrase creation, and strength analysis
              happens entirely in your browser using client-side JavaScript and
              the Web Crypto API. We do not collect, store, transmit, or log
              any passwords or security-related data.
            </p>

            <h2>What We Do Not Collect</h2>
            <ul>
              <li>Passwords you generate or check</li>
              <li>Passphrases you create</li>
              <li>Any text you enter into our tools</li>
              <li>Your tool settings or preferences (stored locally in your browser)</li>
            </ul>

            <h2>What We May Collect</h2>
            <p>
              Like most websites, we may collect basic, non-identifying
              analytics data to understand how our site is used:
            </p>
            <ul>
              <li>Pages visited and general usage patterns</li>
              <li>Browser type and device category (desktop/mobile)</li>
              <li>Country-level geographic data</li>
              <li>Referral source (how you found us)</li>
            </ul>
            <p>
              This data is aggregated and anonymized. We do not track individual
              users or create personal profiles.
            </p>

            <h2>Advertising</h2>
            <p>
              We display advertisements to support the free operation of this
              site. Our advertising partners may use cookies to serve relevant
              ads. You can opt out of personalized advertising through your
              browser settings or through industry opt-out tools like the{" "}
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-primary)" }}
              >
                Digital Advertising Alliance opt-out page
              </a>.
            </p>

            <h2>Cookies</h2>
            <p>We use minimal cookies:</p>
            <ul>
              <li><strong>Theme preference</strong> — Stores your light/dark mode choice (localStorage)</li>
              <li><strong>Analytics cookies</strong> — Anonymous usage statistics</li>
              <li><strong>Advertising cookies</strong> — Used by our ad partners</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              We may use the following third-party services:
            </p>
            <ul>
              <li>Google Analytics (anonymized usage data)</li>
              <li>Google AdSense or similar advertising networks</li>
              <li>Cloudflare or Vercel (hosting and CDN)</li>
            </ul>
            <p>
              Each of these services has their own privacy policy governing
              their data practices.
            </p>

            <h2>Data Security</h2>
            <p>
              Our site is served over HTTPS, ensuring all communication between
              your browser and our servers is encrypted. Since we do not collect
              password data, there is no password data to breach.
            </p>

            <h2>Children</h2>
            <p>
              Our tools are suitable for users of all ages. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated revision date.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <strong>privacy@passwordgenerator.one</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <AdSlot slot="privacy-bottom" />
      </div>
    </>
  );
}
