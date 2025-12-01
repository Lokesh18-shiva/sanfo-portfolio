import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "solutionssanfo@gmail.com",
      href: "mailto:solutionssanfo@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 63817 79592",
      href: "tel:+916381779592",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "https://maps.app.goo.gl/39cdg8qmJxVh2Y7m6",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-hero opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with us
            today
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-smooth hover:shadow-glow group h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-smooth">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </a>
                ) : (
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-center">
              Send us a message
            </h3>
            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              {/* REQUIRED Web3Forms key */}
              <input
                type="hidden"
                name="access_key"
                value="aa8f8d2c-7cb6-4e34-8768-e6837d7cdad5"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-smooth resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                className="w-full group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
