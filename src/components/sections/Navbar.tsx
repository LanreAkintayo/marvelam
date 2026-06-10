"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Track scroll position ─────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ────────────────── DESKTOP / TABLET NAV ────────────────── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/[0.06] shadow-sm shadow-slate-900/[0.03]"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* ── Logo / Brand ──────────────────────────────────── */}
          <a
            href="#hero"
            className="group flex items-center gap-2 select-none"
          >
            <span
              className={`font-bold tracking-tight transition-all duration-300 text-slate-900 dark:text-white ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              Maryam
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-yellow-400">
                .
              </span>
            </span>
          </a>

          {/* ── Desktop links ─────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 rounded-lg hover:bg-slate-100/60 dark:hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <a
            href="mailto:akintayomaryamadeola@gmail.com"
            className="hidden md:inline-flex items-center gap-2 h-10 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.03] hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.97]"
          >
            Say Hello
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-xl bg-slate-100/80 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-slate-200/80 dark:hover:bg-white/[0.1] active:scale-95"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* ────────────────── MOBILE MENU OVERLAY ─────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[min(85vw,360px)] bg-white dark:bg-slate-950 border-l border-slate-200/60 dark:border-white/[0.06] shadow-2xl md:hidden flex flex-col"
            >
              {/* Panel header spacer (so content doesn't hide behind the fixed nav) */}
              <div className="h-20 shrink-0" />

              {/* Links */}
              <nav className="flex-1 px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                    className="py-3.5 px-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04] rounded-xl transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 pb-8 pt-4 border-t border-slate-100 dark:border-white/[0.04]">
                <a
                  href="mailto:akintayomaryamadeola@gmail.com"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 active:scale-[0.97]"
                >
                  Say Hello
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
                  akintayomaryamadeola@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
