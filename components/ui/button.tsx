import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60 disabled:cursor-not-allowed disabled:opacity-60';
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-glow',
    secondary: 'border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-600',
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
