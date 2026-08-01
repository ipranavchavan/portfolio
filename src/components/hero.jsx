'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile, hero } = portfolioData;

  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-40" />
      <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute bottom-8 right-8 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm backdrop-blur dark:border-primary-400/30 dark:bg-slate-900/70 dark:text-primary-200">
            <Sparkles size={16} />
            {hero.availability}
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Hi, I&apos;m {profile.name} — {profile.title}.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {profile.shortBio}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500"
            >
              View Resume
              <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <Download size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-[32px] border border-white/40 bg-white/80 p-6 shadow-glow backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-6 text-white dark:border-slate-800">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-300">
                <span>Portfolio Snapshot</span>
                <span>2026</span>
              </div>
              <div className="mt-10 space-y-5">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm text-slate-300">Core Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {hero.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-500/10 p-4">
                    <p className="text-2xl font-bold text-emerald-300">2021</p>
                    <p className="mt-1 text-sm text-slate-300">Professional journey started</p>
                  </div>
                  <div className="rounded-2xl bg-primary-500/10 p-4">
                    <p className="text-2xl font-bold text-primary-300">3+</p>
                    <p className="mt-1 text-sm text-slate-300">Core analytics focus areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
