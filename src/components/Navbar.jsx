import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none">
      <div className="flex items-center gap-12 pointer-events-auto">
        <a href="#hero" className="group flex items-center gap-3">
          <div className="h-2 w-2 bg-mercury-accent rounded-full animate-pulse" />
          <span className="text-xl font-black text-white tracking-[0.3em] uppercase">
            Mercury
          </span>
        </a>
      </div>

      <div className="hidden md:flex gap-10 items-center text-[9px] font-bold uppercase tracking-widest text-mercury-muted pointer-events-auto">
        <a
          href="#projects"
          className="hover:text-mercury-accent transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#about"
          className="hover:text-mercury-accent transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#profile"
          className="hover:text-mercury-accent transition-colors duration-300"
        >
          Profile
        </a>
        <div className="h-4 w-[1px] bg-white/10" />
        <a
          href="#contact"
          className="text-white hover:text-mercury-accent transition-all duration-300 px-5 py-2 border border-white/5 hover:border-mercury-accent/30 rounded-full"
        >
          Execute_Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
