import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* STUDENT CUSTOMIZATION AREA — CHANGE THIS TEXT (app name / lab name) */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-indigo-950 sm:text-xl"
        >
          Pegasus AI Labs
        </Link>

        <nav
          className="flex items-center gap-4 text-sm font-medium text-slate-600 sm:gap-6 sm:text-base"
          aria-label="Primary"
        >
          {/* TRY CHANGING THESE COLORS: replace text-indigo-700 with another Tailwind text color */}
          <Link href="/" className="transition hover:text-indigo-700">
            Home
          </Link>
          <span className="hidden text-slate-400 sm:inline" aria-hidden>
            |
          </span>
          <span className="hidden text-slate-500 sm:inline">
            AI App Builder Foundations
          </span>
        </nav>
      </div>
    </header>
  );
}
