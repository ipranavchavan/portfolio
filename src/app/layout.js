import './globals.css';

export const metadata = {
  title: 'Pranav Chavan | Portfolio',
  description: 'Modern data analyst and developer portfolio built with Next.js, Tailwind CSS, Framer Motion, and Lucide icons.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">{children}</body>
    </html>
  );
}
