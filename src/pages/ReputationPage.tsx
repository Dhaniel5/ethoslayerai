import PlaceholderPage from "@/components/PlaceholderPage";
import { BadgeCheck } from "lucide-react";

const WALLETS = [
  { addr: "0x7E5f…4A21", score: 92, tag: "Verified merchant", color: "text-green-400" },
  { addr: "0x12aB…99C0", score: 78, tag: "Trusted contractor", color: "text-green-400" },
  { addr: "0xFa01…2240", score: 41, tag: "Limited history", color: "text-yellow-400" },
  { addr: "0xCAFE…BEEF", score: 8, tag: "High risk", color: "text-destructive" },
];

export default function ReputationPage() {
  return (
    <PlaceholderPage
      tag="REPUTATION · PREVIEW"
      title="Wallet Reputation Graph"
      description="Behavioral and identity-based trust scores for any wallet across supported chains."
      icon={BadgeCheck}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {WALLETS.map((w) => (
          <div key={w.addr} className="rounded-2xl border border-border/60 bg-surface-1 p-6 shadow-card flex items-center justify-between">
            <div>
              <p className="font-mono text-sm">{w.addr}</p>
              <p className="text-xs text-muted-foreground mt-1">{w.tag}</p>
            </div>
            <div className="text-right">
              <p className={`text-3xl font-bold font-mono ${w.color}`}>{w.score}</p>
              <p className="text-[10px] font-mono uppercase text-muted-foreground">trust</p>
            </div>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
