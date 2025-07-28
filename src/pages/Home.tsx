
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import NewsPreview from "@/components/NewsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  return (
    <Layout>
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
