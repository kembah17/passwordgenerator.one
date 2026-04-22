export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PasswordGenerator.one",
    url: "https://passwordgenerator.one",
    description: "Free, secure password generator tools that run entirely in your browser. Generate strong passwords, memorable passphrases, and check password strength.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://passwordgenerator.one/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
