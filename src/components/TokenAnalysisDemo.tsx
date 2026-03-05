import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Shield, AlertTriangle, Eye, TrendingUp, Users, Loader2 } from "lucide-react";

const PRELOADED_TOKENS = [
  { label: "Ethereum", ticker: "ETH" },
  { label: "Solana", ticker: "SOL" },
  { label: "Pepe", ticker: "PEPE" },
  { label: "Unknown Token", ticker: "XYZSCAM" },
];

const TOKEN_DATA: Record<string, {
  ethosScore: number;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  transparency: number;
  governance: number;
  tokenomics: string;
  riskFlags: string[];
  color: string;
}> = {
  ETH: {
    ethosScore: 94,
    riskLevel: "Low",
    transparency: 98,
    governance: 90,
    tokenomics: "Deflationary. Fee burn mechanism. Stake-based issuance. Well-distributed supply.",
    riskFlags: ["None detected"],
    color: "text-green-400",
  },
  SOL: {
    ethosScore: 82,
    riskLevel: "Low",
    transparency: 85,
    governance: 75,
    tokenomics: "Inflationary schedule with decreasing rate. 67% initial allocation to insiders.",
    riskFlags: ["Higher insider allocation", "Validator concentration"],
    color: "text-green-400",
  },
  PEPE: {
    ethosScore: 41,
    riskLevel: "High",
    transparency: 30,
    governance: 15,
    tokenomics: "Pure memecoin. No utility. High whale concentration. No vesting schedule.",
    riskFlags: ["Anonymous team", "No utility", "Whale concentration >60%", "No governance"],
    color: "text-yellow-400",
  },
  XYZSCAM: {
    ethosScore: 8,
    riskLevel: "Critical",
    transparency: 5,
    governance: 0,
    tokenomics: "Minting authority retained. LP unlocked. No audit. Honeypot code detected.",
    riskFlags: ["Honeypot detected", "Unlocked liquidity", "Anonymous team", "No audit", "Minting authority active", "Copy contract"],
    color: "text-destructive",
  },
};

const RISK_COLORS = {
  Low: "text-green-400 bg-green-400/10 border-green-400/30",
  Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  High: "text-orange-400 bg-orange-400/10 border-orange-400/30",
  Critical: "text-destructive bg-destructive/10 border-destructive/30",
};

function ScoreRing({ score, color }: { score: number; color: string }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--neon-blue))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className={`text-2xl font-bold font-mono ${color}`}>{score}</div>
        <div className="text-[10px] text-muted-foreground">/ 100</div>
      </div>
    </div>
  );
}

function ProgressBar({ value, label, color = "bg-gradient-primary" }: { value: number; label: string; color?: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-mono text-foreground">{value}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function TokenAnalysisDemo() {
  const [input, setInput] = useState("");
  const [selectedTicker, setSelectedTicker] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof TOKEN_DATA[string] | null>(null);
  const [tokenName, setTokenName] = useState("");

  const analyze = (ticker: string, name: string) => {
    setLoading(true);
    setResult(null);
    setSelectedTicker(ticker);
    setTokenName(name);

    setTimeout(() => {
      const data = TOKEN_DATA[ticker] || TOKEN_DATA["XYZSCAM"];
      setResult(data);
      setLoading(false);
    }, 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const found = PRELOADED_TOKENS.find(
      (t) =>
        t.ticker.toLowerCase() === input.toLowerCase() ||
        t.label.toLowerCase() === input.toLowerCase()
    );
    analyze(found?.ticker || "XYZSCAM", found?.label || input);
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-primary/10 left-[-150px] top-[10%]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
            LIVE DEMO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try the{" "}
            <span className="text-gradient">Analysis Engine</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter any token name or contract address to see a real-time ethical analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input */}
          <div className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card mb-6">
            <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter token name, ticker, or contract address..."
                  className="w-full pl-10 pr-4 py-2.5 bg-muted/60 border border-border/60 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50"
                />
              </div>
              <Button type="submit" className="bg-gradient-primary text-primary-foreground hover:opacity-90 px-6">
                Analyze
              </Button>
            </form>

            {/* Quick picks */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center">Try:</span>
              {PRELOADED_TOKENS.map((token) => (
                <button
                  key={token.ticker}
                  onClick={() => {
                    setInput(token.label);
                    analyze(token.ticker, token.label);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border transition-all duration-200 ${
                    selectedTicker === token.ticker
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "border-border/60 bg-muted/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {token.ticker}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="rounded-2xl border border-border/60 bg-surface-1 p-12 shadow-card flex flex-col items-center gap-4 text-center animate-fade-in">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <div>
                <p className="font-semibold text-sm">Analyzing {tokenName}…</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">Running AI ethics scan · Checking tokenomics · Evaluating governance</p>
              </div>
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary/60 rounded-full animate-pulse"
                    style={{ height: `${Math.random() * 20 + 8}px`, animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card animate-fade-up">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div>
                  <h3 className="text-lg font-bold">{tokenName}</h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">EthosLayer Analysis Report</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${RISK_COLORS[result.riskLevel]}`}>
                  {result.riskLevel} Risk
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Ethos Score */}
                <div className="flex flex-col items-center gap-3">
                  <ScoreRing score={result.ethosScore} color={result.color} />
                  <div className="text-center">
                    <div className="text-sm font-semibold">Ethos Score</div>
                    <div className="text-xs text-muted-foreground">Overall credibility</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <ProgressBar value={result.transparency} label="Transparency" />
                  <ProgressBar value={result.governance} label="Governance" color="bg-gradient-to-r from-accent to-primary" />
                  <ProgressBar value={Math.min(result.ethosScore + 5, 100)} label="Community Trust" color="bg-gradient-to-r from-neon-blue to-accent" />

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground uppercase font-mono tracking-wider mb-2">Tokenomics</p>
                    <p className="text-xs text-foreground/80 leading-relaxed">{result.tokenomics}</p>
                  </div>
                </div>

                {/* Risk Flags */}
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-mono tracking-wider mb-3">Risk Signals</p>
                  <div className="space-y-2">
                    {result.riskFlags.map((flag, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border ${
                          flag === "None detected"
                            ? "text-green-400 bg-green-400/5 border-green-400/20"
                            : "text-destructive bg-destructive/5 border-destructive/20"
                        }`}
                      >
                        {flag === "None detected" ? (
                          <Shield className="h-3 w-3" />
                        ) : (
                          <AlertTriangle className="h-3 w-3" />
                        )}
                        {flag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-muted-foreground mt-4 pt-4 border-t border-border/50 text-center font-mono">
                DEMO DATA · Not financial advice · EthosLayer AI v0.9 Beta
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
