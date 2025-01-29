import { motion } from "framer-motion";

const skills = [
  { name: "Machine Learning", level: 90 },
  { name: "Deep Learning", level: 85 },
  { name: "Python", level: 95 },
  { name: "TensorFlow", level: 88 },
  { name: "PyTorch", level: 82 },
  { name: "Data Analysis", level: 92 },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-highlight"
        >
          Skills & Expertise
        </motion.h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-accent-highlight">{skill.level}%</span>
              </div>
              <div className="h-2 bg-space-dark/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-highlight"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};