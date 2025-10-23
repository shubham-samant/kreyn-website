import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(263 70% 50%)"
      />

      <div className="w-[95%] md:w-[90%] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Future of{" "}
              <span className="text-gradient-primary">Intelligent</span> Agents
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Pioneering digital avatars with advanced tool integration and
              exploring cutting-edge physical robotics. Kreyn AI is reshaping
              human-AI interaction.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg glow-primary flex items-center justify-center gap-2"
              >
                Explore Digital Agents
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl glass border-2 border-accent/50 text-foreground font-semibold text-lg hover:glow-accent transition-all"
              >
                View Physical Agents
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold text-gradient-accent">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  AI Capabilities
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-accent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Agent Availability
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <span className="inline-block text-primary animate-glow">
                    ∞
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Possibilities
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 glass-strong rounded-[3rem] overflow-hidden blob-shape animate-float">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
