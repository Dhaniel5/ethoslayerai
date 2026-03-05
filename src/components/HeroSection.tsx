import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Eye } from "lucide-react";
import logo from "@/assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px] animate-orb-move" />
      <div className="orb w-[500px] h-[500px] bg-accent/15 bottom-[-150px] right-[-150px] animate-orb-move" style={{ animationDelay: "2s" }} />
      <div className="orb w-[300px] h-[300px] bg-secondary/10 top-[30%] right-[20%] animate-orb-move" style={{ animationDelay: "4s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            AI-POWERED WEB3 ETHICS INTELLIGENCE
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-pulse-glow" />
              <img src={logo} alt="EthosLayer" className="h-24 w-24 object-contain relative z-10 animate-float drop-shadow-[0_0_20px_hsl(252_100%_70%/0.5)]" />
            </div>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Ethics Intelligence{" "}
            <span className="text-gradient">Layer for Web3</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Analyze crypto projects for transparency, ethical practices, and risk signals using AI. Protect your investments with real-time credibility scores.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow-purple group px-8"
              asChild
            >
              <Link to="/analyze">
                Analyze a Token
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-muted/60 group px-8"
            >
              <Play className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {[
              { icon: Shield, label: "Tokens Analyzed", value: "12,400+" },
              { icon: Zap, label: "Rug Pulls Detected", value: "830+" },
              { icon: Eye, label: "Risk Signals", value: "50+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-1">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xl font-bold text-gradient font-mono">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
