import { AlertTriangle, ShieldCheck } from "lucide-react";

const problems = [
  "Rug pulls and exit scams draining retail investors",
  "Fraudulent projects with manipulative tokenomics",
  "Fake escrow agents and unverified middlemen",
  "Lack of trust in peer-to-peer transactions",
  "Cross-border payment risk and compliance gaps",
  "Poor settlement transparency across chains",
];

const solutions = [
  { title: "AI", description: "Detect risk patterns before money moves." },
  { title: "Escrow", description: "Programmable funds protection by default." },
  { title: "Ethical Intelligence", description: "Score behavior, governance, and intent." },
  { title: "Smart Contracts", description: "Automated, auditable settlement logic." },
];

export default function WhyEthosLayer() {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-primary/10 right-[-100px] bottom-[-50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            WHY ETHOSLAYER MATTERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Web3 Has a{" "}
            <span className="text-gradient">Trust Problem</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Billions are lost every year because the decentralized economy lacks shared trust infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-lg font-bold text-destructive">The Problem</h3>
            </div>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary">The EthosLayer Solution</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              We combine four pillars into one unified trust layer for any Web3 transaction or product.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((s) => (
                <div key={s.title} className="rounded-xl border border-border/50 bg-surface-2 p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
