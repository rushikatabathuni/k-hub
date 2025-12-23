import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ParadigmsSection from "@/components/sections/ParadigmsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import NewsletterCTA from "@/components/sections/NewsletterCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ParadigmsSection />
      <ProgramsSection />
      <NewsletterCTA />
    </Layout>
  );
};

export default Index;
