import Link from 'next/link';
import { ArrowRight, BookOpen, BrainCircuit, Rocket, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const exams = [
  {
    title: 'JEE Main',
    description: 'Build concept clarity with chapter-wise rigor and daily problem solving.',
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'JEE Advanced',
    description: 'Advanced analytical depth, derivations, and high-level mock simulations.',
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'NEET UG',
    description: 'Biology and chemistry mastery with revision loops and concept-driven practice.',
    accent: 'from-emerald-400 to-teal-500',
  },
];

const features = [
  { icon: BrainCircuit, title: 'AI Tutor', text: 'Explain steps, compare methods, and adapt to beginner or advanced levels.' },
  { icon: BookOpen, title: 'Syllabus Explorer', text: 'Navigate subject, chapter, and subtopic structure across major exam tracks.' },
  { icon: Rocket, title: '3D Simulations', text: 'Canvas-based experiments for motion, atomic orbitals, and vector thinking.' },
  { icon: Target, title: 'Progress Analytics', text: 'Track weak areas, timers, mock tests, and revision reminders.' },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Future-ready learning
          </div>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Turn every concept into an <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">interactive achievement.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            RISHI ACHIEVERS AI helps aspirants master JEE Main, JEE Advanced, and NEET with adaptive study flows, interactive simulations, AI explanations, and full syllabus structure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-glow">
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-base font-semibold text-slate-100">
              <Link href="/syllabus">Explore syllabus</Link>
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              ['12K+', 'Active learners'],
              ['380+', 'Concept simulations'],
              ['94%', 'Retention focus'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-12 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-700 bg-slate-950/70 p-5 shadow-[0_0_80px_rgba(96,165,250,0.2)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900 p-4">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                <span>Adaptive curriculum</span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">Live</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>Physics</span>
                    <span>82%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>Chemistry</span>
                    <span>71%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-full w-[71%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>Math</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">Next milestone</div>
                  <div className="mt-1 text-lg font-bold text-white">Advanced vector sprint</div>
                </div>
                <ArrowRight className="h-5 w-5 text-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-black text-white">Exam pathways</h2>
          <Link href="/syllabus" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
            View full curriculum →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {exams.map((exam) => (
            <div key={exam.title} className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/80 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
              <div className={`h-1.5 bg-gradient-to-r ${exam.accent}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{exam.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{exam.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  <span>View roadmap</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="mb-8 text-3xl font-black text-white">Everything for focused learning</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-glow">
              <div className="mb-4 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
