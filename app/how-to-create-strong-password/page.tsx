import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/ui/AdSlot";
import RelatedTools from "@/components/ui/RelatedTools";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "How to Create a Strong Password in 2025 - Complete Guide",
  description:
    "Learn how to create strong, secure passwords that protect your accounts. Covers password length, character types, entropy, common mistakes, and best practices.",
  alternates: { canonical: "https://passwordgenerator.one/how-to-create-strong-password/" },
};

const faqItems = [
  {
    question: "What is the minimum length for a strong password?",
    answer:
      "At minimum, use 12 characters. For high-security accounts (email, banking, cloud storage), use 16 or more characters. Each additional character exponentially increases the number of possible combinations.",
  },
  {
    question: "Should I use special characters in my password?",
    answer:
      "Yes. Including special characters (!@#$%^&*) increases the character set from ~62 to ~95 characters, significantly boosting entropy. However, length matters more than complexity \u2014 a 20-character lowercase password is stronger than an 8-character password with all character types.",
  },
  {
    question: "How often should I change my passwords?",
    answer:
      "Current security guidance (NIST SP 800-63B) recommends against routine password changes unless you suspect a breach. Frequent changes lead to weaker passwords as people make minor, predictable modifications. Instead, use strong unique passwords and enable 2FA.",
  },
  {
    question: "Is it safe to write down passwords?",
    answer:
      "A written password stored securely (locked drawer, wallet) is safer than a weak password you can memorize. However, a password manager is the best solution \u2014 it generates, stores, and auto-fills strong unique passwords for every account.",
  },
  {
    question: "Can a strong password be hacked?",
    answer:
      "A truly random password with 80+ bits of entropy is practically impossible to crack through brute force with current technology. However, passwords can be compromised through phishing, data breaches, malware, or social engineering \u2014 which is why 2FA is essential.",
  },
];

export default function HowToCreateStrongPasswordPage() {
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
            How to Create a Strong Password in 2025
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            A complete guide to creating passwords that actually protect your
            accounts, based on current security research and best practices.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>Why Password Strength Matters</h2>
            <p>
              Over 80% of data breaches involve weak or stolen credentials.
              Your password is often the only barrier between an attacker and
              your personal data, financial accounts, and digital identity.
              Understanding what makes a password strong is the first step to
              protecting yourself online.
            </p>

            <h2>The Science of Password Strength</h2>
            <h3>Understanding Entropy</h3>
            <p>
              Password strength is measured in <strong>bits of entropy</strong>,
              which represents the mathematical unpredictability of your
              password. The formula is simple:
            </p>
            <p>
              <code>Entropy = Length x log2(Character Set Size)</code>
            </p>
            <p>
              A password using lowercase letters only (26 characters) gets about
              4.7 bits per character. Add uppercase (52 total) and you get 5.7
              bits. Add numbers and symbols (95 total) and each character
              contributes 6.6 bits. But notice: <strong>length has a
              linear effect</strong> while character set has a logarithmic
              effect. This means adding characters is more impactful than adding
              complexity.
            </p>

            <h3>How Long to Crack?</h3>
            <p>
              Assuming an attacker can try 10 billion passwords per second
              (realistic for GPU-based attacks):
            </p>
            <ul>
              <li><strong>8 characters, lowercase only:</strong> ~5 seconds</li>
              <li><strong>8 characters, all types:</strong> ~19 hours</li>
              <li><strong>12 characters, all types:</strong> ~3,000 years</li>
              <li><strong>16 characters, all types:</strong> ~billions of years</li>
            </ul>
            <p>
              You can test your own passwords with our{" "}
              <Link href="/password-strength-checker/" style={{ color: "var(--color-primary)" }}>
                Password Strength Checker
              </Link>.
            </p>

            <AdSlot slot="article-mid-1" />

            <h2>Step-by-Step: Creating a Strong Password</h2>

            <h3>Step 1: Choose Your Method</h3>
            <p>You have two excellent options:</p>
            <ul>
              <li>
                <strong>Random password:</strong> Use our{" "}
                <Link href="/password-generator/" style={{ color: "var(--color-primary)" }}>
                  Password Generator
                </Link>{" "}
                to create a string of random characters (e.g.,{" "}
                <code>X7#mK9$pL2vN4@qR</code>)
              </li>
              <li>
                <strong>Passphrase:</strong> Use our{" "}
                <Link href="/passphrase-generator/" style={{ color: "var(--color-primary)" }}>
                  Passphrase Generator
                </Link>{" "}
                to create a memorable word combination (e.g.,{" "}
                <code>Marble-Sunset-Bicycle-Ocean-42</code>)
              </li>
            </ul>

            <h3>Step 2: Set the Right Length</h3>
            <ul>
              <li><strong>Minimum:</strong> 12 characters for general accounts</li>
              <li><strong>Recommended:</strong> 16+ characters for important accounts</li>
              <li><strong>Maximum security:</strong> 20+ characters or 5+ word passphrases</li>
            </ul>

            <h3>Step 3: Use All Character Types</h3>
            <p>
              Enable uppercase letters, lowercase letters, numbers, and special
              characters. Each type you add increases the character set and
              makes brute-force attacks exponentially harder.
            </p>

            <h3>Step 4: Verify the Strength</h3>
            <p>
              Always check your password with a{" "}
              <Link href="/password-strength-checker/" style={{ color: "var(--color-primary)" }}>
                strength checker
              </Link>{" "}
              before using it. Look for 80+ bits of entropy and a crack time
              measured in centuries or more.
            </p>

            <h3>Step 5: Store It Safely</h3>
            <p>
              Use a password manager like Bitwarden, 1Password, or KeePass to
              store your passwords. You only need to remember one master
              password (make it a strong passphrase!).
            </p>

            <AdSlot slot="article-mid-2" />

            <h2>Common Password Mistakes to Avoid</h2>
            <ul>
              <li><strong>Using personal information:</strong> Names, birthdays, pet names, and addresses are easily guessable</li>
              <li><strong>Keyboard patterns:</strong> &quot;qwerty&quot;, &quot;123456&quot;, &quot;asdfgh&quot; are among the first patterns attackers try</li>
              <li><strong>Simple substitutions:</strong> &quot;p@$$w0rd&quot; is not secure \u2014 attackers know about leet speak</li>
              <li><strong>Reusing passwords:</strong> If one account is breached, all accounts with the same password are compromised</li>
              <li><strong>Short passwords:</strong> No amount of complexity compensates for insufficient length</li>
              <li><strong>Dictionary words:</strong> Even uncommon words are in attacker dictionaries</li>
            </ul>

            <h2>The Role of Two-Factor Authentication</h2>
            <p>
              Even the strongest password can be compromised through phishing or
              data breaches. Two-factor authentication (2FA) adds a second
              layer of protection. Read our{" "}
              <Link href="/two-factor-authentication-guide/" style={{ color: "var(--color-primary)" }}>
                complete 2FA guide
              </Link>{" "}
              to learn how to set it up on all your accounts.
            </p>

            <h2>Summary: The Strong Password Checklist</h2>
            <ul>
              <li>At least 16 characters (or 5+ random words)</li>
              <li>Mix of uppercase, lowercase, numbers, and symbols</li>
              <li>Generated randomly (not chosen by a human)</li>
              <li>Unique for every account</li>
              <li>Stored in a password manager</li>
              <li>Protected by two-factor authentication</li>
              <li>80+ bits of entropy verified by a strength checker</li>
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="container" style={{ paddingBottom: "2rem" }}>
        <RelatedTools currentPath="/how-to-create-strong-password" />
      </section>

      <div className="container">
        <AdSlot slot="article-bottom" />
      </div>
    </>
  );
}
