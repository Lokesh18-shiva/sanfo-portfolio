import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sections = [
    {
      icon: Award,
      title: "About Us",
      description: "Sanfo Solutions is a creative and technology-driven agency specializing in digital marketing, web & mobile app development, and brand growth solutions. We help businesses increase reach, generate leads, and build powerful digital identities through modern strategies and scalable technology.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver simple, smart, and scalable digital solutions that help businesses grow faster.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become a trusted digital transformation partner for startups, SMEs, and enterprises globally.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technology + Marketing = Growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-8 h-full border border-border hover:border-primary/50 transition-smooth hover:shadow-glow">
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <section.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
