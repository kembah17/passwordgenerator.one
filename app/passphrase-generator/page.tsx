import type { Metadata } from "next";
import PassphraseGenerator from "@/components/tools/PassphraseGenerator";
import AdSlot from "@/components/ui/AdSlot";
import TrustBadge from "@/components/ui/TrustBadge";
import RelatedTools from "@/components/ui/RelatedTools";
import FAQ from "@/components/ui/FAQ";
import FaqSchema from "@/components/seo/FaqSchema";

export const metadata: Metadata = {
  title: "Passphrase Generator - Create Memorable Secure Passphrases",
  description:
    "Generate strong, memorable passphrases from random words. Customize word count, separators, and extras. 100% client-side using Web Crypto API.",
  alternates: { canonical: "https://passwordgenerator.one/passphrase-generator/" },
};

const faqItems = [
  {
    question: "What is a passphrase?",
    answer:
      "A passphrase is a password made up of multiple random words, like 'correct-horse-battery-staple'. They are typically longer than traditional passwords but much easier to remember while providing excellent security.",
  },
  {
    question: "Are passphrases more secure than passwords?",
    answer:
      "A well-generated passphrase of 5+ random words provides comparable or better security than a 16-character random password. The key is that the words must be truly random \u2014 not a phrase you made up. Our generator uses cryptographic randomness to select words.",
  },
  {
    question: "How many words should my passphrase have?",
    answer:
      "We recommend at least 5 words for general use and 6-7 words for high-security accounts. Each additional word roughly doubles the number of possible combinations, making the passphrase exponentially harder to crack.",
  },
  {
    question: "Does the separator matter for security?",
    answer:
      "The separator adds a small amount of entropy, but the main security comes from the number and randomness of the words. Choose whichever separator is easiest for you to type. Random number separators add the most extra entropy.",
  },
  {
    question: "Where does the word list come from?",
    answer:
      "We use a curated word list of common English words that are easy to spell and type. The list is large enough to provide strong entropy while avoiding obscure or easily confused words.",
  },
];

export default function PassphraseGeneratorPage() {
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
            Passphrase Generator
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.7,
            }}
          >
            Generate strong, memorable passphrases from random words.
            Easier to remember than random characters, yet equally secure.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <PassphraseGenerator />
        </div>
      </section>

      {/* Trust Badge */}
      <section className="container" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <TrustBadge variant="generated" />
        </div>
      </section>

      <div className="container">
        <AdSlot slot="passphrase-mid" />
      </div>

      {/* SEO Content */}
      <section className="container" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <div
          className="card"
          style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}
        >
          <div className="article-content">
            <h2>Why Use a Passphrase?</h2>
            <p>
              The concept was popularized by the famous XKCD comic: four random
              common words strung together create a password that is both highly
              secure and easy to remember. The math is simple \u2014 with a word
              list of 7,776 words, each word adds about 12.9 bits of entropy.
              Five words give you ~64 bits, which would take centuries to crack.
            </p>
            <h3>Passphrases vs. Traditional Passwords</h3>
            <p>
              A 10-character random password like <code>X7#mK9$pL2</code> has
              about 65 bits of entropy but is nearly impossible to memorize. A
              5-word passphrase like <code>Marble-Sunset-Bicycle-Ocean-Thunder</code>{" "}
              has similar entropy but you can visualize and remember it easily.
            </p>
            <h3>Tips for Using Passphrases</h3>
            <ul>
              <li>Never use a phrase from a book, song, or movie \u2014 use random words</li>
              <li>Add a number or special character for sites that require them</li>
              <li>Use at least 5 words for important accounts</li>
              <li>Store your passphrases in a password manager for convenience</li>
              <li>Use a different passphrase for every account</li>
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
        <RelatedTools currentPath="/passphrase-generator" />
      </section>

      <div className="container">
        <AdSlot slot="passphrase-bottom" />
      </div>
    </>
  );
}
