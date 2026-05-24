import PlaceholderPage from "@/components/PlaceholderPage";
import { Globe2, ArrowRight, CheckCircle2 } from "lucide-react";

const TX = [
  { id: "STL-9821", from: "Singapore", to: "Germany", amount: "24,500 USDC → EUR", status: "Settled" },
  { id: "STL-9822", from: "USA", to: "Brazil", amount: "8,200 USDC → BRL", status: "Processing" },
  { id: "STL-9823", from: "UAE", to: "India", amount: "12,000 USDT → INR", status: "Settled" },
  { id: "STL-9824", from: "UK", to: "Nigeria", amount: "3,400 USDC → NGN", status: "Compliance" },
];

export default function SettlementPage() {
  return (
    <PlaceholderPage
      tag="SETTLEMENT · PREVIEW"
      title="Settlement Explorer"
      description="Track instant cross-border settlements with full transparency and verifiable compliance receipts."
      icon={Globe2}
    >
      <div className="space-y-3">
        {TX.map((t) => (
          <div key={t.id} className="rounded-2xl border border-border/60 bg-surface-1 p-5 shadow-card flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono text-sm text-foreground">{t.id}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">{t.from} <ArrowRight className="h-3 w-3" /> {t.to}</p>
            </div>
            <p className="font-mono text-sm">{t.amount}</p>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${
              t.status === "Settled" ? "text-green-400 bg-green-400/10 border-green-400/30"
              : t.status === "Processing" ? "text-neon-blue bg-neon-blue/10 border-neon-blue/30"
              : "text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
            }`}>
              {t.status === "Settled" && <CheckCircle2 className="h-3 w-3" />}
              {t.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </PlaceholderPage>
  );
}
