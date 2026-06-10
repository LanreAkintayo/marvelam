import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6"
          >
            Let&rsquo;s grow your business
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto"
          >
            Ready to turn your marketing into a measurable growth engine?
            I&rsquo;d love to hear about your goals.
          </motion.p>
          <motion.a
            variants={fadeUp}
            custom={2}
            href="mailto:akintayomaryamadeola@gmail.com"
            className="group inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-amber-500/25 active:scale-[0.97]"
          >
            Say Hello
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          {/* <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-5 text-sm text-slate-400 dark:text-slate-500 px-4"
          >
            or email directly at{" "}
            <a
              href="mailto:akintayomaryamadeola@gmail.com"
              className="text-amber-600 dark:text-amber-400 hover:underline underline-offset-4 transition-colors break-all sm:break-normal"
            >
              akintayomaryamadeola@gmail.com
            </a>
          </motion.p> */}
        </motion.div>
      </div>
    </section>
  );
}