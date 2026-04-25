"use client";

import { useState } from "react";
import { analyzePassword } from "@/lib/strength";
import StrengthMeter from "@/components/ui/StrengthMeter";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const result = analyzePassword(password);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Password Input */}
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
          Enter a password to check
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type or paste a password..."
            autoComplete="off"
            style={{
              width: "100%",
              paddingRight: "3rem",
              fontSize: "1.0625rem",
              fontFamily: "monospace",
            }}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              padding: "0.25rem",
            }}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Strength Meter */}
      {password && (
        <StrengthMeter
          percent={result.percent}
          level={result.level}
          color={result.color}
          entropy={result.entropy}
          crackTime={result.crackTime}
        />
      )}

      {/* Score */}
      {password && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "var(--color-surface-alt)",
            borderRadius: "0.75rem",
            border: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: "#FFFFFF",
              backgroundColor: result.color,
              flexShrink: 0,
            }}
          >
            {result.score}
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-text)", margin: 0 }}>
              {result.level}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: "0.125rem 0 0" }}>
              Score {result.score}/100 &bull; {result.entropy} bits of entropy
            </p>
          </div>
        </div>
      )}

      {/* Security Checks */}
      {password && result.checks.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.75rem",
            }}
          >
            Security Checks
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {result.checks.map((check, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.5rem",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "1.25rem",
                    height: "1.25rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    backgroundColor: check.passed
                      ? "var(--color-success)"
                      : "var(--color-error)",
                    marginTop: "0.0625rem",
                  }}
                >
                  {check.passed ? "✓" : "✗"}
                </span>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--color-text)",
                      margin: 0,
                    }}
                  >
                    {check.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      margin: "0.125rem 0 0",
                    }}
                  >
                    {check.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {password && result.suggestions.length > 0 && (
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.75rem",
            }}
          >
            Suggestions
          </h3>
          <div
            style={{
              padding: "1rem",
              backgroundColor: result.score >= 80
                ? "var(--color-success-bg)"
                : "var(--color-surface-alt)",
              border: "1px solid",
              borderColor: result.score >= 80
                ? "var(--color-success)"
                : "var(--color-border)",
              borderRadius: "0.75rem",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {result.suggestions.map((s, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>→</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
