import { cookies } from 'next/headers';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import AdminLogin from '../../components/adminLogin';

const inquiryStorePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

async function getInquiries() {
  try {
    const fileContents = await fs.readFile(inquiryStorePath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export default async function InquiriesPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('inquiry-admin-auth')?.value === 'true';

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const inquiries = await getInquiries();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold">Inbox</h1>
          </div>
          <a
            href="/"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-100"
          >
            Back to site
          </a>
        </div>

        {inquiries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-700 dark:text-slate-300">
            No inquiries yet.
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <article key={inquiry.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold">{inquiry.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{inquiry.email}</p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(inquiry.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-600 dark:text-primary-300">
                    {inquiry.subject}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-slate-700 dark:text-slate-200">{inquiry.message}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
