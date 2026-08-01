import { BarChart3, Bot, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const { profile } = portfolioData;

const highlights = [
  {
    icon: BarChart3,
    title: 'Analytics strategy',
    text: 'Turning CRM, operational, and funnel data into actionable performance dashboards and KPI visibility.',
  },
  {
    icon: Bot,
    title: 'Workflow automation',
    text: 'Using Power Automate, Apps Script, and smart process design to remove repetitive manual work and speed up reporting.',
  },
  {
    icon: Sparkles,
    title: 'Business storytelling',
    text: 'Translating complex datasets into clear, decision-ready insights that help teams act with confidence.',
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Data-driven problem solving with a focus on clarity, automation, and measurable growth.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I&apos;m {profile.name}, a {profile.title.toLowerCase()} focused on turning raw data into clear business decisions.
            My work blends SQL, Python, dashboarding, and automation to help teams improve reporting, unlock insights, and move faster.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-500/20 dark:text-primary-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
