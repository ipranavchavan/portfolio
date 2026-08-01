'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, GitBranch } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const projects = portfolioData.projects;

const filters = ['All', 'Analytics', 'Automation'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = useMemo(() => {
    return activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Selected work with measurable product impact.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? 'bg-slate-950 text-white dark:bg-primary-600'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-primary-500 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-primary-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 p-2 text-slate-900 backdrop-blur"
                    aria-label="View GitHub"
                  >
                    <GitBranch size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/90 p-2 text-slate-900 backdrop-blur"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Case Study</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-300">
                  <ArrowUpRight size={16} />
                  Explore project
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
