
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import NewsPreview from "@/components/NewsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="Nibrių žirgynėlis – žirgai, stovyklos ir edukacijos gamtoje"
        description="Šeimos žirgynėlis prie Jiezno: jojimo pamokos, žygiai, vaikų stovyklos, edukacijos su ūkio gyvūnais, fotosesijos ir šventės gamtoje."
        path="/"
      />
      <Hero />
      <AboutSection />
      <ActivitiesCarousel />
      <ServicesSection />
      <NewsPreview />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;
