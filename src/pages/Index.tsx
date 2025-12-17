import Navigation from "@/components/linvex/Navigation";
import Hero from "@/components/linvex/Hero";
import LogoMarquee from "@/components/linvex/LogoMarquee";
import BentoGrid from "@/components/linvex/BentoGrid";
import UniversalIntegration from "@/components/linvex/UniversalIntegration";
import ProductShowcase from "@/components/linvex/ProductShowcase";
import Pricing from "@/components/linvex/Pricing";
import Testimonials from "@/components/linvex/Testimonials";
import ContactForm from "@/components/linvex/ContactForm";
import Footer from "@/components/linvex/Footer";
import ScrollProgress from "@/components/linvex/ScrollProgress";

const Index = () => {
  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <UniversalIntegration />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
