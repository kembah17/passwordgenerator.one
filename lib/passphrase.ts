import { WORDLIST } from "./wordlist";
import { getSecureRandom } from "./crypto";

export type Separator = "space" | "hyphen" | "period" | "underscore" | "number";

export interface PassphraseOptions {
  wordCount: number;
  separator: Separator;
  capitalize: boolean;
  addNumber: boolean;
  addSpecial: boolean;
}

const SEPARATOR_MAP: Record<Separator, string> = {
  space: " ",
  hyphen: "-",
  period: ".",
  underscore: "_",
  number: "",
};

const SPECIAL_CHARS = "!@#$%^&*";

function getRandomSeparatorNumber(): string {
  return String(getSecureRandom(100));
}

export function generatePassphrase(options: PassphraseOptions): string {
  const words: string[] = [];

  for (let i = 0; i < options.wordCount; i++) {
    let word = WORDLIST[getSecureRandom(WORDLIST.length)];
    if (options.capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    words.push(word);
  }

  let sep: string;
  if (options.separator === "number") {
    const parts: string[] = [];
    for (let i = 0; i < words.length; i++) {
      parts.push(words[i]);
      if (i < words.length - 1) {
        parts.push(getRandomSeparatorNumber());
      }
    }
    let result = parts.join("");
    if (options.addNumber) {
      result += String(getSecureRandom(1000));
    }
    if (options.addSpecial) {
      result += SPECIAL_CHARS[getSecureRandom(SPECIAL_CHARS.length)];
    }
    return result;
  }

  sep = SEPARATOR_MAP[options.separator];
  let result = words.join(sep);

  if (options.addNumber) {
    result += sep + String(getSecureRandom(1000));
  }
  if (options.addSpecial) {
    result += SPECIAL_CHARS[getSecureRandom(SPECIAL_CHARS.length)];
  }

  return result;
}

export function calculatePassphraseEntropy(options: PassphraseOptions): number {
  const wordListSize = WORDLIST.length;
  let entropy = options.wordCount * Math.log2(wordListSize);

  if (options.capitalize) {
    entropy += options.wordCount; // 1 bit per word for capitalization
  }
  if (options.separator === "number") {
    entropy += (options.wordCount - 1) * Math.log2(100);
  }
  if (options.addNumber) {
    entropy += Math.log2(1000);
  }
  if (options.addSpecial) {
    entropy += Math.log2(SPECIAL_CHARS.length);
  }

  return Math.round(entropy * 100) / 100;
}
