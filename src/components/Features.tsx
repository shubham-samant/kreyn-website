import { motion } from "framer-motion";
import { Brain, Shield, Rocket, Workflow } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description:
        "Advanced machine learning algorithms driving both digital and physical agents",
      color: "from-primary to-accent",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security protocols for all agent interactions",
      color: "from-accent to-primary",
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description:
        "Quick integration with existing systems and seamless scaling",
      color: "from-primary to-accent",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Streamline complex processes with intelligent agent orchestration",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-[95%] md:w-[90%] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-primary">Kreyn AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              className="glass-strong p-10 rounded-[2.5rem] group hover:glow-primary transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
