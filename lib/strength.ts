import { COMMON_PASSWORDS } from "./common-passwords";
import { calculateEntropy, estimateCrackTime, getStrengthLevel, getStrengthColor, getStrengthPercent } from "./crypto";
import type { StrengthLevel } from "./crypto";

export interface StrengthResult {
  score: number;
  level: StrengthLevel;
  color: string;
  percent: number;
  entropy: number;
  crackTime: string;
  checks: StrengthCheck[];
  suggestions: string[];
}

export interface StrengthCheck {
  label: string;
  passed: boolean;
  detail: string;
}

const KEYBOARD_PATTERNS = [
  "qwertyuiop", "asdfghjkl", "zxcvbnm",
  "qwerty", "asdfgh", "zxcvbn", "qweasd",
  "1234567890", "12345", "123456", "1234567", "12345678", "123456789",
  "0987654321", "09876", "098765", "0987654",
  "abcdefgh", "abcdef", "abcde",
  "!@#$%^", "!@#$%^&*",
  "qazwsx", "wsxedc", "edcrfv",
];

const LEET_MAP: Record<string, string> = {
  "4": "a", "@": "a", "8": "b", "(": "c", "3": "e",
  "6": "g", "#": "h", "!": "i", "1": "l", "0": "o",
  "$": "s", "5": "s", "7": "t", "+": "t", "2": "z",
};

function deLeet(password: string): string {
  return password.split("").map(c => LEET_MAP[c] || c).join("");
}

function hasRepeatingChars(password: string): boolean {
  return /(.)({2,})/.test(password);
}

function hasSequentialChars(password: string): boolean {
  const lower = password.toLowerCase();
  for (const pattern of KEYBOARD_PATTERNS) {
    if (lower.includes(pattern)) return true;
    const reversed = pattern.split("").reverse().join("");
    if (lower.includes(reversed)) return true;
  }
  for (let i = 0; i < lower.length - 2; i++) {
    const c1 = lower.charCodeAt(i);
    const c2 = lower.charCodeAt(i + 1);
    const c3 = lower.charCodeAt(i + 2);
    if (c2 - c1 === 1 && c3 - c2 === 1) return true;
    if (c1 - c2 === 1 && c2 - c3 === 1) return true;
  }
  return false;
}

function isCommonPassword(password: string): boolean {
  const lower = password.toLowerCase();
  return COMMON_PASSWORDS.has(lower);
}

function hasDictionaryWord(password: string): boolean {
  const lower = password.toLowerCase();
  const deleet = deLeet(lower);
  const commonWords = [
    "password", "dragon", "master", "monkey", "shadow", "sunshine",
    "princess", "football", "charlie", "welcome", "batman", "access",
    "hello", "trustno", "letmein", "baseball", "iloveyou", "admin",
    "flower", "mustang", "michael", "jordan", "hunter", "ranger",
    "buster", "soccer", "harley", "daniel", "robert", "thomas",
    "summer", "winter", "spring", "autumn", "secret", "computer",
    "internet", "server", "network", "system", "login", "account",
  ];
  for (const word of commonWords) {
    if (lower.includes(word) || deleet.includes(word)) return true;
  }
  return false;
}

export function analyzePassword(password: string): StrengthResult {
  if (!password) {
    return {
      score: 0,
      level: "Very Weak",
      color: getStrengthColor("Very Weak"),
      percent: 0,
      entropy: 0,
      crackTime: "Instantly",
      checks: [],
      suggestions: ["Enter a password to check its strength."],
    };
  }

  const checks: StrengthCheck[] = [];
  const suggestions: string[] = [];
  let penaltyBits = 0;

  // Length check
  const lengthOk = password.length >= 12;
  checks.push({
    label: "Length",
    passed: lengthOk,
    detail: lengthOk
      ? `${password.length} characters (good)`
      : `${password.length} characters (use 12+ for better security)`,
  });
  if (!lengthOk) suggestions.push("Use at least 12 characters for a strong password.");

  // Uppercase
  const hasUpper = /[A-Z]/.test(password);
  checks.push({
    label: "Uppercase letters",
    passed: hasUpper,
    detail: hasUpper ? "Contains uppercase letters" : "No uppercase letters found",
  });
  if (!hasUpper) suggestions.push("Add uppercase letters (A-Z) to increase complexity.");

  // Lowercase
  const hasLower = /[a-z]/.test(password);
  checks.push({
    label: "Lowercase letters",
    passed: hasLower,
    detail: hasLower ? "Contains lowercase letters" : "No lowercase letters found",
  });
  if (!hasLower) suggestions.push("Add lowercase letters (a-z) to increase complexity.");

  // Numbers
  const hasNumbers = /[0-9]/.test(password);
  checks.push({
    label: "Numbers",
    passed: hasNumbers,
    detail: hasNumbers ? "Contains numbers" : "No numbers found",
  });
  if (!hasNumbers) suggestions.push("Add numbers (0-9) to increase complexity.");

  // Special characters
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  checks.push({
    label: "Special characters",
    passed: hasSpecial,
    detail: hasSpecial ? "Contains special characters" : "No special characters found",
  });
  if (!hasSpecial) suggestions.push("Add special characters (!@#$%^&*) for extra security.");

  // Common password check
  const isCommon = isCommonPassword(password);
  checks.push({
    label: "Common password",
    passed: !isCommon,
    detail: isCommon ? "This is a commonly used password!" : "Not a commonly used password",
  });
  if (isCommon) {
    suggestions.push("This password is in the list of most common passwords. Choose something unique.");
    penaltyBits += 30;
  }

  // Keyboard patterns
  const hasPatterns = hasSequentialChars(password);
  checks.push({
    label: "Keyboard patterns",
    passed: !hasPatterns,
    detail: hasPatterns ? "Contains keyboard patterns or sequences" : "No keyboard patterns detected",
  });
  if (hasPatterns) {
    suggestions.push("Avoid keyboard patterns like 'qwerty' or '123456'.");
    penaltyBits += 15;
  }

  // Repeating characters
  const hasRepeats = hasRepeatingChars(password);
  checks.push({
    label: "Repeated characters",
    passed: !hasRepeats,
    detail: hasRepeats ? "Contains repeated character sequences" : "No excessive repetition",
  });
  if (hasRepeats) {
    suggestions.push("Avoid repeating the same character multiple times.");
    penaltyBits += 10;
  }

  // Dictionary words
  const hasDict = hasDictionaryWord(password);
  checks.push({
    label: "Dictionary words",
    passed: !hasDict,
    detail: hasDict ? "Contains common dictionary words" : "No common dictionary words detected",
  });
  if (hasDict) {
    suggestions.push("Avoid using common dictionary words in your password.");
    penaltyBits += 15;
  }

  // Calculate entropy with penalties
  const rawEntropy = calculateEntropy(password);
  const effectiveEntropy = Math.max(0, rawEntropy - penaltyBits);
  const level = getStrengthLevel(effectiveEntropy);
  const color = getStrengthColor(level);
  const percent = getStrengthPercent(effectiveEntropy);
  const crackTime = estimateCrackTime(effectiveEntropy);
  const score = Math.min(100, Math.round((effectiveEntropy / 128) * 100));

  if (suggestions.length === 0) {
    suggestions.push("Great password! It meets all security criteria.");
  }

  return { score, level, color, percent, entropy: effectiveEntropy, crackTime, checks, suggestions };
}
