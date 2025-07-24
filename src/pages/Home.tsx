
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ActivitiesCarousel from "@/components/ActivitiesCarousel";
import NewsPreview from "@/components/NewsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import Naujienos from "./Naujienos";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ActivitiesCarousel />
      <NewsPreview />
      <TestimonialsSection />
      <div id="news-section">
        <Naujienos />
      </div>
    </Layout>
  );
};

export default Home;
