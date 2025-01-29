import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, Github, Linkedin } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-space-dark/80 to-space-light/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-accent-highlight bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
        >
          John Doe
        </motion.div>
        <nav className="hidden md:flex gap-6">
          {[
            { id: 'about', label: 'About' },
            { id: 'education', label: 'Education' },
            { id: 'projects', label: 'Projects' },
            { id: 'skills', label: 'Skills' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          </a>
          <Button 
            variant="ghost" 
            className="md:hidden hover:bg-accent-primary/20"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};