import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Download,
  Cpu,
  Zap,
  Layout,
  ArrowUpRight,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly reduced stagger for smoother flow
        delayChildren: 0.3, // Slightly reduced delay
        duration: 1.8, // Increased duration for slower, more nuanced entry
        ease: [0.16, 1, 0.3, 1], // Custom ease for a smooth, "velvet" feel
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.2, // Increased duration for a slower, smoother exit
        ease: [0.7, 0, 0.8, 0.2], // Custom ease for a "velvet smooth" slide-out
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-none overflow-hidden">
        {/* Backdrop - Now with deeper blur for floating focus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-mercury-dark/60 backdrop-blur-xl pointer-events-auto"
        />

        {/* Floating Content Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-6xl max-h-[90vh] bg-mercury-card/80 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl pointer-events-auto backdrop-blur-2xl"
        >
          {/* Internal Scrollable Container */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-16">
            {/* Close Trigger - Top Right Floating */}
            <div className="absolute top-8 right-8 z-50">
              <motion.button
                variants={itemVariants}
                onClick={onClose}
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 text-white transition-all transform hover:rotate-90 duration-500 border border-white/5"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Hero Section */}
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="space-y-4">
                <span className="text-mercury-accent font-mono text-[10px] uppercase tracking-[0.5em] block">
                  Project_Archive // 00{project.id}
                </span>
                <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter text-white uppercase italic">
                  {project.title.replace(".", "")}
                  <span className="text-gradient">.</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Information Column */}
                <div className="lg:col-span-12 space-y-12">
                  <motion.div variants={itemVariants} className="max-w-4xl">
                    <p className="text-xl md:text-2xl text-mercury-muted font-light leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="p-8 bg-white/5 border border-white/10 rounded-xl space-y-4 group hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 text-mercury-accent">
                        <Cpu size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                          Tech Stack
                        </span>
                      </div>
                      <p className="text-lg font-medium text-white italic">
                        {project.purpose ||
                          "WebGL / React / High-Fidelity Logic"}
                      </p>
                    </div>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-xl space-y-4 group hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3 text-mercury-accent">
                        <Layout size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                          Experience
                        </span>
                      </div>
                      <p className="text-lg font-medium text-white italic">
                        {project.experience || "Senior Frontend Architecture"}
                      </p>
                    </div>
                  </motion.div>

                  {/* Visual Preview */}
                  <motion.div
                    variants={itemVariants}
                    className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 relative group bg-mercury-dark"
                  >
                    <img
                      src={project.thumbnail_url || project.thumbnail}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mercury-dark/90 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="text-[8px] text-white/40 uppercase tracking-[0.4em]">
                          Asset_Node
                        </span>
                        <p className="text-xs font-bold tracking-widest text-white/80">
                          VISUAL_CORE_LOADED
                        </p>
                      </div>
                      <div className="h-[1px] flex-1 bg-white/10 mx-6 mb-2" />
                      <ArrowUpRight
                        size={20}
                        className="text-white/40 group-hover:text-mercury-accent transition-colors underline"
                      />
                    </div>
                  </motion.div>

                  {/* Action Group */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <button className="flex-1 bg-white text-mercury-dark py-6 px-10 font-black uppercase text-xs tracking-[0.4em] flex justify-between items-center group hover:bg-mercury-accent hover:text-white transition-all rounded-lg">
                      Explore Live <ArrowUpRight size={16} />
                    </button>
                    <a
                      href={project.zip_file_url}
                      download
                      className="flex-1 border border-white/10 text-white py-6 px-10 font-black uppercase text-xs tracking-[0.4em] flex justify-between items-center hover:bg-white/5 transition-all rounded-lg hover:border-white/30"
                    >
                      Source Access <Download size={16} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Scrolling Indicator Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center opacity-20 text-[8px] font-mono tracking-[0.5em] uppercase"
            >
              <span>SYSTEM_INTERFACE_V4</span>
              <span>CONNECTION_ENCRYPTED</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
