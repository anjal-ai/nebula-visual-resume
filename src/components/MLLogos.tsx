import { motion } from "framer-motion";
import { SiPython, SiScikitlearn, SiTensorflow, SiPytorch } from "react-icons/si";

export const MLLogos = () => {
  const logos = [
    { Icon: SiPython, color: "#3776AB", name: "Python", delay: 0 },
    { Icon: SiScikitlearn, color: "#F7931E", name: "Scikit-learn", delay: 0.2 },
    { Icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow", delay: 0.4 },
    { Icon: SiPytorch, color: "#EE4C2C", name: "PyTorch", delay: 0.6 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map(({ Icon, color, name, delay }, index) => (
        <motion.div
          key={name}
          className="absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            x: `${Math.sin((index + 1) * 1.5) * 30}%`,
            y: `${Math.cos((index + 1) * 1.5) * 25}%`
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            className="relative group"
          >
            <Icon 
              size={100} 
              color={color}
              className="transform transition-all duration-300"
            />
            <motion.div
              className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};