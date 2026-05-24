import { Briefcase, Building2, Users, LineChart, Store } from "lucide-react";

const cases = [
  { icon: Briefcase, title: "Freelancers & Remote Workers", desc: "Secure milestone payments using programmable escrow that releases on verified delivery.", tag: "Independent work" },
  { icon: Building2, title: "Businesses", desc: "Trusted cross-border settlement infrastructure with compliance baked in.", tag: "Enterprise" },
  { icon: Users, title: "DAOs", desc: "Transparent treasury management and on-chain governance verification.", tag: "Onchain orgs" },
  { icon: LineChart, title: "Investors", desc: "AI-powered ethical project analysis before you allocate capital.", tag: "Capital" },
  { icon: Store, title: "Marketplaces", desc: "Embedded escrow APIs for safer P2P and B2C transactions.", tag: "Platforms" },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-neon-blue/10 left-[-100px] top-[20%]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">USE CASES</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Anyone Who <span className="text-gradient">Moves Value</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From solo freelancers to global enterprises, EthosLayer adapts to the trust requirements of every participant.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="group rounded-2xl border border-border/60 bg-surface-1/80 backdrop-blur-sm p-6 shadow-card hover:shadow-glow-purple hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">{c.tag}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
