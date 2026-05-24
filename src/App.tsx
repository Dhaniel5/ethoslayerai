import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnalyzePage from "./pages/AnalyzePage";
import DocsPage from "./pages/DocsPage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import EscrowPage from "./pages/EscrowPage";
import ReputationPage from "./pages/ReputationPage";
import SettlementPage from "./pages/SettlementPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/escrow" element={<EscrowPage />} />
          <Route path="/reputation" element={<ReputationPage />} />
          <Route path="/settlement" element={<SettlementPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
