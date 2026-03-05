import { AlertTriangle, TrendingUp, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    description:
      "Web3 has become a breeding ground for scams, rug pulls, and projects with manipulative tokenomics. Billions are lost annually to deceptive projects that lure investors with false promises.",
    items: ["$3.8B lost to crypto scams in 2023", "82% of DeFi exits were rug pulls", "Less than 12% of projects are audited"],
    color: "text-destructive",
    border: "border-destructive/20",
    bg: "bg-destructive/5",
  },
  {
    icon: ShieldCheck,
    title: "Our Solution",
    description:
      "EthosLayer provides AI-powered ethical analysis that evaluates projects against a transparent framework of trust signals, giving investors and communities the intelligence they need.",
    items: ["Real-time Ethos Scoring", "Governance structure analysis", "Community-verified transparency"],
    color: "text-primary",
    border: "border-primary/20",
    bg: "bg-primary/5",
  },
  {
    icon: TrendingUp,
    title: "The Impact",
    description:
      "By promoting ethical standards in decentralized ecosystems, EthosLayer helps build a Web3 where transparency and accountability are the norm, not the exception.",
    items: ["Protect retail investors", "Promote ethical project development", "Build trust in decentralized systems"],
    color: "text-neon-blue",
    border: "border-neon-blue/20",
    bg: "bg-neon-blue/5",
  },
];

export default function WhyEthosLayer() {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary/10 right-[-100px] bottom-[-50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            WHY ETHOSLAYER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Web3 Deserves{" "}
            <span className="text-gradient">Better Standards</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The decentralized ecosystem has unprecedented potential — but only if trust can be established at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl border ${item.border} ${item.bg} p-6 shadow-card`}
              >
                <div className={`w-12 h-12 rounded-xl bg-muted/60 border ${item.border} flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${item.color}`}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.color.replace("text-", "bg-")}`} />
                      <span className="text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
