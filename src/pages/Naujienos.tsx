
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

const Naujienos = () => {
  const articles = [
    {
      id: 1,
      title: "Dienos stovykla liepos 29!",
      date: "2025-07-22",
      image: "/lovable-uploads/eef99467-2c4d-41ab-88c0-5c7106d76501.png",
      excerpt: "",
      content: "Laukiame mažų ir didelių – mišri grupė nuo 3 metų iki kiek tik norėsite! 😊 Veiklų netrūks visiems: mažieji jojimo džiaugsmą patirs ant asilės Simos, o vyresni galės pajodinėti žirgais. Jeigu orai palankūs – maudynės ir vandens mūšiai garantuoti! Taip pat susipažinsime su avytėmis, ožiukais, maitinsime žąsiukus ir tyrinėsime gamtą Nemuno kilpų regioniniame parke.🕘 Atvykimas – 9:00 🕔 Išvykimas – 17:00 🍽 Kaina vaikui – 35 € (įskaičiuoti pietūs ir užkandžiai) 👫 Grupėje – 10–14 vaikų, tad dėmesio užteks kiekvienam!📍Vieta: Nemuno g. 10, Nibriai, Jiezno sen., Prienų r. 📞 Registracija: 0606 43952",
      readTime: "Stovykla vyks liepos 29"
    },
    {
      id: 2,
      title: "Nauja svetainė!",
      date: "2025-07-26",
      image: "/lovable-uploads/77a9d6b6-9d33-4614-b4a5-098fa3c9e2c5.png",
      excerpt: "",
      content: "🎉 Džiaugiamės galėdami pristatyti naująją „Nibrių žirgynėlio" svetainę! 🌿 Čia rasite visą informaciją apie mūsų siūlomas pramogas 🐴, fotosesijas 📸, stovyklas 🎒 ir renginius 🎈  💻 Apsilankykite, sekite naujienas 📰 ir susisiekite greitai bei patogiai 📞✉️!",
      
    },
    {
      id: 3,
      title: "🌞 Vasaros nuotykiai Nibrių žirgynėlyje!",
      date: "2025-07-02",
      image: "/lovable-uploads/ef2df6ac-955f-4d7e-9ad6-5317ca6744f9.png",
      excerpt: "",
      content: " Smagiai leidžiame vasaros dienas su nuostabiais vaikais – prisijunk ir tu! Liko viena vieta į rugpjūčio 4–8 d. stovyklą, o į rugpjūčio 11–13 d. stovyklą dar turime daugiau vietų. Stovyklų metu vaikai:🐴 Jodinės ir prižiūrės žirgus | 🐐 Dalyvaus veiklose su ožkytėmis, avelėmis ir viščiukais | 🌿 Keliaus į žygius, žais žaidimus, plauks irklentėmis ir mėgausis kaimo gamta bei maudynėmis | 📍Vieta: Nibriai, Prienų r. | 👧 Grupėje iki 15 vaikų | 💰 Kaina: 3 d. – 170 €, 5 d. – 240 € | 📞 Registracija: +370 606 43952",
      readTime: "Stovyklos vyks rugpjūčio 4–8 d. ir 11-13 d."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-8 mb-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
                Naujienos
              </h1>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/nibriuzirgynelisofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/nibriuzirgynelisofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.32-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.297-3.32c.872-.872 2.023-1.297 3.32-1.297s2.448.425 3.32 1.297c.872.872 1.297 2.023 1.297 3.32s-.425 2.448-1.297 3.32c-.872.872-2.023 1.297-3.32 1.297zm7.718-4.883c0-1.297-.49-2.448-1.297-3.32-.872-.872-2.023-1.297-3.32-1.297s-2.448.425-3.32 1.297c-.872.872-1.297 2.023-1.297 3.32s.425 2.448 1.297 3.32c.872.872 2.023 1.297 3.32 1.297s2.448-.425 3.32-1.297c.872-.872 1.297-2.023 1.297-3.32z"/>
                  </svg>
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
                          <Link to="/rezervacijos" className="inline-flex items-center">
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
