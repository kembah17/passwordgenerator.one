"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-footer-bg)",
        borderTop: "2px solid var(--color-primary)",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
            PasswordGenerator.one
          </h3>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", lineHeight: 1.6 }}>
            Free, secure password tools that run entirely in your browser. No data is ever sent to any server.
          </p>
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
            Tools
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/password-generator" style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", textDecoration: "none" }}>🔑 Password Generator</Link>
            <Link href="/passphrase-generator" style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", textDecoration: "none" }}>📝 Passphrase Generator</Link>
            <Link href="/password-strength-checker" style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", textDecoration: "none" }}>🛡️ Password Strength Checker</Link>
          </div>
        </div>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
            Company
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/about" style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", textDecoration: "none" }}>About</Link>
            <Link href="/privacy" style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)", textDecoration: "none" }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* More Free Tools */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '0', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-footer-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>More Free Tools</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
            <a href="https://pdftools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📄 PDF Tools</a>
            <a href="https://pictools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🖼️ Image Tools</a>
            <a href="https://percentcalc.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔢 Percentage Calculator</a>
            <a href="https://developertools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>💻 Developer Tools</a>
            <a href="https://wordcount.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📝 Word Counter</a>
            <a href="https://texttools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔤 Text Tools</a>
            <a href="https://socialmediatools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📱 Social Media Tools</a>
            <a href="https://randomize.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎲 Random Generator</a>
            <a href="https://qrcodegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📲 QR Code Generator</a>
            <a href="https://gpacalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎓 GPA Calculator</a>
            <a href="https://invoicegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🧾 Invoice Generator</a>
            <a href="https://caloriecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔥 Calorie Calculator</a>
            <a href="https://datecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📅 Date Calculator</a>
          </div>
        </div>
      </div>

                {/* MyHustle Search Widget */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', borderRadius: '12px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}>🏢 MyHustle</a>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', margin: '4px 0 0' }}>Find businesses across Nigeria</p>
            </div>
            <form
              action="https://myhustle.space/search" method="GET" target="_blank"
              style={{ display: 'flex', gap: '8px' }}
            >
              <input name="q" type="text" placeholder="Search businesses..." style={{ flex: 1, padding: '10px 14px', border: 'none', borderRadius: '8px', fontSize: '14px', outline: 'none', background: 'white', color: '#1f2937' }} />
              <button type="submit" style={{ background: '#fbbf24', color: '#1f2937', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Search</button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <a href="https://myhustle.space/list-your-business" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', textDecoration: 'none' }}>List your business free →</a>
            </div>
          </div>
        </div>

        {/* Nigerian Business Directory */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1rem' }}>
          <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Discover Nigerian businesses on <span style={{ color: 'var(--color-footer-link)', fontWeight: 500 }}>MyHustle.space</span> &mdash; Nigeria&apos;s free business directory
          </a>
        </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.5rem 1rem",
          borderTop: "1px solid var(--color-footer-muted)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.8125rem", color: "var(--color-footer-text)" }}>
          &copy; {new Date().getFullYear()} PasswordGenerator.one. All rights reserved.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-footer-text)" }}>
          🔒 100% client-side &bull; No data collection
        </p>
      </div>
    </footer>
  );
}
