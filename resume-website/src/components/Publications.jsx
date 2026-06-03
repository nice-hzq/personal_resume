import { FileText, FileCode, Quote } from "lucide-react";
import { profile } from "../data/profile";

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Publications</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {profile.publications.map((pub, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-sm border border-border p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="hidden sm:flex w-8 h-8 rounded-full bg-surface-alt text-accent text-sm font-semibold items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted mb-1">{pub.authors}</p>
                  <p className="text-sm text-accent font-medium">
                    {pub.venue}, {pub.year}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-surface-alt text-muted rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      <FileText size={14} /> PDF
                    </a>
                    <a
                      href={pub.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-surface-alt text-muted rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      <FileCode size={14} /> Code
                    </a>
                    <a
                      href={pub.links.bibtex}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-surface-alt text-muted rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      <Quote size={14} /> BibTeX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
