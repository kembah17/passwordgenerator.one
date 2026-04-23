"use client";

import { useState, useCallback, useEffect } from "react";
import { generatePassword, calculateEntropy, estimateCrackTime, getStrengthLevel, getStrengthColor, getStrengthPercent } from "@/lib/crypto";
import type { PasswordOptions } from "@/lib/crypto";
import CopyButton from "@/components/ui/CopyButton";
import StrengthMeter from "@/components/ui/StrengthMeter";

const DEFAULT_OPTIONS: PasswordOptions = {
  length: 16,
  uppercase: true,
  lowercase: true,
  numbers: true,
  special: true,
  excludeAmbiguous: false,
  excludeChars: "",
  count: 1,
};

export default function PasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>(DEFAULT_OPTIONS);
  const [password, setPassword] = useState("");
  const [entropy, setEntropy] = useState(0);

  const generate = useCallback(() => {
    const pw = generatePassword(options);
    setPassword(pw);
    const ent = calculateEntropy(pw);
    setEntropy(ent);
  }, [options]);

  useEffect(() => {
    generate();
  }, [generate]);

  const level = getStrengthLevel(entropy);
  const color = getStrengthColor(level);
  const percent = getStrengthPercent(entropy);
  const crackTime = estimateCrackTime(entropy);

  const updateOption = <K extends keyof PasswordOptions>(
    key: K,
    value: PasswordOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const toggles: { key: keyof PasswordOptions; label: string }[] = [
    { key: "uppercase", label: "Uppercase (A-Z)" },
    { key: "lowercase", label: "Lowercase (a-z)" },
    { key: "numbers", label: "Numbers (0-9)" },
    { key: "special", label: "Symbols (!@#$%...)" },
    { key: "excludeAmbiguous", label: "Exclude Ambiguous (0OlI1)" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Password Display */}
      <div>
        <div className="password-display" style={{ marginBottom: "0.75rem" }}>
          {password || "Click Generate"}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <CopyButton text={password} label="Copy Password" />
          <button
            onClick={generate}
            className="btn-secondary"
            style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Generate New
          </button>
        </div>
      </div>

      {/* Strength Meter */}
      <StrengthMeter
        percent={percent}
        level={level}
        color={color}
        entropy={entropy}
        crackTime={crackTime}
      />

      {/* Length Slider */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <label
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-text)",
            }}
          >
            Password Length
          </label>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              minWidth: "2.5rem",
              textAlign: "right",
            }}
          >
            {options.length}
          </span>
        </div>
        <input
          type="range"
          min={4}
          max={128}
          value={options.length}
          onChange={(e) => updateOption("length", Number(e.target.value))}
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
            marginTop: "0.25rem",
          }}
        >
          <span>4</span>
          <span>128</span>
        </div>
      </div>

      {/* Character Type Toggles */}
      <div>
        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
          }}
        >
          Character Types
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {toggles.map((t) => (
            <label
              key={t.key}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                {t.label}
              </span>
              <span className="toggle-switch">
                <input
                  type="checkbox"
                  checked={Boolean(options[t.key])}
                  onChange={(e) => updateOption(t.key, e.target.checked as never)}
                />
                <span className="toggle-slider" />
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Exclude Characters */}
      <div>
        <label
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text)",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          Exclude Characters
        </label>
        <input
          type="text"
          value={options.excludeChars}
          onChange={(e) => updateOption("excludeChars", e.target.value)}
          placeholder="e.g. {}[]()/<>"
          style={{ maxWidth: "300px" }}
        />
      </div>
    </div>
  );
}
