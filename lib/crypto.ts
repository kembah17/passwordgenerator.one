export function getSecureRandom(max: number): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

export function getSecureRandomFloat(): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] / (0xFFFFFFFF + 1);
}

export function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getSecureRandom(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const AMBIGUOUS = "0OlI1";

export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  special: boolean;
  excludeAmbiguous: boolean;
  excludeChars: string;
  count: number;
}

export function generatePassword(options: PasswordOptions): string {
  let charset = "";
  const required: string[] = [];

  if (options.uppercase) {
    let chars = UPPERCASE;
    if (options.excludeAmbiguous) chars = chars.replace(/[OI]/g, "");
    charset += chars;
    if (chars.length > 0) required.push(chars[getSecureRandom(chars.length)]);
  }
  if (options.lowercase) {
    let chars = LOWERCASE;
    if (options.excludeAmbiguous) chars = chars.replace(/[l]/g, "");
    charset += chars;
    if (chars.length > 0) required.push(chars[getSecureRandom(chars.length)]);
  }
  if (options.numbers) {
    let chars = NUMBERS;
    if (options.excludeAmbiguous) chars = chars.replace(/[01]/g, "");
    charset += chars;
    if (chars.length > 0) required.push(chars[getSecureRandom(chars.length)]);
  }
  if (options.special) {
    charset += SPECIAL;
    required.push(SPECIAL[getSecureRandom(SPECIAL.length)]);
  }

  if (options.excludeChars) {
    for (const c of options.excludeChars) {
      charset = charset.split(c).join("");
    }
  }

  if (charset.length === 0) {
    charset = LOWERCASE;
  }

  const passwordChars: string[] = [];
  for (let i = 0; i < options.length; i++) {
    passwordChars.push(charset[getSecureRandom(charset.length)]);
  }

  // Ensure at least one of each required type
  for (let i = 0; i < required.length && i < options.length; i++) {
    const pos = getSecureRandom(options.length);
    passwordChars[pos] = required[i];
  }

  return passwordChars.join("");
}

export function generatePasswords(options: PasswordOptions): string[] {
  const passwords: string[] = [];
  for (let i = 0; i < options.count; i++) {
    passwords.push(generatePassword(options));
  }
  return passwords;
}

export function getCharsetSize(password: string): number {
  let size = 0;
  if (/[a-z]/.test(password)) size += 26;
  if (/[A-Z]/.test(password)) size += 26;
  if (/[0-9]/.test(password)) size += 10;
  if (/[^a-zA-Z0-9]/.test(password)) size += 33;
  return size || 1;
}

export function calculateEntropy(password: string): number {
  const charsetSize = getCharsetSize(password);
  return Math.round(password.length * Math.log2(charsetSize) * 100) / 100;
}

export function calculateEntropyFromParams(charsetSize: number, length: number): number {
  if (charsetSize <= 0 || length <= 0) return 0;
  return Math.round(length * Math.log2(charsetSize) * 100) / 100;
}

export function estimateCrackTime(entropy: number): string {
  const guessesPerSecond = 10_000_000_000; // 10 billion
  const totalGuesses = Math.pow(2, entropy);
  const seconds = totalGuesses / guessesPerSecond;

  if (seconds < 0.001) return "Instantly";
  if (seconds < 1) return "Less than a second";
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 86400 * 365) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 86400 * 365 * 1000) return `${Math.round(seconds / (86400 * 365))} years`;
  if (seconds < 86400 * 365 * 1_000_000) return `${Math.round(seconds / (86400 * 365 * 1000))} thousand years`;
  if (seconds < 86400 * 365 * 1_000_000_000) return `${Math.round(seconds / (86400 * 365 * 1_000_000))} million years`;
  if (seconds < 86400 * 365 * 1e12) return `${Math.round(seconds / (86400 * 365 * 1_000_000_000))} billion years`;
  return "Trillions of years+";
}

export type StrengthLevel = "Very Weak" | "Weak" | "Fair" | "Good" | "Strong" | "Very Strong";

export function getStrengthLevel(entropy: number): StrengthLevel {
  if (entropy < 28) return "Very Weak";
  if (entropy < 36) return "Weak";
  if (entropy < 60) return "Fair";
  if (entropy < 80) return "Good";
  if (entropy < 100) return "Strong";
  return "Very Strong";
}

export function getStrengthColor(level: StrengthLevel): string {
  switch (level) {
    case "Very Weak": return "var(--color-strength-weak)";
    case "Weak": return "var(--color-strength-weak)";
    case "Fair": return "var(--color-strength-fair)";
    case "Good": return "var(--color-strength-good)";
    case "Strong": return "var(--color-strength-strong)";
    case "Very Strong": return "var(--color-strength-very-strong)";
  }
}

export function getStrengthPercent(entropy: number): number {
  return Math.min(100, Math.round((entropy / 128) * 100));
}
