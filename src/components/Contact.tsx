import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-highlight"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-space-dark/50 p-8 rounded-lg border border-accent-primary/20"
        >
          <form className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                className="bg-space-dark/50 border-accent-primary/20"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-space-dark/50 border-accent-primary/20"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="bg-space-dark/50 border-accent-primary/20 min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-highlight transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};