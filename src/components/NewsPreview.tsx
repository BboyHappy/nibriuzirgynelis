
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsPreview = () => {
  const recentNews = [
    {
      id: 1,
      title: "Dienos stovykla liepos 29!",
      date: "2025-07-22",
      image: "/lovable-uploads/eef99467-2c4d-41ab-88c0-5c7106d76501.png",
      excerpt: "Laukiame mažų ir didelių – mišri grupė nuo 3 metų! Jojimas, maudynės ir nuotykiai gamtoje."
    },
    {
      id: 2,
      title: "Nauja svetainė!",
      date: "2025-07-26",
      image: "/lovable-uploads/77a9d6b6-9d33-4614-b4a5-098fa3c9e2c5.png",
      excerpt: "Pristatome naująją svetainę su visa informacija apie mūsų paslaugas ir renginius."
    },
    {
      id: 3,
      title: "🌞 Vasaros nuotykiai Nibrių žirgynėlyje!",
      date: "2025-07-02",
      image: "/lovable-uploads/ef2df6ac-955f-4d7e-9ad6-5317ca6744f9.png",
      excerpt: "Vasaros stovyklos rugpjūčio 4–8 d. ir 11–13 d. Dar yra vietų!"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentNews.map((news) => (
            <Card key={news.id} className="shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(news.date).toLocaleDateString('lt-LT')}</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2">
                  {news.title}
                </h3>
                
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <Button asChild variant="outline" size="sm" className="w-full group">
                  <Link to="/naujienos" className="inline-flex items-center justify-center">
                    Skaityti daugiau
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="default" size="lg">
            <Link to="/naujienos">
              Visos naujienos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
