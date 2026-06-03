import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research & Engineering Experience
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {profile.experience.map((exp, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl shadow-sm border border-border p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="hidden sm:block absolute -left-3 top-8 w-3 h-3 bg-accent rounded-full ring-4 ring-surface-alt" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <Briefcase size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-medium mt-1">{exp.organization}</p>
                </div>
              </div>

              {/* English details */}
              <ul className="space-y-1.5 mb-4 text-sm text-muted">
                {exp.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0 text-xs">•</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Chinese details */}
              <details>
                <summary className="text-xs font-medium text-muted-light cursor-pointer hover:text-accent transition-colors">
                  中文说明
                </summary>
                <ul className="mt-2 space-y-1 text-xs text-muted-light pl-2 border-l-2 border-border">
                  {exp.detailsZh.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
