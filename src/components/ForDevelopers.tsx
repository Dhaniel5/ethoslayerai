import { Button } from "@/components/ui/button";
import { Code, Database, BookOpen, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Code,
    title: "Public API",
    description: "RESTful API access to Ethos Scores, risk signals, and token analytics for your dApp or research tool.",
  },
  {
    icon: Database,
    title: "Research Insights",
    description: "Aggregate transparency reports, sector-level analysis, and historical credibility trends across Web3.",
  },
  {
    icon: BookOpen,
    title: "DAO Governance Analytics",
    description: "Deep-dive into governance token distribution, proposal outcomes, and voter participation metrics.",
  },
];

export default function ForDevelopers() {
  return (
    <section id="developers" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-neon-blue/8 left-[-150px] top-[0%]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-primary/20 bg-surface-1 shadow-card overflow-hidden">
          {/* Top accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-mono mb-4">
                  FOR DEVELOPERS & RESEARCHERS
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Build Ethical{" "}
                  <span className="text-gradient">Web3 Apps</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EthosLayer's developer platform is coming soon. Be the first to access our API, research datasets, and blockchain transparency reports to power ethical applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow-purple group">
                    Join Developer Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-border/60 hover:bg-muted/60">
                    Read Docs
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 font-mono">
                  🚀 Early access Q3 2025 · Free tier available
                </p>
              </div>

              {/* Right */}
              <div className="space-y-4">
                {offerings.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-xl border border-border/50 bg-surface-2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
        </div>
      </div>
    </section>
  );
}
