'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
          Education
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Academic foundation supporting my analytical and technical growth.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-1">
        {education.map((item, index) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.years}</span>
                </div>
                <p className="mt-1 text-base font-medium text-primary-700 dark:text-primary-300">{item.institution}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.details}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
