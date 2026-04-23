import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WebSiteSchema from "@/components/seo/WebSiteSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://passwordgenerator.one"),
  title: {
    default:
      "Password Generator - Free Secure Password & Passphrase Generator | PasswordGenerator.one",
    template: "%s | PasswordGenerator.one",
  },
  description:
    "Free secure password generator, passphrase generator, and password strength checker. All tools run 100% in your browser using Web Crypto API — your passwords never leave your device.",
  keywords: [
    "password generator",
    "passphrase generator",
    "password strength checker",
    "secure password",
    "random password",
    "strong password",
    "password tool",
    "free password generator",
  ],
  authors: [{ name: "PasswordGenerator.one" }],
  creator: "PasswordGenerator.one",
  publisher: "PasswordGenerator.one",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://passwordgenerator.one",
    siteName: "PasswordGenerator.one",
    title:
      "Password Generator - Free Secure Password & Passphrase Generator",
    description:
      "Free secure password generator, passphrase generator, and password strength checker. 100% client-side — your passwords never leave your device.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Password Generator - Free Secure Password & Passphrase Generator",
    description:
      "Free secure password generator, passphrase generator, and password strength checker. 100% client-side.",
  },
  alternates: {
    canonical: "https://passwordgenerator.one",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){d.classList.add("dark")}else{d.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
        <WebSiteSchema />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundColor: "var(--color-bg-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
