import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LucideIcon } from "lucide-react";

interface Props {
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
}

export default function PlaceholderPage({ tag, title, description, icon: Icon, children }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="orb w-[500px] h-[500px] bg-primary/10 top-[10%] right-[-150px]" />
        <div className="container mx-auto px-4 relative z-10">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
            <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to home</Link>
          </Button>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6">
              <Icon className="h-3.5 w-3.5" />
              {tag}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
          </div>

          <div className="max-w-5xl mx-auto">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
