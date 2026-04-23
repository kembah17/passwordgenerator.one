import type { Metadata } from "next";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Password Security",
  description:
    "Answers to common questions about password generation, passphrase security, password strength, and online security best practices.",
  alternates: { canonical: "https://passwordgenerator.one/faq/" },
};

const faqItems = [
  {
    question: "Are my passwords stored or sent to a server?",
    answer:
      "Never. All tools on PasswordGenerator.one run entirely in your browser using the Web Crypto API. No passwords, passphrases, or analyzed text ever leaves your device. You can verify this by disconnecting from the internet and using the tools offline.",
  },
  {
    question: "What is the Web Crypto API?",
    answer:
      "The Web Crypto API is a browser-native interface for cryptographic operations. It provides access to a cryptographically strong random number generator (crypto.getRandomValues()) that produces true randomness suitable for security applications. It is built into all modern browsers and requires no plugins or downloads.",
  },
  {
    question: "How long should my password be?",
    answer:
      "For general accounts, use at least 12 characters. For important accounts (email, banking, cloud storage), use 16 or more characters. Each additional character exponentially increases the number of possible combinations. With all character types enabled, a 16-character password has over 80 bits of entropy.",
  },
  {
    question: "What is password entropy?",
    answer:
      "Entropy measures the unpredictability of a password in bits. It is calculated as: Length x log2(Character Set Size). Higher entropy means more possible combinations and longer crack times. Aim for 80+ bits for important accounts.",
  },
  {
    question: "Is a passphrase more secure than a password?",
    answer:
      "A well-generated passphrase of 5+ random words provides comparable or better security than a 16-character random password. The key advantage is memorability \u2014 you can remember 'Marble-Sunset-Bicycle-Ocean-Thunder' much more easily than 'X7#mK9$pL2vN4@qR'. Both are secure when generated randomly.",
  },
  {
    question: "How is crack time calculated?",
    answer:
      "We assume an attacker can make 10 billion guesses per second, which is realistic for a well-funded attacker using GPU clusters. The crack time is calculated as 2^entropy / guesses_per_second. This represents the average time for a brute-force attack against the full key space.",
  },
  {
    question: "Why does the strength checker penalize common patterns?",
    answer:
      "Real-world attackers do not use pure brute force. They use dictionaries, common password lists, keyboard pattern databases, and leet-speak substitution rules. A password like 'P@$$w0rd123!' looks complex but is trivially crackable because it follows predictable patterns. Our checker accounts for these real-world attack strategies.",
  },
  {
    question: "Should I use a password manager?",
    answer:
      "Absolutely. A password manager is the only practical way to use strong, unique passwords for every account. We recommend Bitwarden (free, open-source) or 1Password (premium). Read our Password Manager Guide for detailed setup instructions.",
  },
  {
    question: "What is two-factor authentication (2FA)?",
    answer:
      "2FA adds a second verification step beyond your password, typically a code from an authenticator app or a hardware security key. Even if someone steals your password, they cannot access your account without the second factor. We recommend enabling 2FA on all important accounts.",
  },
  {
    question: "Is PasswordGenerator.one really free?",
    answer:
      "Yes, all tools are completely free with no account required and no usage limits. We sustain the site through non-intrusive advertising. We will never charge for our core password tools.",
  },
  {
    question: "Can I use these tools on my phone?",
    answer:
      "Yes. All tools are fully responsive and work on any device with a modern browser \u2014 smartphones, tablets, laptops, and desktops. No app download is needed.",
  },
  {
    question: "Do you support dark mode?",
    answer:
      "Yes. PasswordGenerator.one supports both light and dark modes. It automatically matches your system preference, and you can toggle between modes using the theme switch in the header.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqItems} />

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
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Everything you need to know about password security, our tools,
            and online safety.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      <div className="container">
        <AdSlot slot="faq-bottom" />
      </div>
    </>
  );
}
