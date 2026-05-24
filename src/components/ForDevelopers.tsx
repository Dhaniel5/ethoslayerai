import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Database, BookOpen, ShieldCheck, Wallet, Lock, ArrowRight } from "lucide-react";

const offerings = [
  { icon: Lock, title: "Escrow APIs", description: "Drop-in programmable escrow for any product or marketplace." },
  { icon: Code, title: "AI Risk APIs", description: "Real-time risk scoring for wallets, contracts, and transactions." },
  { icon: Database, title: "Settlement SDKs", description: "Cross-chain settlement primitives with auditable receipts." },
  { icon: Wallet, title: "Wallet Reputation APIs", description: "Behavioral and identity reputation as a service." },
  { icon: ShieldCheck, title: "Compliance Analytics", description: "Sanctions, ethics, and policy monitoring out of the box." },
  { icon: BookOpen, title: "Research Insights", description: "Sector-level transparency datasets and reports." },
];

export default function ForDevelopers() {
  return (
    <section id="developers" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-neon-blue/8 left-[-150px] top-[0%]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto rounded-3xl border border-primary/20 bg-surface-1/80 backdrop-blur-xl shadow-card overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-mono mb-4">
                  API & DEVELOPER PLATFORM
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Build Trust-Native{" "}
                  <span className="text-gradient">Web3 Apps</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EthosLayer ships escrow, AI risk, settlement, and reputation as composable APIs and SDKs — so you can embed trust in minutes, not months.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow-purple group" asChild>
                    <Link to="/docs">
                      Developer Docs
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-border/60 hover:bg-muted/60">
                    Join Waitlist
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 font-mono">
                  Early access Q3 2026 · Free tier available
                </p>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {offerings.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 p-4 rounded-xl border border-border/50 bg-surface-2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
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

          <div className="h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
        </div>
      </div>
    </section>
  );
}
