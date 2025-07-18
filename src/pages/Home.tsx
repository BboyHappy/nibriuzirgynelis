import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ActivitiesCarousel />
      <TestimonialsSection />
    </Layout>
  );
};

export default Home;