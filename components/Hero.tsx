export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
      <div className="relative mx-auto max-w-3xl text-center">
        {/* STUDENT CUSTOMIZATION AREA — CHANGE THIS TEXT (main app title) */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 sm:text-base">
          Pegasus AI Labs · Lesson 1
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
          Student Companion
        </h1>

        {/* CHANGE THIS TEXT — welcome line */}
        <p className="mt-4 text-lg text-slate-600 sm:text-xl">
          Welcome! You are looking at your starter homepage. Over six lessons,
          you will turn this into your own companion app.
        </p>

        {/* CHANGE THIS TEXT — what students will build */}
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Build your first AI-powered app, customize this project with AI, and
          watch it grow — every lesson adds something new. Today you explore the
          layout, copy, and colors so the app feels like yours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-indigo-900 shadow-md ring-1 ring-indigo-100">
            Next.js + TypeScript + Tailwind
          </span>
          <span className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
            No backend yet — perfect for Lesson 1
          </span>
        </div>
      </div>
    </section>
  );
}
