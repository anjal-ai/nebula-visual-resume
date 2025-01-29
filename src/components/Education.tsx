import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Machine Learning",
      school: "Stanford University",
      year: "2020-2022",
      description: "Specialized in Deep Learning and Computer Vision"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "MIT",
      year: "2016-2020",
      description: "Focus on Artificial Intelligence and Mathematics"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-violet-400 to-accent-highlight bg-clip-text text-transparent text-center"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-gradient-to-br from-space-dark/50 to-space-light/50 backdrop-blur-sm border border-white/10 hover:border-accent-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
              <p className="text-violet-300 mb-2">{item.school}</p>
              <p className="text-gray-400 mb-2">{item.year}</p>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};