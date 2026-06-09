import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, TrendingUp, Sparkles, Layers } from "lucide-react";

export default function ProjectsSection() {
  const PROJECTS = [
    {
      id: "project-01",
      title: "Google Business Profile Setup – TrendyGadget.ng",
      category: "Local SEO & Visibility",
      description: "Established and optimized a Google Business Profile for a computer and gadget storefront to scale local discoverability, trust, and structural visibility on Google Search and Maps.",
      skills: ["Google Business Profile", "Local SEO", "Optimization"],
      icon: Target,
      metric: "Live on Search & Maps",
      accent: "from-violet-500/10 to-purple-500/10",
      accentText: "text-violet-600 dark:text-violet-400",
    },
    {
      id: "project-02",
      title: "Social Media Content Support – MAMA Initiative NG",
      category: "Content Strategy & Impact Storytelling",
      description: "Supported multi-channel publishing and drafted narrative-driven copy to amplify the public visibility of community empowerment and vocational training initiatives.",
      skills: ["Content Writing", "Social Media", "Audience Engagement"],
      icon: TrendingUp,
      metric: "+174% Reach | +600% Followers",
      accent: "from-emerald-500/10 to-teal-500/10",
      accentText: "text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "project-03",
      title: "Website Audit & Digital Presence – GTEX Properties",
      category: "Market Research & Data Analysis",
      description: "Executed an analytics-focused digital presence audit evaluating competitive traffic funnels, user bounce metrics, and organic channel health for a real estate entity.",
      skills: ["Market Research", "SimilarWeb", "Data Interpretation"],
      icon: Layers,
      metric: "Competitive Traffic Audit",
      accent: "from-sky-500/10 to-blue-500/10",
      accentText: "text-sky-600 dark:text-sky-400",
    },
    {
      id: "project-04",
      title: "Email Marketing Campaign – Marvelam Apparel",
      category: "Email Marketing & Copywriting",
      description: "Designed, drafted, and engineered a relational welcome automation flow in Mailchimp optimized to introduce a premium fashion brand using unconventional conversational copy.",
      skills: ["Email Copywriting", "Mailchimp", "Campaign Design"],
      icon: Sparkles,
      metric: "Production-Ready Automation",
      accent: "from-amber-500/10 to-orange-500/10",
      accentText: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Asymmetric Elegant Header Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-24"
        >
          <div className="max-w-xl">
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-3 block"
            >
              Selected Work
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
            >
              Case studies that reveal the process
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-sm font-normal leading-relaxed"
          >
            A detailed look at data-driven marketing experiments, local footprint scaling, and creative positioning.
          </motion.p>
        </motion.div>

        {/* 2-Column Balanced Sleek Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              custom={i}
              className="group relative p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-slate-950/40 border border-slate-100 dark:border-white/[0.04] transition-all duration-500 [hover:shadow-[0_32px_64px_-20px_rgba(0,0,0,0.04)]] dark:[hover:shadow-[0_32px_64px_-20px_rgba(0,0,0,0.25)]] flex flex-col justify-between"
            >
              {/* Context Spotlight Mask */}
              <div
                className={`absolute -inset-px rounded-[2rem] bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none [mask-image:radial-gradient(ellipse_at_top_left,white_10%,transparent_50%)] dark:[mask-image:radial-gradient(ellipse_at_top_left,white_20%,transparent_60%)]`}
              />

              <div>
                <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
                  {/* Category & Badge Row */}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                    {project.category}
                  </span>

                  {/* Elegant Round Arrow Trigger */}
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-slate-900 dark:group-hover:bg-white transition-all duration-500 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-500" />
                  </div>
                </div>

                {/* Main Content Space */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100 tracking-tight leading-snug mb-3 transition-colors duration-300 group-hover:text-slate-950 dark:group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400 font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata Footer Anchor */}
              <div className="relative z-10 pt-6 border-t border-slate-100/70 dark:border-white/[0.04] flex flex-wrap items-center justify-between gap-4 mt-auto">
                {/* Embedded Mini Skills Array */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Dynamic Metrics Callout */}
                <span className={`text-xs font-semibold tracking-wide ${project.accentText}`}>
                  {project.metric}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}