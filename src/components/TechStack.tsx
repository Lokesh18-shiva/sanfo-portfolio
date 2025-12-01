import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const categories = [
    {
      title: "Frontend",
      techs: ["React", "Next.js", "HTML/CSS", "Tailwind", "Bootstrap", "React Native", "Flutter"],
      color: "primary",
    },
    {
      title: "Backend",
      techs: ["Node.js", "Express.js", "PHP", "Python"],
      color: "accent",
    },
    {
      title: "Database",
      techs: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
      color: "primary",
    },
    {
      title: "Tools & Platforms",
      techs: ["Firebase", "AWS", "Google Cloud", "Figma", "Canva", "Oracle Cloud"],
      color: "accent",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with cutting-edge technologies to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-smooth h-full">
                <h3 className="font-display text-xl font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                          : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
