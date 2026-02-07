import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Connect = () => {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 md:px-24 bg-mercury-dark overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-mercury-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 mb-12"
        >
          <div className="h-2 w-2 bg-mercury-accent rounded-full" />
          <span className="text-mercury-accent font-bold tracking-[0.5em] uppercase text-[10px]">
            Collaboration
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-16"
        >
          LET'S BUILD <br />
          <span className="text-gradient">THE NEXT.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          <a
            href="mailto:hello@mercurysols.com"
            className="text-2xl md:text-5xl font-light text-white hover:text-mercury-accent transition-colors duration-500 underline decoration-white/10 underline-offset-[20px] hover:decoration-mercury-accent"
          >
            hello@mercurysols.com
          </a>

          <div className="flex gap-8 md:gap-16 items-center">
            {[
              { icon: <Github size={24} />, label: "GitHub", href: "#" },
              { icon: <Linkedin size={24} />, label: "LinkedIn", href: "#" },
              {
                icon: <Mail size={24} />,
                label: "Email",
                href: "mailto:hello@mercurysols.com",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="flex items-center gap-3 text-mercury-muted hover:text-white transition-colors duration-300 group"
              >
                {social.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">
                  {social.label}
                </span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Technical ID */}
      <div className="absolute bottom-12 left-12 opacity-20 hidden lg:block">
        <span className="text-[10px] font-mono text-mercury-muted tracking-[1em] uppercase">
          Mercury_Sols_Portfolio_Final_2026
        </span>
      </div>
    </section>
  );
};

export default Connect;
