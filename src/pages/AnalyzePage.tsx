import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TokenAnalysisDemo from "@/components/TokenAnalysisDemo";
import { Shield, Zap } from "lucide-react";

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              TOKEN ANALYSIS ENGINE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Analyze Any <span className="text-gradient">Web3 Token</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Enter a token name, ticker, or contract address to receive a comprehensive AI-powered ethical analysis.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              {[
                { icon: Shield, label: "Risk Detection", desc: "Rug pull & scam signals" },
                { icon: Zap, label: "Instant Results", desc: "Sub-2 second analysis" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <Icon className="h-4 w-4 text-primary" />
                  <div className="text-left">
                    <div className="font-medium text-xs">{label}</div>
                    <div className="text-muted-foreground text-xs">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <TokenAnalysisDemo />
      </main>
      <Footer />
    </div>
  );
}
