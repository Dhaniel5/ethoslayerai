import logo from "@/assets/logo.png";
import { Target, Eye, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-accent/8 right-[-200px] top-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">ABOUT ETHOSLAYER</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Product of{" "}
                <span className="text-gradient">Sphere Of Web3</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EthosLayer is built by <span className="text-foreground font-semibold">Sphere Of Web3</span>, a company focused on ethical infrastructure for decentralized finance and the next generation of digital trust.
              </p>

              <div className="space-y-3">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Target className="h-4 w-4 text-primary" />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-primary">Mission</p>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Building ethical infrastructure for decentralized finance and digital trust.
                  </p>
                </div>
                <div className="rounded-xl border border-neon-blue/20 bg-neon-blue/5 p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Eye className="h-4 w-4 text-neon-blue" />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neon-blue">Vision</p>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    To become the trust layer powering secure Web3 interactions globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150 animate-pulse-glow" />
                <img src={logo} alt="EthosLayer" className="h-40 w-40 object-contain relative z-10 animate-float drop-shadow-[0_0_30px_hsl(252_100%_70%/0.4)]" />
              </div>

              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { icon: Target, label: "Ethical", desc: "Values-driven design" },
                  { icon: Eye, label: "Transparent", desc: "Auditable by default" },
                  { icon: Heart, label: "Human", desc: "Built for trust" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-xl border border-border/60 bg-surface-1 p-4 text-center shadow-card hover:border-primary/30 transition-colors">
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
