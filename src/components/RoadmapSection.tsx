import { CheckCircle, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "AI Token Ethics Analyzer (MVP)",
    status: "active",
    quarter: "Q2 2025",
    items: [
      "AI-powered Ethos Score engine",
      "Rug pull risk detection",
      "Tokenomics transparency analysis",
      "Web UI for token analysis",
      "Demo & beta launch",
    ],
  },
  {
    phase: "Phase 2",
    title: "Governance & DAO Ethics Analysis",
    status: "upcoming",
    quarter: "Q3 2025",
    items: [
      "DAO voting power distribution analysis",
      "Governance proposal history tracking",
      "On-chain transparency verification",
      "Multi-chain governance support",
    ],
  },
  {
    phase: "Phase 3",
    title: "Web3 Transparency Index",
    status: "planned",
    quarter: "Q4 2025",
    items: [
      "Sector-level transparency rankings",
      "Historical credibility trending",
      "Community verification layer",
      "Blockchain-specific reports",
    ],
  },
  {
    phase: "Phase 4",
    title: "Public API & Developer Tools",
    status: "planned",
    quarter: "Q1 2026",
    items: [
      "RESTful API launch",
      "SDK for Ethereum, Solana, BNB",
      "Research data exports",
      "Developer dashboard",
    ],
  },
];

const STATUS_CONFIG = {
  active: {
    icon: CheckCircle,
    label: "In Progress",
    color: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/8",
    dotColor: "bg-primary",
    lineColor: "bg-primary/30",
  },
  upcoming: {
    icon: Clock,
    label: "Upcoming",
    color: "text-neon-blue",
    border: "border-neon-blue/30",
    bg: "bg-neon-blue/5",
    dotColor: "bg-neon-blue",
    lineColor: "bg-neon-blue/20",
  },
  planned: {
    icon: Circle,
    label: "Planned",
    color: "text-muted-foreground",
    border: "border-border/50",
    bg: "bg-surface-2",
    dotColor: "bg-border",
    lineColor: "bg-border/30",
  },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            ROADMAP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Future of{" "}
            <span className="text-gradient">Web3 Ethics</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our phased approach ensures we deliver value at every milestone while building toward a comprehensive ethics infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {phases.map((phase, idx) => {
            const config = STATUS_CONFIG[phase.status as keyof typeof STATUS_CONFIG];
            const Icon = config.icon;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl border ${config.border} ${config.bg} p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Phase indicator */}
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
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${config.border} ${config.color}`}>
                        {config.label}
                      </span>
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
