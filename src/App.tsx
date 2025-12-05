import { Background } from './components/Background';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { InteractiveRobotSpline } from './components/ui/interactive-3d-robot';

function App() {

  return (
    <div className="relative min-h-screen text-foreground overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground">
      <Background />

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large circle - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]"></div>

        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-accent/10 animate-[spin_25s_linear_infinite_reverse]"></div>

        {/* Small floating squares */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-primary/20 rotate-45 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-2/3 right-1/4 w-12 h-12 border border-accent/20 rotate-12 animate-[float_10s_ease-in-out_infinite_2s]"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-sm bg-background/30 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent">Kreyn AI</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-20 gap-12 lg:gap-24 pt-24 pb-24">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center lg:text-left space-y-8 lg:flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium uppercase tracking-wider mb-6 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            Stealth Mode
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-100 pb-4 leading-[1.1]">
            Data & Simulation <br /> Infra for Embodied AI
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide">
            Building the future of intelligent systems.
          </p>

          {/* Contact Section */}
          <div>
            <a
              href="mailto:shubham@kreyn.ai"
              className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition-colors group"
            >
              <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>write to us at <span className="text-white font-medium border-b border-white/20 group-hover:border-white transition-colors">shubham@kreyn.ai</span></span>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Robot Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[600px] h-[500px] lg:h-[600px] relative lg:flex-1"
        >
          {/* Glass Blob Background */}
          <div className="absolute inset-0 glass-strong rounded-[3rem] overflow-hidden blob-shape animate-float">
            <InteractiveRobotSpline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-110 lg:scale-125"
            />
          </div>

          {/* Ambient Glow */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-4 bg-gradient-to-t from-background to-transparent">
        <div className="text-xs text-gray-500">
          © 2024 Kreyn.AI Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
