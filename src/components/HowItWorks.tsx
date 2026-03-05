import { Search, Brain, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Enter a Token or Project",
    description:
      "Input a token name, ticker symbol, or smart contract address. EthosLayer supports all major blockchains including Ethereum, Solana, BNB Chain, and more.",
    color: "text-neon-blue",
    borderColor: "border-neon-blue/20",
    glowColor: "bg-neon-blue/10",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Ethical Analysis",
    description:
      "Our AI evaluates tokenomics structure, liquidity risks, governance decentralization, team transparency, on-chain activity patterns, and community signals.",
    color: "text-primary",
    borderColor: "border-primary/20",
    glowColor: "bg-primary/10",
  },
  {
    number: "03",
    icon: Star,
    title: "Ethos Score",
    description:
      "Receive a comprehensive credibility score (0–100) with detailed explanations, risk flags, and actionable insights about the project's ethical standing.",
    color: "text-accent",
    borderColor: "border-accent/20",
    glowColor: "bg-accent/10",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Steps to{" "}
            <span className="text-gradient">Ethical Clarity</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            EthosLayer simplifies the complex process of evaluating Web3 projects into three clear, actionable steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[4.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-neon-blue/40 via-primary/40 to-accent/40" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative group"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className={`rounded-2xl border ${step.borderColor} bg-surface-1 p-8 shadow-card hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1`}>
                  {/* Number */}
                  <div className={`text-6xl font-bold font-mono ${step.color} opacity-10 absolute top-4 right-6 select-none`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${step.glowColor} border ${step.borderColor} flex items-center justify-center mb-6`}>
                    <Icon className={`h-6 w-6 ${step.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
