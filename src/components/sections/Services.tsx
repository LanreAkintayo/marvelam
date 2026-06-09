import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  BarChart3,
  Mail,
  Search,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesSection() {
  const SERVICES = [
    {
      title: "Local SEO",
      description:
        "Boost your visibility in local search results with optimised Google Business profiles, local citations, and geo-targeted content strategies.",
      icon: Search,
      accentBg: "bg-violet-500/10 dark:bg-violet-500/15",
      accentText: "text-violet-600 dark:text-violet-400",
      glowColor: "group-hover:shadow-violet-500/10",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build engaged communities and drive conversions with data-backed content calendars, paid social campaigns, and influencer partnerships.",
      icon: TrendingUp,
      accentBg: "bg-amber-500/10 dark:bg-amber-500/15",
      accentText: "text-amber-600 dark:text-amber-400",
      glowColor: "group-hover:shadow-amber-500/10",
    },
    {
      title: "Email Marketing",
      description:
        "Nurture leads and maximise retention with personalised drip campaigns, A/B-tested copy, and automated lifecycle flows.",
      icon: Mail,
      accentBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
      accentText: "text-emerald-600 dark:text-emerald-400",
      glowColor: "group-hover:shadow-emerald-500/10",
    },
    {
      title: "Market Research",
      description:
        "Make confident decisions with competitive analysis, audience segmentation, trend forecasting, and actionable insight reports.",
      icon: BarChart3,
      accentBg: "bg-sky-500/10 dark:bg-sky-500/15",
      accentText: "text-sky-600 dark:text-sky-400",
      glowColor: "group-hover:shadow-sky-500/10",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Background spot glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Header section with an asymmetric layout split */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24"
        >
          <div className="max-w-xl">
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-3 block"
            >
              Core Expertise
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Services that move the needle
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-sm font-normal leading-relaxed"
          >
            Tailored growth strategies engineered to scale visibility, optimize
            conversions, and retain high-value users.
          </motion.p>
        </motion.div>

        {/* Clean, high-contrast service cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-950/40 border border-slate-100 dark:border-white/[0.04] transition-all duration-500 [hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.05)]] dark:[hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.3)]]"
            >
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-slate-200 dark:group-hover:border-white/[0.08] transition-colors duration-500 pointer-events-none" />

              {/* Spotlight gradient layer */}
              <div
                className={`absolute -inset-px rounded-[2rem] bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,white_10%,transparent_50%)] dark:[mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_60%)] ${
                  service.title.includes("SEO")
                    ? "from-violet-500/10"
                    : service.title.includes("Social")
                      ? "from-amber-500/10"
                      : service.title.includes("Email")
                        ? "from-emerald-500/10"
                        : "from-sky-500/10"
                }`}
              />

              <div className="relative z-10 flex items-start justify-between gap-4 mb-8">
                {/* Minimalist icon layout */}
                <div
                  className={`w-10 h-10 rounded-xl ${service.accentBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                >
                  <service.icon className={`w-4 h-4 ${service.accentText}`} />
                </div>

                {/* Elegant subtle trigger */}
                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-slate-900 dark:group-hover:bg-white transition-all duration-500">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-500" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 font-normal tracking-wide">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
