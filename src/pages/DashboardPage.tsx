import PlaceholderPage from "@/components/PlaceholderPage";
import { LayoutDashboard, TrendingUp, Activity, ShieldCheck } from "lucide-react";

const KPIS = [
  { label: "Avg Trust Score", value: "84", color: "text-neon-blue" },
  { label: "Escrows Active", value: "1,284", color: "text-primary" },
  { label: "Settled Today", value: "$3.4M", color: "text-accent" },
  { label: "Risk Alerts", value: "12", color: "text-yellow-400" },
];

export default function DashboardPage() {
  return (
    <PlaceholderPage
      tag="DASHBOARD · PREVIEW"
      title="Trust Operations Dashboard"
      description="Monitor risk, escrow, settlement, and reputation signals across your entire portfolio of Web3 activity."
      icon={LayoutDashboard}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-2xl border border-border/60 bg-surface-1 p-5 shadow-card">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{k.label}</p>
            <p className={`text-3xl font-bold font-mono ${k.color}`}>{k.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Realtime Activity</h3>
          </div>
          <div className="h-40 flex items-end gap-1.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-neon-blue/60" style={{ height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-4 w-4 text-neon-blue" />
            <h3 className="font-semibold text-sm">Risk Distribution</h3>
          </div>
          <div className="space-y-3">
            {[{ l: "Low", v: 72, c: "bg-green-400" }, { l: "Medium", v: 18, c: "bg-yellow-400" }, { l: "High", v: 7, c: "bg-orange-400" }, { l: "Critical", v: 3, c: "bg-destructive" }].map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-xs mb-1"><span className="text-muted-foreground">{r.l}</span><span className="font-mono">{r.v}%</span></div>
                <div className="h-2 bg-muted rounded-full overflow-hidden"><div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.v}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground font-mono mt-10">
        <TrendingUp className="inline h-3 w-3 mr-1" />Full dashboard launches with Phase 1 release
      </p>
    </PlaceholderPage>
  );
}
