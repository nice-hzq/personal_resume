import { Mail, GraduationCap, FileText, ArrowDown, Briefcase, Download } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile } from "../data/profile";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-surface"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <img
            src={avatar}
            alt={profile.name}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg ring-4 ring-primary/20"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-3">
          {profile.name}
        </h1>
        <p className="text-xl sm:text-2xl text-primary font-semibold mb-2">
          {profile.englishName}
        </p>

        {/* Role title */}
        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6">
          <p className="text-sm sm:text-base text-primary font-medium">
            {profile.hero.title}
          </p>
        </div>

        {/* Intro */}
        <p className="text-base sm:text-lg text-muted mb-3 max-w-2xl mx-auto leading-relaxed">
          {profile.hero.subtitle}
        </p>
        <p className="text-sm sm:text-base text-muted-light mb-8 max-w-2xl mx-auto leading-relaxed">
          {profile.hero.subtitleZh}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
          >
            <Briefcase size={18} /> View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer"
            className="p-2 text-muted hover:text-accent transition-colors" aria-label="GitHub">
            <GithubIcon size={22} />
          </a>
          <a href={`mailto:${profile.email}`}
            className="p-2 text-muted hover:text-accent transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
          <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer"
            className="p-2 text-muted hover:text-accent transition-colors" aria-label="Google Scholar">
            <GraduationCap size={22} />
          </a>
          <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer"
            className="p-2 text-muted hover:text-accent transition-colors" aria-label="ORCID">
            <FileText size={22} />
          </a>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="animate-bounce text-muted-light hover:text-accent transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
