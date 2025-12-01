import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Shield, HeartHandshake, Gauge, Headset } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    {
      icon: Sparkles,
      title: "Clean & Modern Designs",
      description: "Beautiful, intuitive interfaces that users love",
    },
    {
      icon: HeartHandshake,
      title: "100% Client Satisfaction",
      description: "We don't stop until you're thrilled with the results",
    },
    {
      icon: Zap,
      title: "Quick Delivery",
      description: "Fast turnaround without compromising quality",
    },
    {
      icon: Shield,
      title: "Scalable & Secure",
      description: "Built to grow with your business safely",
    },
    {
      icon: Gauge,
      title: "Data-Driven Strategies",
      description: "Marketing decisions backed by real analytics",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
      description: "We're here for you every step of the way",
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
            Why Choose Sanfo Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, technology, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-smooth h-full hover:shadow-glow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
