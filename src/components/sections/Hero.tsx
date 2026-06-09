import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 overflow-hidden bg-slate-50 dark:bg-[#030712]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[10%] w-[55%] h-[55%] rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[60%] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-[140px]"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
      >


        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={2}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8"
        >
          Hi, I&rsquo;m{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-amber-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-amber-400">
            Maryam
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          custom={3}
          className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-12 font-normal"
        >
          Digital marketer helping small businesses get found, get followed, and
          get results — through{" "}
          <span className="text-slate-900 dark:text-slate-200 font-medium border-b-2 border-violet-500/30">SEO</span>,{" "}
          <span className="text-slate-900 dark:text-slate-200 font-medium border-b-2 border-fuchsia-500/30">social media</span>,{" "}
          <span className="text-slate-900 dark:text-slate-200 font-medium border-b-2 border-emerald-500/30">email marketing</span> &amp; research.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-base transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10 active:scale-[0.98]"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 font-semibold text-base border border-slate-200 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}