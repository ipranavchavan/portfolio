import { BriefcaseBusiness, GitBranch, MoveUp, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © 2026 Pranav Chavan.
        </p>

        <div className="flex items-center gap-3">
          <a href="https://github.com/ipranavchavan" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300">
            <GitBranch size={16} />
          </a>
          <a href="https://www.linkedin.com/in/pranavchavhan/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300">
            <BriefcaseBusiness size={16} />
          </a>
          <a href="https://x.com/pranavchavanrc" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300">
            <Send size={16} />
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500"
          >
            <MoveUp size={16} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
