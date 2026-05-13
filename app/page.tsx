import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { StarterSection } from "@/components/StarterSection";

export default function HomePage() {
  /*
    STUDENT CUSTOMIZATION AREA — feature cards
    CHANGE THIS TEXT: edit title / description strings below.
    ADD YOUR OWN SECTION HERE: copy a FeatureCard block or add a new row.
  */
  const features = [
    {
      emoji: "🧭",
      title: "Clear structure",
      description:
        "Folders for the page, layout, styles, and components — easy to find what to edit next.",
    },
    {
      emoji: "🎨",
      title: "Looks good on day one",
      description:
        "Responsive layout, soft shadows, and gradients so you can focus on ideas, not fixing broken CSS.",
    },
    {
      emoji: "🤖",
      title: "Ready for AI help",
      description:
        "Customize this project with AI: ask for copy tweaks, new sections, or color themes in plain language.",
    },
    {
      emoji: "📚",
      title: "Room to grow",
      description:
        "Every lesson adds something new. Later you will connect real data and smarts — for now, it is a friendly shell.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-fuchsia-100 to-cyan-200">
      {/* TRY CHANGING THESE COLORS: bg-gradient-to-br from-* via-* to-* on this div */}
      <Hero />

      <section
        className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8"
        aria-labelledby="features-heading"
      >
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-2xl font-bold text-slate-900 sm:text-3xl"
          >
            What you get in this starter
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 sm:text-lg">
            Four building blocks you will recognize in every lesson. Swap the
            words, keep the layout, and watch your Student Companion take shape.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              emoji={feature.emoji}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <StarterSection />

      <footer className="border-t border-white/40 bg-white/50 py-8 text-center text-sm text-slate-600 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* CHANGE THIS TEXT — footer line */}
          <p className="font-medium text-slate-700">
            © {new Date().getFullYear()} Pegasus AI Labs — AI App Builder
            Foundations
          </p>
          <p className="mt-2 text-slate-500">
            Made for beginners. Keep experimenting; small changes add up fast.
          </p>
        </div>
      </footer>
    </div>
  );
}
