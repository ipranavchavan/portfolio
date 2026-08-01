'use client';

import { motion } from 'framer-motion';
import { BrushCleaning, Code2, Database, GitBranch, LayoutDashboard, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillGroups = portfolioData.skills;

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          A practical toolkit built for product speed, polish, and reliability.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.title === 'Frontend' ? LayoutDashboard : group.title === 'Data Analysis' ? Database : ShieldCheck;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 transition dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm dark:bg-slate-900 dark:text-primary-200">
                      {item.startsWith('React') || item.startsWith('Next') ? <Code2 size={14} /> : item.startsWith('Git') ? <GitBranch size={14} /> : <BrushCleaning size={14} />}
                    </span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
