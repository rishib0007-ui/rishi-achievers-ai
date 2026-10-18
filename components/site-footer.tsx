import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-lg font-black uppercase tracking-[0.18em] text-white">RISHI ACHIEVERS AI</div>
          <div className="mt-1">Preparing minds for JEE Main, JEE Advanced, and NEET.</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
          <Link href="/simulations" className="transition hover:text-white">Simulations</Link>
          <Link href="/tutor" className="transition hover:text-white">AI Tutor</Link>
          <Link href="/settings" className="transition hover:text-white">Settings</Link>
        </div>
      </div>
    </footer>
  );
}
