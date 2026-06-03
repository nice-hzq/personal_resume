import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-primary-dark text-white/70">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {profile.englishName}. All rights reserved.
        </p>
        <p className="text-xs text-white/50">Built with React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  );
}
