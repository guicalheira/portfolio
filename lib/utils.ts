import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ============================================
// Utilitário para merge de classes Tailwind
// Combina clsx + tailwind-merge para resolver conflitos
// ============================================

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

