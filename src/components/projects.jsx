'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Bot, Code2, Map, ShoppingCart, ShipWheel } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const projects = portfolioData.projects;

const projectVisuals = {
  cart: ShoppingCart,
  travel: Map,
  cruise: ShipWheel,
  analytics: BarChart3,
  automation: Bot,
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Selected work with measurable product impact.
          </h2>
        </div>
      </div>

      <div className="space-y-7">
        {projects.map((project, index) => {
          const ProjectVisual = projectVisuals[project.visual] || Code2;
          const visibleTech = project.tech.slice(0, 6);
          const remainingTech = project.tech.length - visibleTech.length;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="overflow-hidden rounded-[30px] border border-primary-100 bg-primary-50/70 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-primary-700 dark:text-primary-300 sm:text-4xl">{project.title}</h3>
                  <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">{project.period}</p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600 marker:text-slate-500 dark:text-slate-300">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {visibleTech.map((item) => (
                      <span key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
                    ))}
                    {remainingTech > 0 && <span className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200">+{remainingTech} more</span>}
                  </div>

                  <a href={project.projectUrl || project.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-primary-700 bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition hover:bg-primary-700 hover:text-white dark:border-primary-300 dark:bg-slate-900 dark:text-primary-200 dark:hover:bg-primary-300 dark:hover:text-slate-950">
                    View Project Details <ArrowUpRight size={17} />
                  </a>
                </div>

                <div className="flex min-h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-white to-primary-100/70 p-8 dark:from-slate-800 dark:to-primary-950/50">
                  <ProjectVisual className="h-36 w-36 text-primary-600 dark:text-primary-300" strokeWidth={1.25} />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
