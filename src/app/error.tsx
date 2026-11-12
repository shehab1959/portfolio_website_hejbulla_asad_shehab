"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <h1 className="text-2xl font-semibold text-fg">Something went wrong</h1>
      <p className="max-w-md text-muted">
        The page could not be displayed. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
