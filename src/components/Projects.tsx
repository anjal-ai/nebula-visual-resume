import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Neural Network Visualization",
    description: "Interactive deep learning model visualization tool",
    tech: ["TensorFlow", "React", "D3.js"],
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time prediction system for business metrics",
    tech: ["scikit-learn", "FastAPI", "PostgreSQL"],
  },
  {
    title: "NLP Text Classifier",
    description: "Multi-label text classification system",
    tech: ["PyTorch", "Transformers", "Flask"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-highlight"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-space-dark/50 border-accent-primary/20 hover:border-accent-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-accent-primary/20 text-accent-highlight rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};