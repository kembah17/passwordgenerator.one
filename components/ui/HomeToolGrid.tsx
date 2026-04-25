'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TOOLS } from '@/lib/tools-data';

export default function HomeToolGrid() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      {TOOLS.map((tool) => (
        <Link
          key={tool.slug}
          href={tool.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            padding: '1.75rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            backgroundColor: 'var(--color-bg-card)',
            border: hoveredSlug === tool.slug ? '2px solid var(--color-brand)' : '2px solid var(--color-border)',
            boxShadow: hoveredSlug === tool.slug ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
            transform: hoveredSlug === tool.slug ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={() => setHoveredSlug(tool.slug)}
          onMouseLeave={() => setHoveredSlug(null)}
        >
          <span style={{ fontSize: '2.25rem' }}>{tool.icon}</span>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-heading)' }}>
            {tool.name}
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, flex: 1, margin: 0 }}>
            {tool.description}
          </p>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            Use Tool →
          </span>
        </Link>
      ))}
    </div>
  );
}
