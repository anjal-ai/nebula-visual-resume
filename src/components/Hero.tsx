import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiPython, SiScikitlearn, SiTensorflow, SiPytorch } from "react-icons/si";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center text-center px-4 relative pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-space-dark via-[#1a1040] to-space-light opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 text-left"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-accent-primary to-accent-highlight bg-clip-text text-transparent"
          >
            John Doe
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl mb-8 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent font-semibold"
          >
            Machine Learning Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          >
            Transforming complex data into intelligent solutions through innovative machine learning approaches. Specialized in deep learning, computer vision, and natural language processing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent-primary to-accent-highlight hover:from-accent-highlight hover:to-accent-primary transition-all duration-300 shadow-lg hover:shadow-accent-primary/25"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-primary/50 hover:bg-accent-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative">
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ['rgba(139,92,246,0.5)', 'rgba(167,139,250,0.5)', 'rgba(139,92,246,0.5)']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-accent-primary/50"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                borderColor: ['rgba(167,139,250,0.3)', 'rgba(139,92,246,0.3)', 'rgba(167,139,250,0.3)']
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-accent-highlight/30"
            />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-space-dark/90 to-space-light/90 backdrop-blur-sm border border-white/10 overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8"
          >
            <SiPython className="w-12 h-12 text-[#3776AB]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 -right-8"
          >
            <SiScikitlearn className="w-12 h-12 text-[#F7931E]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-8 left-1/2"
          >
            <SiTensorflow className="w-12 h-12 text-[#FF6F00]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};