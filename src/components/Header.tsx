import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, Github, Linkedin } from "lucide-react";

export const Header = () => {
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
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-accent-highlight bg-clip-text text-transparent"
        >
          John Doe
        </motion.div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
          </a>
          <Button variant="ghost" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
};