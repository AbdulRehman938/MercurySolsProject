import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 px-6 md:px-24 bg-mercury-dark border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-mercury-primary rounded flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-outfit font-bold text-xl tracking-tighter">
              MERCURY <span className="text-mercury-primary">SOLS</span>
            </span>
          </div>
          <p className="text-mercury-muted leading-relaxed mb-8">
            Ready to bring your next digital vision to life? Let's connect and
            build something extraordinary together.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-mercury-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-mercury-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-mercury-primary transition-all duration-300 hover:scale-110"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-mercury-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-mercury-muted text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-mercury-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-mercury-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-mercury-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-mercury-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-4 text-mercury-muted text-sm">
              <li>Frontend Development</li>
              <li>3D Web Experiences</li>
              <li>Interactive Design</li>
              <li>Custom UI Systems</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-xs text-mercury-muted uppercase tracking-widest gap-4">
        <p>
          &copy; {new Date().getFullYear()} MERCURY SOLS. ALL RIGHTS RESERVED.
        </p>
        <p>Built with Passion by Abdul Rehman</p>
      </div>
    </footer>
  );
};

export default Footer;
