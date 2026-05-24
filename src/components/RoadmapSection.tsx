import { CheckCircle, Circle, Clock } from "lucide-react";

const phases = [
  { phase: "Phase 1", title: "AI Ethical Risk Engine", status: "active", quarter: "Q2 2026", items: ["AI scoring model", "Wallet & token risk APIs", "Console (beta)", "Public risk feed"] },
  { phase: "Phase 2", title: "Escrow Infrastructure", status: "upcoming", quarter: "Q3 2026", items: ["Programmable escrow contracts", "Multi-signature flows", "Dispute resolution layer", "P2P SDK"] },
  { phase: "Phase 3", title: "Settlement Layer", status: "planned", quarter: "Q4 2026", items: ["Cross-border settlement", "Stablecoin routing", "FX bridges", "Settlement explorer"] },
  { phase: "Phase 4", title: "Reputation & Identity Layer", status: "planned", quarter: "Q1 2027", items: ["Wallet reputation graph", "Decentralized identity signals", "Reputation portability", "Sybil resistance"] },
  { phase: "Phase 5", title: "Full Trust Operating System for Web3", status: "planned", quarter: "Q2 2027+", items: ["Unified trust SDK", "Compliance suite", "Enterprise infrastructure", "Global partner network"] },
];

const STATUS_CONFIG = {
  active: { icon: CheckCircle, label: "In Progress", color: "text-primary", border: "border-primary/40", bg: "bg-primary/8", dotColor: "bg-primary" },
  upcoming: { icon: Clock, label: "Upcoming", color: "text-neon-blue", border: "border-neon-blue/30", bg: "bg-neon-blue/5", dotColor: "bg-neon-blue" },
  planned: { icon: Circle, label: "Planned", color: "text-muted-foreground", border: "border-border/50", bg: "bg-surface-2", dotColor: "bg-border" },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">ROADMAP</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Path to a <span className="text-gradient">Trust Operating System</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Five phases that build the complete trust stack for the decentralized economy.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, idx) => {
            const config = STATUS_CONFIG[phase.status as keyof typeof STATUS_CONFIG];
            const Icon = config.icon;
            return (
              <div key={idx} className={`relative rounded-2xl border ${config.border} ${config.bg} p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center gap-2 text-xs font-mono ${config.color}`}>
                      <Icon className="h-4 w-4" />
                      <span>{phase.phase}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{phase.quarter}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-base">{phase.title}</h3>
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.border} ${config.color}`}>{config.label}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-1.5">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className={`w-1 h-1 rounded-full ${config.dotColor} flex-shrink-0`} />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
