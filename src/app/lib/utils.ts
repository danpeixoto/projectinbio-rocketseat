import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function sanitizeLink(link?: string) {
  if (!link) return '';

  return link
    .replace(/\s/g, '')
    .replace(/[!@#$%^&*()_+\-=\[\]{};`':"\\|,ˆ.<>\/?]+/, '')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLocaleLowerCase();
}
