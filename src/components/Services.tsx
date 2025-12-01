import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Code2, Palette, TrendingUp, Search, Share2, Mail, BarChart3, Smartphone, Globe, Database, Zap } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const digitalMarketing = [
    { icon: Share2, name: "Social Media Marketing" },
    { icon: Search, name: "SEO Optimization" },
    { icon: TrendingUp, name: "Meta/Google Ads" },
    { icon: Palette, name: "Content Creation" },
    { icon: Megaphone, name: "Branding & Design" },
    { icon: Mail, name: "Email Marketing" },
    { icon: TrendingUp, name: "Performance Marketing" },
    { icon: BarChart3, name: "Analytics & Strategy" },
  ];

  const development = [
    { icon: Globe, name: "Custom Websites" },
    { icon: Code2, name: "Full-Stack Apps" },
    { icon: Smartphone, name: "Mobile Development" },
    { icon: Palette, name: "UI/UX Design" },
    { icon: Database, name: "API Development" },
    { icon: BarChart3, name: "Dashboard & CRM" },
    { icon: Zap, name: "AI Integration" },
    { icon: Code2, name: "E-commerce Solutions" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we cover all aspects of your digital journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Digital Marketing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-smooth h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Megaphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold">Digital Marketing</h3>
                  <p className="text-muted-foreground">Grow your brand online</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {digitalMarketing.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-smooth group/item"
                  >
                    <service.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-smooth" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Web & App Development */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-smooth h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Code2 className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold">Web & App Development</h3>
                  <p className="text-muted-foreground">Build powerful digital products</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {development.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/10 transition-smooth group/item"
                  >
                    <service.icon className="w-5 h-5 text-accent group-hover/item:scale-110 transition-smooth" />
                    <span className="text-sm font-medium">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
