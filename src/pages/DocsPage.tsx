import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Code, Database, Key, Zap, Globe } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    content: "EthosLayer provides AI-powered ethical analysis for Web3 tokens and projects. This documentation covers the platform overview, analysis methodology, and upcoming API access.",
    items: ["Platform overview", "Understanding Ethos Scores", "Risk signal definitions", "Transparency indicators"],
  },
  {
    icon: Code,
    title: "API Reference",
    content: "The EthosLayer API (coming Q3 2025) will provide programmatic access to all analysis features. RESTful endpoints with JSON responses.",
    items: ["GET /v1/analyze/{ticker}", "GET /v1/score/{address}", "GET /v1/governance/{contract}", "POST /v1/batch-analyze"],
    badge: "Coming Soon",
  },
  {
    icon: Database,
    title: "Ethos Score Model",
    content: "The Ethos Score is calculated across five dimensions, each weighted by its impact on investor trust and project sustainability.",
    items: ["Transparency (25%)", "Tokenomics Health (20%)", "Governance Quality (20%)", "Community Trust (20%)", "Risk Profile (15%)"],
  },
  {
    icon: Key,
    title: "Authentication",
    content: "API keys will be available through the developer dashboard. Each request requires a valid Bearer token in the Authorization header.",
    items: ["API key generation", "Rate limiting policy", "Quota management", "Webhook support"],
    badge: "Coming Soon",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-4">
              DOCUMENTATION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              EthosLayer <span className="text-gradient">Developer Docs</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything you need to understand and integrate EthosLayer's ethical intelligence engine into your applications.
            </p>
          </div>

          {/* Quick links */}
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 mb-12">
            {[
              { icon: Zap, label: "Quick Start", desc: "Get up in 5 min" },
              { icon: Globe, label: "API Explorer", desc: "Interactive playground" },
              { icon: Key, label: "Get API Key", desc: "Join waitlist" },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-xl border border-border/60 bg-surface-1 p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-pointer shadow-card"
              >
                <Icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">{label}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold">{section.title}</h2>
                      {"badge" in section && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-neon-blue/30 text-neon-blue bg-neon-blue/5">
                          {section.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{section.content}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-surface-2 rounded-lg px-3 py-2 border border-border/40">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
