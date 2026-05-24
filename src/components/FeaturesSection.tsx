import { Brain, Lock, Zap, BadgeCheck, Eye, Fingerprint } from "lucide-react";

const solutions = [
  { icon: Brain, title: "AI Risk Intelligence", description: "Analyze wallets, tokens, and projects for scams, manipulation, and unethical behavior using deep on-chain models.", tag: "Intelligence", border: "border-neon-blue/20", iconColor: "text-neon-blue", gradient: "from-neon-blue/20 to-primary/10" },
  { icon: Lock, title: "Smart Escrow Infrastructure", description: "Secure peer-to-peer and business transactions with programmable, condition-based escrow contracts.", tag: "Escrow", border: "border-primary/20", iconColor: "text-primary", gradient: "from-primary/20 to-accent/10" },
  { icon: Zap, title: "Instant Settlement Layer", description: "Transparent, trusted digital settlements across borders, chains, and ecosystems.", tag: "Settlement", border: "border-accent/20", iconColor: "text-accent", gradient: "from-accent/20 to-neon-blue/10" },
  { icon: BadgeCheck, title: "Trust & Reputation Scoring", description: "Credibility scores for wallets, projects, merchants, and DAO participants in real time.", tag: "Reputation", border: "border-neon-blue/20", iconColor: "text-neon-blue", gradient: "from-neon-blue/15 to-accent/10" },
  { icon: Eye, title: "Ethical Compliance Monitoring", description: "Monitor suspicious activity, governance abuse, and transparency risk across protocols and treasuries.", tag: "Compliance", border: "border-primary/20", iconColor: "text-primary", gradient: "from-primary/15 to-neon-blue/10" },
  { icon: Fingerprint, title: "Decentralized Identity Signals", description: "Integrate identity reputation and behavioral trust indicators directly into your dApp.", tag: "Identity", border: "border-accent/20", iconColor: "text-accent", gradient: "from-accent/15 to-primary/10" },
];

export default function FeaturesSection() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-accent/10 top-[20%] right-[-100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">CORE SOLUTIONS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">One Layer for <span className="text-gradient">Web3 Trust</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A complete stack for risk, escrow, settlement, reputation, compliance, and identity — built for the next generation of digital finance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {solutions.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className={`group relative rounded-2xl border ${s.border} bg-surface-1/80 backdrop-blur-sm p-6 shadow-card hover:shadow-glow-purple hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4 block">{s.tag}</span>
                  <div className={`w-12 h-12 rounded-xl bg-muted/60 border ${s.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${s.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}