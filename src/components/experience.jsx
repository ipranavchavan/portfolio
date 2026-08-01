'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const timeline = portfolioData.experience;

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          A track record of data-driven execution, reporting, and operational impact.
        </h2>
      </div>

      <div className="relative space-y-6 before:absolute before:left-[23px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 dark:before:bg-slate-800">
        {timeline.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.company}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[56px_1fr] dark:border-slate-800 dark:bg-slate-900/80"
          >
            <div className="relative z-10 flex items-start justify-center md:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                <BriefcaseBusiness size={18} />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
              <p className="mt-1 text-base font-medium text-primary-700 dark:text-primary-300">
                {item.company}
                <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">{item.location}</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description.map((bullet) => (
                  <li key={bullet} className="list-disc pl-5">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
