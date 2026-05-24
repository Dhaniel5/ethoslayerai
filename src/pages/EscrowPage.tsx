import PlaceholderPage from "@/components/PlaceholderPage";
import { Lock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const ESCROWS = [
  { id: "ESC-0A21", party: "Acme Studios", amount: "12,400 USDC", status: "Funded", color: "text-neon-blue bg-neon-blue/10 border-neon-blue/30" },
  { id: "ESC-0B14", party: "Maria L.", amount: "2.4 ETH", status: "In Review", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" },
  { id: "ESC-0C77", party: "DAO Treasury", amount: "120,000 USDC", status: "Released", color: "text-green-400 bg-green-400/10 border-green-400/30" },
  { id: "ESC-0D02", party: "Anon Wallet", amount: "5,000 USDT", status: "Disputed", color: "text-destructive bg-destructive/10 border-destructive/30" },
];

export default function EscrowPage() {
  return (
    <PlaceholderPage
      tag="ESCROW · PREVIEW"
      title="Programmable Escrow Transactions"
      description="Create, monitor, and resolve smart escrow contracts with condition-based release and dispute handling."
      icon={Lock}
    >
      <div className="flex justify-end mb-4">
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90"><Plus className="mr-2 h-4 w-4" />New Escrow</Button>
      </div>
      <div className="rounded-2xl border border-border/60 bg-surface-1 shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-surface-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <tr><th className="text-left px-5 py-3">ID</th><th className="text-left px-5 py-3">Counterparty</th><th className="text-left px-5 py-3">Amount</th><th className="text-left px-5 py-3">Status</th></tr>
          </thead>
          <tbody>
            {ESCROWS.map((e) => (
              <tr key={e.id} className="border-t border-border/50 hover:bg-surface-2/50 transition-colors">
                <td className="px-5 py-4 font-mono text-foreground">{e.id}</td>
                <td className="px-5 py-4">{e.party}</td>
                <td className="px-5 py-4 font-mono">{e.amount}</td>
                <td className="px-5 py-4"><span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${e.color}`}>{e.status.toUpperCase()}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PlaceholderPage>
  );
}
