import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold text-fg">Page not found</h1>
      <p className="max-w-md text-muted">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
