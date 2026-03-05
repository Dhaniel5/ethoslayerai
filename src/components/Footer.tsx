import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Twitter, Github, MessageSquare, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Token Analysis", href: "/analyze" },
    { label: "Ethos Score", href: "/#features" },
    { label: "Risk Detection", href: "/#features" },
    { label: "Roadmap", href: "/#roadmap" },
  ],
  Documentation: [
    { label: "Getting Started", href: "/docs" },
    { label: "API Reference", href: "/docs" },
    { label: "Ethos Score Model", href: "/docs" },
    { label: "Developer Tools", href: "/docs" },
  ],
  Community: [
    { label: "Discord", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Forum", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Sphere Of Web3", href: "#" },
    { label: "Contact", href: "mailto:hello@ethoslayer.xyz" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: MessageSquare, label: "Discord", href: "#" },
  { icon: Mail, label: "Contact", href: "mailto:hello@ethoslayer.xyz" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <img src={logo} alt="EthosLayer" className="h-8 w-8 object-contain drop-shadow-[0_0_6px_hsl(252_100%_70%/0.5)]" />
              <span className="text-base font-bold tracking-tight text-gradient">EthosLayer</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              AI-powered ethics intelligence for Web3. Analyze tokens, detect risks, and promote transparency in decentralized ecosystems.
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

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {label}
                      {href.startsWith("http") && (
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 EthosLayer · Part of Sphere Of Web3 · All rights reserved
          </p>
          <p className="text-xs text-muted-foreground">
            Not financial advice · For research purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
