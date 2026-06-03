import { GraduationCap, BookOpen } from "lucide-react";
import { profile } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {profile.education.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl shadow-sm border border-border p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="hidden sm:block absolute -left-3 top-8 w-3 h-3 bg-accent rounded-full ring-4 ring-surface-alt" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-accent mb-1">
                    <GraduationCap size={18} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{edu.school}</h3>
                  <p className="text-accent font-medium mt-1">{edu.degree}</p>
                </div>
              </div>

              <p className="text-sm text-muted mb-4">
                <span className="font-medium">Research Area:</span> {edu.researchArea}
              </p>

              {edu.courses && edu.courses.length > 0 && (
                <div className="flex items-start gap-2">
                  <BookOpen size={16} className="text-muted-light mt-0.5 shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-surface-alt text-muted rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
