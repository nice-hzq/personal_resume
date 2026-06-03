import { useState } from "react";
import { Mail, GraduationCap, FileText, MapPin, Copy, Check } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile } from "../data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const input = document.createElement("input");
      input.value = profile.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-alt">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Contact</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border p-8 sm:p-10 text-center">
          {/* Job-seeking message */}
          <p className="text-muted mb-6 leading-relaxed">
            I am currently open to internship and job opportunities related to AI
            algorithms, wearable sensing, human activity recognition, and edge AI
            deployment.
          </p>
          <p className="text-sm text-muted-light mb-8 leading-relaxed">
            目前我正在关注人工智能算法、可穿戴传感器算法、人体行为识别和边缘智能部署相关的实习与就业机会。
          </p>

          {/* Email */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail size={20} className="text-accent" />
            <a
              href={`mailto:${profile.email}`}
              className="text-base font-medium text-accent hover:underline"
            >
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="p-1.5 text-muted-light hover:text-accent transition-colors cursor-pointer"
              aria-label="Copy email"
            >
              {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
            {copied && <span className="text-xs text-green-500 font-medium">Copied!</span>}
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin size={16} className="text-muted-light" />
            <span className="text-sm text-muted">{profile.location}</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-alt text-muted rounded-lg hover:bg-accent/10 hover:text-accent transition-colors text-sm font-medium"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-alt text-muted rounded-lg hover:bg-accent/10 hover:text-accent transition-colors text-sm font-medium"
            >
              <GraduationCap size={16} /> Google Scholar
            </a>
            <a
              href={profile.links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-alt text-muted rounded-lg hover:bg-accent/10 hover:text-accent transition-colors text-sm font-medium"
            >
              <FileText size={16} /> ORCID
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
