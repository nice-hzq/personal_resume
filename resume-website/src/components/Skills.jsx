import { profile, skillLevelStyles } from "../data/profile";
import { Code2, Brain, Activity, BarChart3, Wrench, Cpu } from "lucide-react";

const categoryIcons = {
  programming: Code2,
  deepLearning: Brain,
  sensorData: Activity,
  mlEvaluation: BarChart3,
  engineering: Wrench,
  deployment: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Core Skills</h2>
          <p className="text-muted max-w-xl mx-auto">
            Technologies and tools I use in my research and project work
          </p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(profile.skills).map(([key, category]) => {
            const Icon = categoryIcons[key];
            return (
              <div
                key={key}
                className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {Icon && <Icon size={20} className="text-accent" />}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md ${skillLevelStyles[skill.level]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
