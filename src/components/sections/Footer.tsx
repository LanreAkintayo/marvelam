export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Maryam Akintayo. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
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