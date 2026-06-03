import { Brain, Cpu, Activity, Smartphone } from "lucide-react";
import { profile } from "../data/profile";

const icons = [Brain, Cpu, Activity, Smartphone];

export default function TargetRoles() {
  return (
    <section id="target-roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Target Roles
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Positions I am targeting based on my skills and project experience
          </p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.targetRoles.map((role, i) => {
            const Icon = icons[i];
            return (
              <div
                key={role.title}
                className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md hover:border-accent/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon size={24} className="text-accent" />}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{role.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
