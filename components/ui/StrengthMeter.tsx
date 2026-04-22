"use client";

import type { StrengthLevel } from "@/lib/crypto";

interface StrengthMeterProps {
  percent: number;
  level: StrengthLevel;
  color: string;
  entropy: number;
  crackTime: string;
}

export default function StrengthMeter({ percent, level, color, entropy, crackTime }: StrengthMeterProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.875rem", fontWeight: 600, color }}>{level}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>{entropy} bits of entropy</span>
      </div>
      <div
        style={{
          width: "100%",
          height: "0.5rem",
          backgroundColor: "var(--color-border-light)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Password strength: ${level}`}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: "9999px",
            transition: "width 0.3s ease, background-color 0.3s ease",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
          Estimated crack time:
        </span>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color }}>{crackTime}</span>
      </div>
    </div>
  );
}
