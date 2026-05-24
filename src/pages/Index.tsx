import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import TokenAnalysisDemo from "@/components/TokenAnalysisDemo";
import WhyEthosLayer from "@/components/WhyEthosLayer";
import UseCasesSection from "@/components/UseCasesSection";
import ForDevelopers from "@/components/ForDevelopers";
import RoadmapSection from "@/components/RoadmapSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <TokenAnalysisDemo />
        <WhyEthosLayer />
        <UseCasesSection />
        <ForDevelopers />
        <RoadmapSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
