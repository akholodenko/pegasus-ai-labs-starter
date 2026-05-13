export function StarterSection() {
  return (
    <section
      id="customize"
      className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      aria-labelledby="starter-heading"
    >
      {/*
        STUDENT CUSTOMIZATION AREA
        ADD YOUR OWN SECTION HERE — duplicate this block or add new JSX below.
        Ask your AI assistant: "Add a short About Me paragraph inside StarterSection."
      */}
      <div className="rounded-3xl border border-dashed border-indigo-300/80 bg-white/60 p-8 shadow-inner shadow-indigo-950/5 backdrop-blur-sm sm:p-10">
        <h2
          id="starter-heading"
          className="text-2xl font-bold tracking-tight text-indigo-950 sm:text-3xl"
        >
          Student customization area
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
          {/* CHANGE THIS TEXT — describe what you want your companion to do someday */}
          This box is yours. Change the heading, add a list of goals, or drop in
          a fun fact. Your instructor (or an AI helper) can guide you one small
          edit at a time.
        </p>
        <ul className="mt-6 space-y-2 text-left text-slate-700">
          <li className="flex gap-2">
            <span className="font-semibold text-indigo-600">1.</span>
            Try renaming the app in the hero (open <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">Hero.tsx</code>).
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-indigo-600">2.</span>
            Pick new feature card titles in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">page.tsx</code>.
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-indigo-600">3.</span>
            Adjust colors in the page wrapper — look for gradient classes on the outer <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">div</code>.
          </li>
        </ul>
      </div>
    </section>
  );
}
