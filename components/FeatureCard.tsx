type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-white/85 p-6 shadow-lg shadow-indigo-950/10 ring-1 ring-white/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-xl">
      {/* STUDENT CUSTOMIZATION AREA — TRY CHANGING THESE COLORS on the article className */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-2xl shadow-inner"
        aria-hidden
      >
        {emoji}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}
