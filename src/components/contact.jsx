'use client';

import { useState } from 'react';
import { BriefcaseBusiness, GitBranch, Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const { profile } = portfolioData;

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]));

    if (!values.name || !values.email || !values.subject || !values.message) {
      setStatus('error');
      setFeedback('Please complete all fields before sending your message.');
      return;
    }

    if (!emailPattern.test(values.email)) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setFeedback('Sending your message...');

    window.setTimeout(() => {
      setStatus('success');
      setFeedback('Message sent successfully — I will reply shortly.');
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-primary-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Let’s build something exceptional together.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Available for freelance partnerships, product collaborations, and senior engineering opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <Mail className="text-primary-600 dark:text-primary-300" size={18} />
                <a href={`mailto:${profile.email}`} className="transition hover:text-primary-600 dark:hover:text-primary-300">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <MapPin className="text-primary-600 dark:text-primary-300" size={18} />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <GitBranch className="text-primary-600 dark:text-primary-300" size={18} />
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-primary-600 dark:hover:text-primary-300">
                  github.com/ipranavchavan
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                <BriefcaseBusiness className="text-primary-600 dark:text-primary-300" size={18} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-primary-600 dark:hover:text-primary-300">
                  linkedin.com/in/pranavchavhan
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Subject
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="Project inquiry"
                />
              </label>

              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
                  placeholder="Tell me about your project..."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-primary-600 dark:hover:bg-primary-500"
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {feedback && (
                  <p
                    className={`text-sm ${
                      status === 'error' ? 'text-rose-500' : status === 'success' ? 'text-emerald-500' : 'text-slate-500'
                    }`}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

