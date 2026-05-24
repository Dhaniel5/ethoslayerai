import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import NetworkBackground from "@/components/NetworkBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px] animate-orb-move" />
      <div className="orb w-[500px] h-[500px] bg-accent/15 bottom-[-150px] right-[-150px] animate-orb-move" style={{ animationDelay: "2s" }} />
      <div className="orb w-[300px] h-[300px] bg-secondary/10 top-[30%] right-[20%] animate-orb-move" style={{ animationDelay: "4s" }} />

      <NetworkBackground />

      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            TRUST INFRASTRUCTURE · AI · ESCROW · SETTLEMENT
          </div>

          <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-pulse-glow" />
              <img src={logo} alt="EthosLayer" className="h-24 w-24 object-contain relative z-10 animate-float drop-shadow-[0_0_20px_hsl(252_100%_70%/0.5)]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Trust Infrastructure for the{" "}
            <span className="text-gradient">Future of Web3</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            EthosLayer combines AI, escrow systems, and ethical intelligence to secure digital transactions, settlements, and decentralized finance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow-purple group px-8" asChild>
              <a href="#demo">
                <Play className="mr-2 h-4 w-4" />
                View Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-muted/60 group px-8" asChild>
              <a href="#developers">
                <ShieldCheck className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                Get Early Access
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono text-muted-foreground/80 animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />AI RISK ENGINE</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />SMART ESCROW</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />INSTANT SETTLEMENT</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />REPUTATION LAYER</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}