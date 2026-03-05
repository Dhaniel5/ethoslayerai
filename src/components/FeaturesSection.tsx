import { Brain, Star, AlertTriangle, Eye, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Token Analysis",
    description:
      "Deep-learning models analyze token contracts, transaction patterns, holder distribution, and market behavior to surface hidden risks.",
    gradient: "from-neon-blue/20 to-primary/10",
    border: "border-neon-blue/20",
    iconColor: "text-neon-blue",
    tag: "Core Feature",
  },
  {
    icon: Star,
    title: "Ethos Score",
    description:
      "A proprietary 0–100 rating system measuring transparency, ethical tokenomics, decentralization, and community health across multiple dimensions.",
    gradient: "from-primary/20 to-accent/10",
    border: "border-primary/20",
    iconColor: "text-primary",
    tag: "Flagship",
  },
  {
    icon: AlertTriangle,
    title: "Rug Pull Detection",
    description:
      "Flags liquidity withdrawal risks, suspicious mint authority, locked LP analysis, and abnormal whale concentration patterns in real-time.",
    gradient: "from-destructive/20 to-primary/10",
    border: "border-destructive/20",
    iconColor: "text-destructive",
    tag: "Risk Engine",
  },
  {
    icon: Eye,
    title: "Transparency Indicators",
    description:
      "Evaluates whether teams are doxxed, governance is on-chain, token allocation is disclosed, and vesting schedules are enforced.",
    gradient: "from-accent/20 to-neon-blue/10",
    border: "border-accent/20",
    iconColor: "text-accent",
    tag: "Trust Layer",
  },
  {
    icon: Users,
    title: "Community Governance",
    description:
      "Analyzes DAO structures, voting power distribution, proposal history, and whether token holders have meaningful control.",
    gradient: "from-neon-blue/15 to-accent/10",
    border: "border-neon-blue/20",
    iconColor: "text-neon-blue",
    tag: "Governance",
  },
  {
    icon: TrendingUp,
    title: "Tokenomics Summary",
    description:
      "Breaks down supply mechanics, inflation schedules, burn mechanisms, and whether the economic model incentivizes long-term value.",
    gradient: "from-primary/15 to-neon-blue/10",
    border: "border-primary/20",
    iconColor: "text-primary",
    tag: "Economics",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Orb */}
      <div className="orb w-[400px] h-[400px] bg-accent/10 top-[20%] right-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Trust Web3</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive suite of AI-powered tools for evaluating the integrity of any crypto project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`group relative rounded-2xl border ${feature.border} bg-surface-1 p-6 shadow-card hover:shadow-glow-purple hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">
                    {feature.tag}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-muted/60 border ${feature.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
