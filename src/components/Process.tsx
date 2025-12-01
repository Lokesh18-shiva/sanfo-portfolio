import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Palette, Code, TestTube, Rocket, LineChart } from "lucide-react";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: Search,
      title: "Requirement Analysis",
      description: "Understanding your goals and challenges",
    },
    {
      icon: Lightbulb,
      title: "Planning & Wireframing",
      description: "Creating a strategic roadmap",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful user experiences",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building your solution with clean code",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description: "Ensuring everything works perfectly",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Launching your project to the world",
    },
    {
      icon: LineChart,
      title: "Support & Optimization",
      description: "Continuous improvement and growth",
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
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that delivers results every time
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-smooth hover:shadow-glow group inline-block w-full">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth shrink-0">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number - Center */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary items-center justify-center font-display font-bold text-primary z-10">
                  {index + 1}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
