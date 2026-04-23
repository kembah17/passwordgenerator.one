"use client";

import { useState, useCallback, useEffect } from "react";
import { generatePassphrase, calculatePassphraseEntropy } from "@/lib/passphrase";
import type { PassphraseOptions, Separator } from "@/lib/passphrase";
import { estimateCrackTime, getStrengthLevel, getStrengthColor, getStrengthPercent } from "@/lib/crypto";
import CopyButton from "@/components/ui/CopyButton";
import StrengthMeter from "@/components/ui/StrengthMeter";

const DEFAULT_OPTIONS: PassphraseOptions = {
  wordCount: 5,
  separator: "hyphen",
  capitalize: true,
  addNumber: true,
  addSpecial: false,
};

const SEPARATORS: { value: Separator; label: string; preview: string }[] = [
  { value: "hyphen", label: "Hyphen", preview: "word-word" },
  { value: "space", label: "Space", preview: "word word" },
  { value: "period", label: "Period", preview: "word.word" },
  { value: "underscore", label: "Underscore", preview: "word_word" },
  { value: "number", label: "Random Number", preview: "word42word" },
];

export default function PassphraseGenerator() {
  const [options, setOptions] = useState<PassphraseOptions>(DEFAULT_OPTIONS);
  const [passphrase, setPassphrase] = useState("");
  const [entropy, setEntropy] = useState(0);

  const generate = useCallback(() => {
    const pp = generatePassphrase(options);
    setPassphrase(pp);
    const ent = calculatePassphraseEntropy(options);
    setEntropy(ent);
  }, [options]);

  useEffect(() => {
    generate();
  }, [generate]);

  const level = getStrengthLevel(entropy);
  const color = getStrengthColor(level);
  const percent = getStrengthPercent(entropy);
  const crackTime = estimateCrackTime(entropy);

  const updateOption = <K extends keyof PassphraseOptions>(
    key: K,
    value: PassphraseOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Passphrase Display */}
      <div>
        <div className="password-display" style={{ marginBottom: "0.75rem" }}>
          {passphrase || "Click Generate"}
        </div>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <CopyButton text={passphrase} label="Copy Passphrase" />
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

      {/* Word Count */}
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
            Number of Words
          </label>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              minWidth: "2rem",
              textAlign: "right",
            }}
          >
            {options.wordCount}
          </span>
        </div>
        <input
          type="range"
          min={3}
          max={12}
          value={options.wordCount}
          onChange={(e) => updateOption("wordCount", Number(e.target.value))}
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
          <span>3</span>
          <span>12</span>
        </div>
      </div>

      {/* Separator */}
      <div>
        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
          }}
        >
          Word Separator
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0.5rem",
          }}
        >
          {SEPARATORS.map((sep) => (
            <button
              key={sep.value}
              onClick={() => updateOption("separator", sep.value)}
              style={{
                padding: "0.625rem 0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor:
                  options.separator === sep.value
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                backgroundColor:
                  options.separator === sep.value
                    ? "var(--color-primary-bg)"
                    : "var(--color-surface)",
                color:
                  options.separator === sep.value
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
                cursor: "pointer",
                fontSize: "0.8125rem",
                fontWeight: 500,
                textAlign: "left",
                transition: "all 0.15s ease",
              }}
            >
              <span style={{ display: "block", fontWeight: 600 }}>{sep.label}</span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  opacity: 0.7,
                  marginTop: "0.125rem",
                }}
              >
                {sep.preview}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Options Toggles */}
      <div>
        <p
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
          }}
        >
          Options
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            { key: "capitalize" as const, label: "Capitalize Words" },
            { key: "addNumber" as const, label: "Add Number" },
            { key: "addSpecial" as const, label: "Add Special Character" },
          ].map((t) => (
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
                  checked={options[t.key]}
                  onChange={(e) => updateOption(t.key, e.target.checked)}
                />
                <span className="toggle-slider" />
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
