import { Download, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Resume() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card rounded-xl shadow-sm border border-border p-10 sm:p-12">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Download size={28} className="text-accent" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Want to know more?
          </h2>
          <p className="text-muted mb-3 leading-relaxed">
            Download my resume or contact me directly for a detailed overview of my
            background, skills, and project experience.
          </p>
          <p className="text-sm text-muted-light mb-8 leading-relaxed">
            如果您想进一步了解我的项目经历、技能背景和求职意向，欢迎下载我的简历或直接联系我。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </button>
          </div>

          <p className="text-xs text-muted-light mt-6">
            {/* TODO: 将 public/resume.pdf 替换为你的真实简历文件 */}
            PDF resume available for download. Replace <code className="px-1 py-0.5 bg-surface-alt rounded text-xs">public/resume.pdf</code> with your actual resume.
          </p>
        </div>
      </div>
    </section>
  );
}
