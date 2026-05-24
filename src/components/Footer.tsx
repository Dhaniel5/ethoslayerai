import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Twitter, Github, MessageSquare, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Escrow Transactions", href: "/escrow" },
    { label: "Wallet Reputation", href: "/reputation" },
    { label: "Settlement Explorer", href: "/settlement" },
  ],
  Developers: [
    { label: "API Reference", href: "/docs" },
    { label: "SDKs", href: "/docs" },
    { label: "Webhooks", href: "/docs" },
    { label: "Status", href: "#" },
  ],
  Documentation: [
    { label: "Getting Started", href: "/docs" },
    { label: "Risk Model", href: "/docs" },
    { label: "Escrow Guide", href: "/docs" },
    { label: "Reputation Model", href: "/docs" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Sphere Of Web3", href: "#" },
    { label: "Contact", href: "mailto:hello@ethoslayer.xyz" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: MessageSquare, label: "Community", href: "#" },
  { icon: Mail, label: "Contact", href: "mailto:hello@ethoslayer.xyz" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <img src={logo} alt="EthosLayer" className="h-8 w-8 object-contain drop-shadow-[0_0_6px_hsl(252_100%_70%/0.5)]" />
              <span className="text-base font-bold tracking-tight text-gradient">EthosLayer</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Trust infrastructure for Web3. AI risk, smart escrow, settlement, reputation, and compliance — one layer.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border/60 bg-surface-1 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link to={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 EthosLayer · Part of Sphere Of Web3 · All rights reserved
          </p>
          <p className="text-xs text-muted-foreground">Not financial advice · For research purposes only</p>
        </div>
      </div>
    </footer>
  );
}