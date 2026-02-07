import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-32 pb-12 px-6 md:px-24 bg-transparent border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
        <div className="max-w-md space-y-8">
          <div className="space-y-2">
            <span className="text-mercury-accent font-mono text-[10px] uppercase tracking-[0.4em] block">
              Inquiry_Uplink
            </span>
            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">
              MERCURY <span className="text-slate-500">SOLS.</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed font-light italic">
            Ready to architect your next digital frontier? Our systems are
            calibrated and ready for deployment.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-white/20 hover:text-mercury-accent transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-mercury-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-mercury-accent transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-mercury-accent transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-24">
          <div>
            <h4 className="text-mercury-accent font-bold mb-8 text-[10px] uppercase tracking-[0.4em]">
              Directory
            </h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home_Node
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Archive
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="hover:text-white transition-colors"
                >
                  Lead_Arch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-mercury-accent font-bold mb-8 text-[10px] uppercase tracking-[0.4em]">
              Core_Tech
            </h4>
            <ul className="space-y-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
              <li>WebGL / GLSL</li>
              <li>React Ecosystem</li>
              <li>Spatial Design</li>
              <li>Neural Fluidity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[8px] text-white/20 uppercase tracking-[0.5em] gap-4">
        <p>
          &copy; {new Date().getFullYear()} MERCURY SOLS // DIGITAL ARCHITECTS
        </p>
        <p>Lead Engineer: Abdul Rehman [Node_Active]</p>
      </div>
    </footer>
  );
};

export default Footer;
