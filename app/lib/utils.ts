import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  const flat = inputs.map((input) => { return input?.toString().split(' ') }).flat()
  return twMerge(clsx(flat))
}
