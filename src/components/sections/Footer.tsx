export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-4">
        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Maryam Akintayo. All rights reserved.
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="#services"
            className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}