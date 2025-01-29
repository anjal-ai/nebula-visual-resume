import { motion } from "framer-motion";
import { SiPython, SiScikitlearn, SiTensorflow, SiPytorch } from "react-icons/si";

export const MLLogos = () => {
  const logos = [
    { Icon: SiPython, color: "#3776AB", name: "Python" },
    { Icon: SiScikitlearn, color: "#F7931E", name: "Scikit-learn" },
    { Icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
    { Icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map(({ Icon, color, name }, index) => (
        <motion.div
          key={name}
          className="absolute"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.15,
            scale: 1,
            x: `${Math.sin(index * 1.5) * 30}%`,
            y: `${Math.cos(index * 1.5) * 25}%`
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          <Icon 
            size={100} 
            color={color}
            className="transform hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};