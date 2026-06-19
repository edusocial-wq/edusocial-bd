import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale = "bn-BD") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function validateBDPhone(phone: string) {
  return /^01[3-9]\d{8}$/.test(phone.replace(/\s/g, ""));
}

export function normalizeBDPhone(phone: string) {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("880")) return `+${cleaned}`;
  if (cleaned.startsWith("0")) return `+88${cleaned}`;
  return `+880${cleaned}`;
}
