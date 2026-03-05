import logo from "@/assets/logo.png";
import { Globe, Zap, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-accent/8 right-[-200px] top-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
                ABOUT ETHOSLAYER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building Ethical{" "}
                <span className="text-gradient">Blockchain Infrastructure</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EthosLayer is a product of{" "}
                <span className="text-foreground font-semibold">Sphere Of Web3</span>, a company dedicated to building technologies that solve real-world problems using blockchain, AI, and ethical design principles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe the decentralized web can be powerful AND trustworthy. Our mission is to provide the transparency layer that Web3 currently lacks — making ethical practices a measurable, verifiable standard.
              </p>

              {/* Mission statement */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm font-mono text-primary/80 leading-relaxed">
                  <span className="text-muted-foreground">// Mission</span>
                  <br />
                  "Build ethical infrastructure for the decentralized internet."
                </p>
              </div>
            </div>

            {/* Right - visual */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150 animate-pulse-glow" />
                <img
                  src={logo}
                  alt="EthosLayer"
                  className="h-40 w-40 object-contain relative z-10 animate-float drop-shadow-[0_0_30px_hsl(252_100%_70%/0.4)]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { icon: Globe, label: "Global", desc: "Multi-chain coverage" },
                  { icon: Zap, label: "Real-time", desc: "Live analysis" },
                  { icon: Heart, label: "Ethical", desc: "Values-driven" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border/60 bg-surface-1 p-4 text-center shadow-card hover:border-primary/30 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">{label}</div>
                    <div className="text-[11px] text-muted-foreground">{desc}</div>
                  </div>
                ))}
              </div>

              <div className="w-full rounded-xl border border-border/50 bg-surface-2 p-4">
                <p className="text-xs text-muted-foreground text-center">
                  Part of <span className="text-foreground font-semibold">Sphere Of Web3</span> · Building the ethical stack for Web3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
