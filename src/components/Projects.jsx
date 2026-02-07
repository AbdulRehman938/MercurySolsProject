import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download, ArrowRight, Loader2 } from "lucide-react";
import { useProjects } from "../hooks/useProjects";

const ProjectCard = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
      className={`group relative flex flex-col ${index % 2 === 0 ? "mt-0" : "md:mt-24"}`}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm"
        onClick={() => onSelect(project)}
      >
        <img
          src={project.thumbnail_url || project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-mercury-dark/20 group-hover:bg-transparent transition-colors duration-500" />

        {/* Project ID Tag */}
        <div className="absolute top-6 left-6 mix-blend-difference">
          <span className="text-[10px] font-mono text-white opacity-40 tracking-[0.3em]">
            ID_{String(index + 1).padStart(3, "0")}
          </span>
        </div>
      </div>

      <div className="pt-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.4em] text-mercury-accent font-bold">
            {project.purpose}
          </span>
          <div className="h-[1px] w-6 bg-white/10" />
        </div>

        <h3
          className="text-3xl md:text-5xl font-black tracking-tighter cursor-pointer hover:text-mercury-accent transition-colors"
          onClick={() => onSelect(project)}
        >
          {project.title}
        </h3>

        <button
          onClick={() => onSelect(project)}
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-mercury-muted font-bold hover:text-white transition-colors group/btn"
        >
          Explore Concept{" "}
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-2 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

const Projects = ({ onSelectProject }) => {
  const { projects, loading } = useProjects();

  const placeholders = [
    {
      id: "p1",
      title: "SYNTHESIS.",
      purpose: "E-COM CORE",
      description:
        "A high-performance online store with seamless transitions and 3D product previews.",
      thumbnail:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      experience: "Focusing on the buyer's journey through micro-interactions.",
      images: [],
    },
    {
      id: "p2",
      title: "OBSIDIAN.",
      purpose: "SAAS ENGINE",
      description:
        "Modern dashboard for data visualization and team collaboration.",
      thumbnail:
        "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800",
      experience: "Clean architecture with real-time data streaming.",
      images: [],
    },
    {
      id: "p3",
      title: "MERCURY.",
      purpose: "WEBGL LAB",
      description:
        "A creative playground exploring the limits of WebGL and Framer Motion.",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      experience: "Pushing the boundaries of user engagement.",
      images: [],
    },
  ];

  const displayedProjects = projects.length > 0 ? projects : placeholders;

  return (
    <section id="projects" className="py-40 px-6 md:px-24">
      <div className="flex flex-col mb-32 space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-20 bg-mercury-accent" />
          <span className="text-mercury-accent font-bold tracking-[0.6em] uppercase text-xs">
            Archive / 026
          </span>
        </div>
        <h2 className="text-6xl md:text-[140px] font-black leading-none tracking-tighter">
          SELECTED <br />
          <span className="text-gradient">WORKS.</span>
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center py-40">
          <div className="w-10 h-10 border-t-2 border-mercury-accent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
