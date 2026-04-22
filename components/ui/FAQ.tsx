"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "0.75rem",
            overflow: "hidden",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              width: "100%",
              padding: "1rem 1.25rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "var(--color-text)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              textAlign: "left",
            }}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                flexShrink: 0,
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openIndex === index && (
            <div
              style={{
                padding: "0 1.25rem 1rem",
                color: "var(--color-text-secondary)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
              }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
