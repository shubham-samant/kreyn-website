import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="w-[95%] md:w-[90%] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong p-12 md:p-16 rounded-[3rem] text-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-50">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-3xl"
              ></motion.div>
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Transform Your{" "}
                <span className="text-gradient-accent">Operations?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                Join the future of intelligent automation with Kreyn AI's
                digital and physical agents
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg glow-primary flex items-center gap-2"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-2xl glass border-2 border-accent/50 text-foreground font-semibold text-lg hover:glow-accent transition-all flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-glow"></div>
                  Enterprise-Ready
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow"></div>
                  24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-glow"></div>
                  Secure & Compliant
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
