
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Dienos stovykla liepos 29!",
    date: "2025-07-22",
    excerpt: "Laukiame mažų ir didelių – mišri grupė nuo 3 metų iki kiek tik norėsite! Veiklų netrūks visiems.",
    image: "/lovable-uploads/c1bb5dea-de9c-4267-94fe-c0bf76a39c99.png"
  },
  {
    id: 2,
    title: "Nauja svetainė!",
    date: "2025-07-26",
    excerpt: "Džiaugiamės galėdami pristatyti naująją „Nibrių žirgynėlio" svetainę!",
    image: "/lovable-uploads/d0bf3150-6cb0-472d-b52d-8e9709f84c97.png"
  },
  {
    id: 3,
    title: "🌞 Vasaros nuotykiai Nibrių žirgynėlyje!",
    date: "2025-07-02",
    excerpt: "Smagiai leidžiame vasaros dienas su nuostabiais vaikais – prisijunk ir tu!",
    image: "/lovable-uploads/38646c9a-03d4-4093-a77f-ddb70ad1ecb0.png"
  }
];

const NewsPreview = () => {
  const scrollToNews = () => {
    const newsSection = document.querySelector('#news-section');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Naujienos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sekite mūsų naujausias žinias ir renginius
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Card 
              key={item.id} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={scrollToNews}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(item.date).toLocaleDateString('lt-LT')}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-foreground/80 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Skaityti daugiau
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <a href="#news-section" className="inline-flex items-center">
              Visos naujienos
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
