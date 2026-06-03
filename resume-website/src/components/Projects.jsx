import { ExternalLink, FolderGit2 } from "lucide-react";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Key projects demonstrating my technical skills and problem-solving abilities
          </p>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Project header */}
              <div className="h-36 bg-linear-to-br from-primary/80 to-accent/80 flex items-center justify-center relative">
                <FolderGit2 size={40} className="text-white/50" />
                <span className="absolute top-4 left-4 px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-medium text-white">
                  {project.type}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-medium bg-surface-alt text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Work items (English) */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-muted-light uppercase tracking-wide mb-2">
                    My Contributions
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted">
                    {project.work.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1 shrink-0 text-xs">•</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work items (Chinese) */}
                <details className="mb-4">
                  <summary className="text-xs font-medium text-muted-light cursor-pointer hover:text-accent transition-colors">
                    中文说明
                  </summary>
                  <ul className="mt-2 space-y-1 text-xs text-muted-light pl-2 border-l-2 border-border">
                    {project.workZh.map((w, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </details>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary transition-colors mt-auto"
                >
                  <ExternalLink size={14} /> View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
