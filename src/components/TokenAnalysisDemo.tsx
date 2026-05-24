import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, Lock, Activity, Globe2, Users, ArrowRight, CheckCircle2 } from "lucide-react";

type Scenario = {
  id: string;
  label: string;
  description: string;
  walletScore: number;
  walletColor: string;
  escrowStatus: "Funded" | "In Review" | "Released" | "Disputed";
  settlementSteps: { label: string; done: boolean }[];
  governance: number;
  risks: { level: "ok" | "warn" | "bad"; text: string }[];
  aiInsights: string[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "cross-border",
    label: "Cross-border Payment",
    description: "USDC → EUR settlement between merchants in SG and DE.",
    walletScore: 92,
    walletColor: "text-green-400",
    escrowStatus: "Funded",
    settlementSteps: [
      { label: "Wallet verified", done: true },
      { label: "Escrow funded · 24,500 USDC", done: true },
      { label: "Compliance scan passed", done: true },
      { label: "FX bridge executed", done: false },
      { label: "Settled to recipient", done: false },
    ],
    governance: 88,
    risks: [
      { level: "ok", text: "Counterparty reputation: trusted merchant" },
      { level: "ok", text: "No sanctioned addresses in path" },
      { level: "warn", text: "FX slippage above 0.2% threshold" },
    ],
    aiInsights: [
      "Recipient wallet matches verified business identity (DE-VAT).",
      "Historical settlement on-time rate: 99.1% (last 240 tx).",
      "Recommend release after FX bridge confirmation.",
    ],
  },
  {
    id: "freelancer",
    label: "Freelancer Escrow",
    description: "Milestone-based design contract, 3 of 5 deliverables.",
    walletScore: 78,
    walletColor: "text-green-400",
    escrowStatus: "In Review",
    settlementSteps: [
      { label: "Contract deployed", done: true },
      { label: "Milestone 1 released · 1.2 ETH", done: true },
      { label: "Milestone 2 released · 1.2 ETH", done: true },
      { label: "Milestone 3 awaiting approval", done: false },
      { label: "Final settlement", done: false },
    ],
    governance: 70,
    risks: [
      { level: "ok", text: "Freelancer wallet aged 412 days · 38 contracts" },
      { level: "ok", text: "No disputes in last 90 days" },
      { level: "warn", text: "Milestone deliverable submitted 6h late" },
    ],
    aiInsights: [
      "Behavioral pattern consistent with verified contractor profile.",
      "Suggest 24h review window before auto-release.",
      "Reputation impact on dispute: −12 points (low risk).",
    ],
  },
  {
    id: "dao",
    label: "DAO Treasury Settlement",
    description: "Multisig grant payout to verified contributor team.",
    walletScore: 86,
    walletColor: "text-green-400",
    escrowStatus: "Released",
    settlementSteps: [
      { label: "Proposal #214 passed (87% quorum)", done: true },
      { label: "Multisig 4/6 signed", done: true },
      { label: "Compliance + ethics audit passed", done: true },
      { label: "Escrow released · 120K USDC", done: true },
      { label: "Settlement complete", done: true },
    ],
    governance: 94,
    risks: [
      { level: "ok", text: "Voting power within healthy distribution" },
      { level: "ok", text: "No insider concentration detected" },
      { level: "ok", text: "Treasury policy compliance: 100%" },
    ],
    aiInsights: [
      "Grant recipient has verified GitHub + on-chain delivery history.",
      "Governance transparency score above network median.",
      "Recommend publishing post-mortem within 14 days.",
    ],
  },
  {
    id: "token",
    label: "Token Verification",
    description: "Pre-listing trust check for new token XYZ.",
    walletScore: 22,
    walletColor: "text-destructive",
    escrowStatus: "Disputed",
    settlementSteps: [
      { label: "Contract submitted", done: true },
      { label: "Static analysis", done: true },
      { label: "Liquidity check — UNLOCKED", done: true },
      { label: "Listing approval", done: false },
      { label: "Settlement", done: false },
    ],
    governance: 12,
    risks: [
      { level: "bad", text: "Honeypot pattern detected in transfer fn" },
      { level: "bad", text: "Mint authority retained by deployer" },
      { level: "bad", text: "Liquidity unlocked · withdrawal possible" },
      { level: "warn", text: "Anonymous team · no audit on file" },
    ],
    aiInsights: [
      "Project clustered with 4 prior rug-pull deployments.",
      "Recommend BLOCK listing until liquidity is time-locked.",
      "Reputation score will degrade further if no remediation in 7d.",
    ],
  },
];

function Ring({ score, color }: { score: number; color: string }) {
  const c = 2 * Math.PI * 40;
  const off = c - (score / 100) * c;
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#g1)" strokeWidth="8" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} style={{ transition: "stroke-dashoffset 1s ease" }} />
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--neon-blue))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className={`text-2xl font-bold font-mono ${color}`}>{score}</div>
        <div className="text-[10px] text-muted-foreground">TRUST</div>
      </div>
    </div>
  );
}

const ESCROW_STYLE: Record<Scenario["escrowStatus"], string> = {
  Funded: "text-neon-blue bg-neon-blue/10 border-neon-blue/30",
  "In Review": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  Released: "text-green-400 bg-green-400/10 border-green-400/30",
  Disputed: "text-destructive bg-destructive/10 border-destructive/30",
};

export default function TokenAnalysisDemo() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((x) => x + 1), 1800);
    return () => clearInterval(t);
  }, []);

  const scenario = SCENARIOS.find((s) => s.id === activeId)!;

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-primary/10 left-[-150px] top-[10%]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            LIVE PRODUCT DEMO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The EthosLayer{" "}
            <span className="text-gradient">Trust Console</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Switch between scenarios to see how AI risk, smart escrow, and settlement flow into one unified view.
          </p>
        </div>

        {/* Scenario tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
                activeId === s.id
                  ? "border-primary/50 bg-primary/10 text-primary shadow-glow-purple"
                  : "border-border/60 bg-surface-1/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Dashboard */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-border/60 bg-surface-1/80 backdrop-blur-xl shadow-card overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface-2/60">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">ethoslayer · console</span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              LIVE · BLOCK 19,482,{(tick % 1000).toString().padStart(3, "0")}
            </span>
          </div>

          <div className="p-6 grid lg:grid-cols-3 gap-6">
            {/* LEFT: Trust + Escrow */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border/50 bg-surface-2 p-5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest mb-3">Wallet Trust Score</p>
                <div className="flex items-center gap-4">
                  <Ring score={scenario.walletScore} color={scenario.walletColor} />
                  <div>
                    <p className="text-sm font-semibold">0x7E5f…4A21</p>
                    <p className="text-xs text-muted-foreground mt-1">{scenario.description}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-surface-2 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">Escrow Status</p>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${ESCROW_STYLE[scenario.escrowStatus]}`}>
                    {scenario.escrowStatus.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-mono">ESC-{scenario.id.toUpperCase()}-{(1024 + tick).toString(16)}</p>
                    <p className="text-xs text-muted-foreground">Programmable contract · conditional release</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-surface-2 p-5">
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest mb-3">Governance Transparency</p>
                <div className="flex items-end justify-between mb-2">
                  <span className="text-3xl font-bold font-mono text-foreground">{scenario.governance}<span className="text-base text-muted-foreground">/100</span></span>
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon-blue to-accent rounded-full transition-all duration-1000" style={{ width: `${scenario.governance}%` }} />
                </div>
              </div>
            </div>

            {/* MIDDLE: Settlement */}
            <div className="rounded-xl border border-border/50 bg-surface-2 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">Settlement Progress</p>
                <Globe2 className="h-4 w-4 text-neon-blue" />
              </div>
              <ol className="space-y-3">
                {scenario.settlementSteps.map((step, i) => {
                  const active = !step.done && scenario.settlementSteps.slice(0, i).every((s) => s.done);
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border ${
                        step.done
                          ? "bg-green-400/15 border-green-400/40 text-green-400"
                          : active
                          ? "bg-primary/15 border-primary/40 text-primary animate-pulse"
                          : "bg-muted/30 border-border/50 text-muted-foreground"
                      }`}>
                        {step.done ? <CheckCircle2 className="h-3 w-3" /> : <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${step.done ? "text-foreground" : active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                        {active && <p className="text-[10px] font-mono text-primary mt-0.5">PROCESSING…</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* RIGHT: Risk + AI */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border/50 bg-surface-2 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-widest">Risk Alerts</p>
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                </div>
                <ul className="space-y-2">
                  {scenario.risks.map((r, i) => (
                    <li key={i} className={`flex items-start gap-2 text-xs px-3 py-2 rounded-lg border ${
                      r.level === "ok" ? "text-green-400 bg-green-400/5 border-green-400/20"
                      : r.level === "warn" ? "text-yellow-400 bg-yellow-400/5 border-yellow-400/20"
                      : "text-destructive bg-destructive/5 border-destructive/20"
                    }`}>
                      {r.level === "ok" ? <ShieldCheck className="h-3 w-3 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="h-3 w-3 mt-0.5 flex-shrink-0" />}
                      <span className="leading-snug">{r.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-mono uppercase text-primary tracking-widest">AI Security Insights</p>
                  <Activity className="h-4 w-4 text-primary animate-pulse" />
                </div>
                <ul className="space-y-2">
                  {scenario.aiInsights.map((t, i) => (
                    <li key={i} className="text-xs text-foreground/80 leading-relaxed flex gap-2">
                      <ArrowRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 border-t border-border/50 flex items-center justify-between bg-surface-2/40">
            <p className="text-[10px] text-muted-foreground font-mono">DEMO DATA · Not financial advice · EthosLayer v0.9</p>
            <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10" asChild>
              <a href="/dashboard">Open Full Dashboard <ArrowRight className="ml-2 h-3 w-3" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}