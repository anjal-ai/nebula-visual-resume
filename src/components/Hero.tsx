import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center text-center px-4 relative"
    >
      <div className="max-w-3xl relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-accent-primary to-accent-highlight"
        >
          John Doe
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent"
        >
          Machine Learning Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-gray-400 mb-12"
        >
          Building intelligent solutions through data-driven innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent-primary to-accent-highlight hover:from-accent-highlight hover:to-accent-primary transition-all duration-300 shadow-lg hover:shadow-accent-primary/25"
          >
            View My Work
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};