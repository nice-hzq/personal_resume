import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border p-8 sm:p-10">
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
            {profile.about.en}
          </p>
          <div className="border-t border-border pt-6 mb-6">
            <p className="text-sm sm:text-base text-muted-light leading-relaxed">
              {profile.about.zh}
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {profile.about.highlights.map((h) => (
              <span
                key={h}
                className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
