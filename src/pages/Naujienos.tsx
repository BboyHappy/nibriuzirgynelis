
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Facebook, Instagram } from "lucide-react";

const Naujienos = () => {
  const articles = [
    {
      id: 1,
      title: "Dienos stovykla liepos 29!",
      date: "2025-07-22",
      image: "/lovable-uploads/53a0e99b-cf5e-4ab0-8313-7215c1d9964e.png",
      excerpt: "",
      content: "Laukiame mažų ir didelių – mišri grupė nuo 3 metų iki kiek tik norėsite! Veiklų netrūks visiems: mažieji jojimo džiaugsmą patirs ant asilės Simos, o vyresni galės pajodinėti žirgais. Jeigu orai palankūs – maudynės ir vandens mūšiai garantuoti! Taip pat susipažinsime su avytėmis, ožiukais, maitinsime žąsiukus ir tyrinėsime gamtą Nemuno kilpų regioniniame parke. Atvykimas – 9:00, išvykimas – 17:00. Kaina vaikui – 35 € (įskaičiuoti pietūs ir užkandžiai). Grupėje – 10–14 vaikų, tad dėmesio užteks kiekvienam! Vieta: Nemuno g. 10, Nibriai, Jiezno sen., Prienų r. Registracija: 0606 43952",
      readTime: "Stovykla vyks liepos 29"
    },
    {
      id: 2,
      title: "Nauja svetainė!",
      date: "2025-07-26",
      image: "/lovable-uploads/0dde3f9e-434f-415e-bdec-446c9bae5878.png",
      excerpt: "",
      content: "Džiaugiamės galėdami pristatyti naująją Nibrių žirgynėlio svetainę! Čia rasite visą informaciją apie mūsų siūlomas pramogas, fotosesijas, stovyklas ir renginius. Apsilankykite, sekite naujienas ir susisiekite greitai bei patogiai!",
      readTime: "."
    },
    {
      id: 3,
      title: "🌞 Vasaros nuotykiai Nibrių žirgynėlyje!",
      date: "2025-07-02",
      image: "/lovable-uploads/9133e5ca-1d68-4589-9831-c23b035287ca.png",
      excerpt: "",
      content: "Smagiai leidžiame vasaros dienas su nuostabiais vaikais – prisijunk ir tu! Liko viena vieta į rugpjūčio 4–8 d. stovyklą, o į rugpjūčio 11–13 d. stovyklą dar turime daugiau vietų. Stovyklų metu vaikai jodinės ir prižiūrės žirgus, dalyvaus veiklose su ožkytėmis, avelėmis ir viščiukais, keliaus į žygius, žais žaidimus, plauks irklentėmis ir mėgausis kaimo gamta bei maudynėmis. Vieta: Nibriai, Prienų r. Grupėje iki 15 vaikų. Kaina: 3 d. – 170 €, 5 d. – 240 €. Registracija: +370 606 43952",
      readTime: "Stovyklos vyks rugpjūčio 4–8 d. ir 11-13 d."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
                Naujienos
              </h1>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100057225738324&locale=lt_LT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-primary-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/nibriu.zirgynelis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Sekite mūsų naujausias žinias, renginių kalendorių ir išskirtinės pasiūlymus
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {articles.map((article) => (
                <Card key={article.id} className="shadow-elegant overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-full">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(article.date).toLocaleDateString('lt-LT')}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-4">
                        {article.title}
                      </h2>
                      
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {article.content}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="default" className="flex-1">
                          <Link to="/kontaktai" className="inline-flex items-center">
                            Rezervuoti dabar
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        
                        <Button asChild variant="outline" className="flex-1">
                          <Link to="/kontaktai">Sužinoti daugiau</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Naujienos;
