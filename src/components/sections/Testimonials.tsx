import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.12 } },
  };



  const TESTIMONIALS = [
    {
      quote:
        "Maryam transformed our online presence. We went from invisible to the first result on Google Maps in our area — and the phone hasn't stopped ringing.",
      author: "Adebayo Okonkwo",
      role: "Owner, Lagos Bistro",
    },
    {
      quote:
        "Her email sequences are pure magic. Open rates nearly doubled and our revenue from email alone grew by 45% in the first quarter.",
      author: "Sade Akindele",
      role: "CMO, FinEdge",
    },
    {
      quote:
        "Working with Maryam is like having a marketing department in one person. Strategic, creative, and always data-driven.",
      author: "Chidera Nwosu",
      role: "Founder, Glow Naturals",
    },
  ];


  return (
    <section id="testimonials" className="relative py-28 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400 mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Kind words from clients
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.author}
              variants={fadeUp}
              custom={i}
              className="relative p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.06] flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                <p className="font-semibold text-sm text-slate-900 dark:text-white">
                  {t.author}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.role}
                </p>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
