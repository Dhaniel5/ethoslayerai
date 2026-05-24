import { Wallet, Brain, Lock, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  { number: "01", icon: Wallet, title: "Initiate", description: "User initiates a transaction, payment, or token analysis through the EthosLayer SDK or dashboard.", color: "text-neon-blue", borderColor: "border-neon-blue/20", glowColor: "bg-neon-blue/10" },
  { number: "02", icon: Brain, title: "AI Evaluation", description: "AI evaluates trust signals, wallet behavior, on-chain history, and risk indicators across networks.", color: "text-primary", borderColor: "border-primary/20", glowColor: "bg-primary/10" },
  { number: "03", icon: Lock, title: "Escrow Secures", description: "Smart escrow contracts hold funds during the transaction lifecycle with programmable release rules.", color: "text-accent", borderColor: "border-accent/20", glowColor: "bg-accent/10" },
  { number: "04", icon: CheckCircle2, title: "Settle", description: "Settlement completes after verification and compliance checks — fast, transparent, fully auditable.", color: "text-neon-blue", borderColor: "border-neon-blue/20", glowColor: "bg-neon-blue/10" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">HOW ETHOSLAYER WORKS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From Intent to <span className="text-gradient">Settled Trust</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A four-stage protocol blending AI intelligence, programmable escrow, and instant settlement.</p>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                <div className={`h-full rounded-2xl border ${step.borderColor} bg-surface-1/80 backdrop-blur-sm p-6 shadow-card hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`text-5xl font-bold font-mono ${step.color} opacity-10 absolute top-4 right-5 select-none`}>{step.number}</div>
                  <div className={`w-12 h-12 rounded-xl ${step.glowColor} border ${step.borderColor} flex items-center justify-center mb-5`}>
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 h-5 w-5 text-primary/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}