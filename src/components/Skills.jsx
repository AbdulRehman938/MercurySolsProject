import { motion } from "framer-motion";

const skills = [
  {
    name: "Frontend Architecture",
    level: "Senior",
    desc: "Building scalable, high-performance UI systems with React and Next.js.",
  },
  {
    name: "Three.js / WebGL",
    level: "Expert",
    desc: "Creating immersive 3D environments and procedural visual systems.",
  },
  {
    name: "Performance Optimization",
    level: "Expert",
    desc: "Ensuring 60FPS experiences through optimized assets and rendering pipelines.",
  },
  {
    name: "Creative Engineering",
    level: "Professional",
    desc: "Bridging the gap between avant-garde design and technical feasibility.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-24 bg-mercury-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              CORE <br />
              <span className="text-gradient">CAPABILITIES.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-mercury-muted text-lg md:text-xl max-w-md leading-relaxed font-light"
          >
            A multidisciplinary approach to modern web development, focusing on
            the intersection of design, motion, and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-mercury-dark p-12 hover:bg-white/[0.02] transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-mercury-accent font-bold">
                  0{i + 1} // {skill.level}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mercury-accent transition-colors duration-500">
                  <div className="w-1 h-1 bg-white group-hover:bg-mercury-accent transition-colors" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">
                {skill.name}
              </h3>
              <p className="text-mercury-muted text-sm leading-relaxed max-w-sm">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
