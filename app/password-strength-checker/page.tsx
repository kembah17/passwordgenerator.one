import type { Metadata } from "next";
import PasswordStrengthChecker from "@/components/tools/PasswordStrengthChecker";
import AdSlot from "@/components/ui/AdSlot";
import TrustBadge from "@/components/ui/TrustBadge";
import RelatedTools from "@/components/ui/RelatedTools";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Password Strength Checker - Test How Secure Your Password Is",
  description:
    "Check your password strength with real-time entropy analysis, crack time estimates, and actionable security suggestions. 100% client-side - your password never leaves your browser.",
  alternates: { canonical: "https://passwordgenerator.one/password-strength-checker/" },
};

const faqItems = [
  {
    question: "Is it safe to type my real password here?",
    answer:
      "Yes. This tool runs entirely in your browser using JavaScript. Your password is never sent to any server, stored in any database, or logged anywhere. You can verify this by disconnecting from the internet and using the tool offline.",
  },
  {
    question: "What is password entropy?",
    answer:
      "Entropy measures the randomness (unpredictability) of a password in bits. Higher entropy means more possible combinations an attacker must try. A password with 80+ bits of entropy is considered strong against modern brute-force attacks.",
  },
  {
    question: "How is crack time estimated?",
    answer:
      "We assume an attacker can make 10 billion guesses per second (a realistic estimate for a well-funded attacker using GPU clusters). The crack time is calculated as 2^entropy / guesses_per_second. This represents the average time for a brute-force attack.",
  },
  {
    question: "Why does my password score lower than expected?",
    answer:
      "Our checker applies penalties for common patterns that reduce real-world security: dictionary words, keyboard patterns (qwerty, 123456), repeated characters, and known common passwords. Even a long password can be weak if it contains predictable patterns.",
  },
  {
    question: "What score should I aim for?",
    answer:
      "Aim for a score of 80+ (Strong or Very Strong) for important accounts like email, banking, and cloud storage. For less critical accounts, a score of 60+ (Good) is acceptable. Never use a password that scores below 40.",
  },
];

export default function PasswordStrengthCheckerPage() {
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
            Password Strength Checker
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Test how secure your password really is. Get real-time entropy
            analysis, crack time estimates, and actionable suggestions to
            improve your security.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <PasswordStrengthChecker />
        </div>
      </section>

      {/* Trust Badge */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <TrustBadge variant="never-leaves" />
        </div>
      </section>

      <div className="container">
        <AdSlot slot="strength-mid" />
      </div>

      {/* SEO Content */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>How Password Strength Is Measured</h2>
            <p>
              Password strength is fundamentally about <strong>entropy</strong>{" "}
              \u2014 the mathematical measure of unpredictability. A password
              with high entropy has so many possible combinations that even the
              fastest computers would need impractical amounts of time to guess
              it through brute force.
            </p>
            <h3>What Makes a Password Weak?</h3>
            <p>
              Our checker goes beyond simple character counting. It detects:
            </p>
            <ul>
              <li><strong>Common passwords</strong> \u2014 checked against a database of frequently breached passwords</li>
              <li><strong>Keyboard patterns</strong> \u2014 sequences like &quot;qwerty&quot; or &quot;123456&quot;</li>
              <li><strong>Repeated characters</strong> \u2014 patterns like &quot;aaa&quot; or &quot;abcabc&quot;</li>
              <li><strong>Dictionary words</strong> \u2014 including leet-speak substitutions (p@$$w0rd)</li>
            </ul>
            <h3>Improving Your Password</h3>
            <p>
              The most effective ways to strengthen a password are: increase
              length (each character multiplies the combinations), use all four
              character types (uppercase, lowercase, numbers, symbols), and
              avoid any predictable patterns. Or simply use our{" "}
              <a href="/password-generator/" style={{ color: "var(--color-primary)" }}>Password Generator</a>{" "}
              or{" "}
              <a href="/passphrase-generator/" style={{ color: "var(--color-primary)" }}>Passphrase Generator</a>{" "}
              to create a strong password automatically.
            </p>
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
        <RelatedTools currentPath="/password-strength-checker" />
      </section>

      <div className="container">
        <AdSlot slot="strength-bottom" />
      </div>
    </>
  );
}
