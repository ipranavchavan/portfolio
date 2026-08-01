'use client';

import { useState } from 'react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setMessage('Checking access...');

    try {
      const response = await fetch('/api/inquiries-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus('error');
        setMessage(result.message || 'Invalid password.');
        return;
      }

      setStatus('success');
      setMessage('Access granted. Refreshing...');
      window.location.reload();
    } catch {
      setStatus('error');
      setMessage('Unable to verify access right now.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
          Admin Access
        </p>
        <h1 className="mt-2 text-3xl font-bold">Protected inquiry page</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Enter the admin password to view incoming inquiries.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Enter password"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-primary-600 dark:hover:bg-primary-500"
          >
            {status === 'sending' ? 'Checking...' : 'Unlock inbox'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === 'error' ? 'text-rose-500' : status === 'success' ? 'text-emerald-500' : 'text-slate-500'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
