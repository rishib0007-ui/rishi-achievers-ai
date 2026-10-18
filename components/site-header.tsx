import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/syllabus', label: 'Syllabus' },
  { href: '/simulations', label: 'Simulations' },
  { href: '/tutor', label: 'AI Tutor' },
  { href: '/notes', label: 'Notes' },
  { href: '/questions', label: 'Question Bank' },
  { href: '/tests', label: 'Mock Tests' },
  { href: '/settings', label: 'Settings' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 font-black text-slate-950 shadow-glow">
            R
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-[0.22em] text-white">RISHI</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Achievers AI</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
