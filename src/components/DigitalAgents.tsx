import { DynamicHero } from "@/components/ui/dynamic-hero";
import agentPreview from "@/assets/agent-preview.png";

const DigitalAgents = () => {
  return (
    <section id="digital" className="py-20">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <DynamicHero
          heading="Intelligent Digital Avatar Agents"
          tagline="Powered by advanced AI, our digital agents provide seamless interaction and engagement with human-like intelligence."
          buttonText="Explore Digital Agents"
          imageUrl={agentPreview}
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>
    </section>
  );
};

export default DigitalAgents;
