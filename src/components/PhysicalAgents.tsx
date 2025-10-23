import { motion } from "framer-motion";
import { Microscope, Zap, Cog } from "lucide-react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const PhysicalAgents = () => {
  return (
    <section id="physical" className="py-24 relative overflow-hidden">
      <div className="w-[95%] md:w-[90%] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Physical <span className="text-gradient-accent">Robot Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontier of robotic manipulation and automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 glass-strong rounded-[3rem] overflow-hidden blob-shape">
              <InteractiveRobotSpline
                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl hover:glass-strong transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Research & Development
              </h3>
              <p className="text-muted-foreground">
                Actively exploring robotic arm technology with a focus on
                precision, adaptability, and intelligent control systems.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:glass-strong transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Real-World Impact</h3>
              <p className="text-muted-foreground">
                Developing solutions for manufacturing, logistics, and service
                industries with AI-driven automation.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl hover:glass-strong transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Advanced Mechanics
              </h3>
              <p className="text-muted-foreground">
                Integrating cutting-edge sensors, actuators, and AI algorithms
                for seamless physical interaction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhysicalAgents;
