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
          Archive
        </a>
        <a
          href="#about"
          className="hover:text-mercury-accent transition-colors duration-300"
        >
          Profile
        </a>
        <a
          href="#skills"
          className="hover:text-mercury-accent transition-colors duration-300"
        >
          Stack
        </a>
        <div className="h-3 w-[1px] bg-white/20" />
        <a
          href="#contact"
          className="text-white hover:text-mercury-accent transition-all duration-300 px-4 py-2 border border-white/10 hover:border-mercury-accent/50 rounded-sm"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
