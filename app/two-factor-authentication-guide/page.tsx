import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/ui/AdSlot";
import RelatedTools from "@/components/ui/RelatedTools";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Two-Factor Authentication (2FA) Guide - Setup Instructions for Every Platform",
  description:
    "Complete guide to two-factor authentication: what it is, why you need it, and step-by-step setup instructions for Google, Apple, Microsoft, social media, and banking accounts.",
  alternates: { canonical: "https://passwordgenerator.one/two-factor-authentication-guide/" },
};

const faqItems = [
  {
    question: "What is two-factor authentication (2FA)?",
    answer:
      "Two-factor authentication adds a second verification step beyond your password. After entering your password, you must provide a second factor — typically a code from an authenticator app, a text message, or a physical security key. This means even if someone steals your password, they cannot access your account without the second factor.",
  },
  {
    question: "Which 2FA method is most secure?",
    answer:
      "From most to least secure: Hardware security keys (YubiKey) > Authenticator apps (Google Authenticator, Authy) > SMS codes > Email codes. We recommend authenticator apps as the best balance of security and convenience for most people.",
  },
  {
    question: "What if I lose my phone with my authenticator app?",
    answer:
      "Always save your backup/recovery codes when setting up 2FA. Store them in your password manager or a secure physical location. Some authenticator apps (Authy, Microsoft Authenticator) offer cloud backup. You can also set up 2FA on multiple devices.",
  },
  {
    question: "Is SMS-based 2FA still worth using?",
    answer:
      "Yes, SMS 2FA is significantly better than no 2FA at all. While it is vulnerable to SIM-swapping attacks, it still blocks the vast majority of automated attacks. Use it if an authenticator app is not available, but prefer app-based 2FA when possible.",
  },
  {
    question: "Which accounts should I enable 2FA on first?",
    answer:
      "Prioritize in this order: (1) Email accounts — they are the keys to all other accounts via password reset, (2) Financial accounts — banking, investment, crypto, (3) Password manager, (4) Cloud storage, (5) Social media, (6) Everything else that supports it.",
  },
];

export default function TwoFactorAuthGuidePage() {
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
            Two-Factor Authentication (2FA) Guide
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            A strong password is your first line of defense. Two-factor
            authentication is your second. Learn how to set up 2FA on all
            your important accounts.
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
            <h2>Why Two-Factor Authentication Matters</h2>
            <p>
              Even the strongest password can be compromised. Data breaches
              expose billions of credentials every year. Phishing attacks trick
              people into revealing passwords. Malware can capture keystrokes.
              Two-factor authentication ensures that a stolen password alone is
              not enough to access your account.
            </p>
            <p>
              According to Google, adding 2FA blocks 99.9% of automated
              attacks. Microsoft reports similar numbers. It is the single most
              impactful security measure you can take after using strong,
              unique passwords.
            </p>

            <h2>Types of Two-Factor Authentication</h2>

            <h3>Authenticator Apps (Recommended)</h3>
            <p>
              Apps like Google Authenticator, Authy, and Microsoft
              Authenticator generate time-based one-time passwords (TOTP) that
              change every 30 seconds. They work offline and are not vulnerable
              to SIM-swapping attacks.
            </p>
            <p><strong>Best authenticator apps:</strong></p>
            <ul>
              <li><strong>Authy</strong> — Cloud backup, multi-device sync, encrypted recovery</li>
              <li><strong>Google Authenticator</strong> — Simple, reliable, now supports cloud sync</li>
              <li><strong>Microsoft Authenticator</strong> — Cloud backup, passwordless sign-in for Microsoft accounts</li>
              <li><strong>Bitwarden Authenticator</strong> — Built into Bitwarden password manager (Premium)</li>
            </ul>

            <h3>Hardware Security Keys</h3>
            <p>
              Physical devices like YubiKey and Google Titan that plug into
              your USB port or connect via NFC. They are the most secure 2FA
              method and are phishing-resistant — they verify the website
              domain before responding.
            </p>

            <h3>SMS Codes</h3>
            <p>
              A code sent to your phone via text message. While better than no
              2FA, SMS is vulnerable to SIM-swapping attacks where an attacker
              convinces your carrier to transfer your number. Use authenticator
              apps instead when possible.
            </p>

            <h3>Email Codes</h3>
            <p>
              A code sent to your email address. This is the weakest form of
              2FA since it depends on the security of your email account. Only
              use this if no other option is available.
            </p>

            <AdSlot slot="2fa-article-mid-1" />

            <h2>How to Set Up 2FA: Step by Step</h2>

            <h3>Step 1: Install an Authenticator App</h3>
            <p>
              Download Authy or Google Authenticator from your app store. We
              recommend Authy for its cloud backup feature — if you lose
              your phone, you can restore your 2FA codes on a new device.
            </p>

            <h3>Step 2: Enable 2FA on Your Email First</h3>
            <p>
              Your email account is the most critical because it can be used to
              reset passwords on all other accounts. Here is how to enable 2FA
              on major email providers:
            </p>
            <p><strong>Gmail / Google:</strong></p>
            <ol>
              <li>Go to myaccount.google.com &gt; Security</li>
              <li>Click &quot;2-Step Verification&quot; &gt; Get Started</li>
              <li>Choose &quot;Authenticator app&quot; and scan the QR code</li>
              <li>Enter the 6-digit code to verify</li>
              <li>Save your backup codes in your password manager</li>
            </ol>
            <p><strong>Outlook / Microsoft:</strong></p>
            <ol>
              <li>Go to account.microsoft.com &gt; Security &gt; Advanced security options</li>
              <li>Click &quot;Add a new way to sign in&quot; &gt; &quot;Use an app&quot;</li>
              <li>Scan the QR code with your authenticator app</li>
              <li>Verify with the generated code</li>
            </ol>
            <p><strong>Apple ID:</strong></p>
            <ol>
              <li>On iPhone: Settings &gt; [Your Name] &gt; Sign-In &amp; Security &gt; Two-Factor Authentication</li>
              <li>On Mac: System Settings &gt; Apple ID &gt; Sign-In &amp; Security</li>
              <li>Follow the prompts to add a trusted phone number</li>
            </ol>

            <h3>Step 3: Secure Your Financial Accounts</h3>
            <p>
              Enable 2FA on all banking, investment, and payment accounts.
              Most banks support authenticator apps or SMS. Always choose the
              authenticator app option when available.
            </p>

            <h3>Step 4: Protect Social Media</h3>
            <p>
              Social media accounts are frequent targets for hijacking. Enable
              2FA on all platforms:
            </p>
            <ul>
              <li><strong>Facebook:</strong> Settings &gt; Security and Login &gt; Two-Factor Authentication</li>
              <li><strong>Instagram:</strong> Settings &gt; Security &gt; Two-Factor Authentication</li>
              <li><strong>Twitter/X:</strong> Settings &gt; Security &gt; Two-Factor Authentication</li>
              <li><strong>LinkedIn:</strong> Settings &gt; Sign in &amp; Security &gt; Two-step verification</li>
            </ul>

            <AdSlot slot="2fa-article-mid-2" />

            <h3>Step 5: Save Your Backup Codes</h3>
            <p>
              Every service that offers 2FA provides backup/recovery codes.
              These are one-time-use codes that let you access your account if
              you lose your authenticator device. <strong>Save these
              immediately</strong> in your password manager or a secure
              physical location.
            </p>

            <h2>2FA Best Practices</h2>
            <ul>
              <li>Use an authenticator app instead of SMS whenever possible</li>
              <li>Save backup codes for every account in your password manager</li>
              <li>Consider a hardware security key for your most critical accounts</li>
              <li>Set up 2FA on your password manager itself</li>
              <li>Use Authy or another app with cloud backup to prevent lockouts</li>
              <li>Never share 2FA codes with anyone — legitimate services will never ask for them</li>
              <li>Review your 2FA settings periodically and remove old devices</li>
            </ul>

            <h2>The Complete Security Stack</h2>
            <p>
              For maximum protection, combine these three layers:
            </p>
            <ol>
              <li>
                <strong>Strong, unique passwords</strong> — Use our{" "}
                <Link href="/password-generator/" style={{ color: "var(--color-primary)" }}>
                  Password Generator
                </Link>{" "}
                or{" "}
                <Link href="/passphrase-generator/" style={{ color: "var(--color-primary)" }}>
                  Passphrase Generator
                </Link>
              </li>
              <li>
                <strong>A password manager</strong> — Read our{" "}
                <Link href="/password-manager-guide/" style={{ color: "var(--color-primary)" }}>
                  Password Manager Guide
                </Link>
              </li>
              <li>
                <strong>Two-factor authentication</strong> — On every account that supports it
              </li>
            </ol>
            <p>
              Together, these three measures make your accounts virtually
              impenetrable to all but the most sophisticated, targeted attacks.
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="container" style={{ paddingBottom: "2rem" }}>
        <RelatedTools currentPath="/two-factor-authentication-guide" />
      </section>

      <div className="container">
        <AdSlot slot="2fa-article-bottom" />
      </div>
    </>
  );
}
