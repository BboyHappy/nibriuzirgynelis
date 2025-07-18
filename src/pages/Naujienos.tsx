import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import stovyklaImage from "@/assets/camps-water.jpg";
import fotosesijaImage from "@/assets/photo-sessions-goat.jpg";
import zygisImage from "@/assets/hiking-kids.jpg";

const Naujienos = () => {
  const articles = [
    {
      id: 1,
      title: "Vasaros stovyklos prasideda birželio 1 d.",
      date: "2024-05-15",
      image: stovyklaImage,
      excerpt: "Šią vasarą laukiame jūsų vaikų nepamirštamose stovyklose! Registracija jau prasidėjo.",
      content: "Mūsų kasmetinės vasaros stovyklos prasidės birželio 1 dieną! Šiemet paruošėme dar daugiau įdomių veiklų: jojimo pamokas, žirgo priežiūros mokymą, gamtos pažinimo žaidimus ir sportinės veiklas. Stovyklos skirtos vaikams nuo 7 iki 16 metų. Kiekviena stovykla truks 5 dienas, o registracija jau prasidėjo.",
      readTime: "3 min skaitymo"
    },
    {
      id: 2,
      title: "Nauja fotografė prisijungia prie komandos",
      date: "2024-05-08",
      image: fotosesijaImage,
      excerpt: "Džiaugiamės pristačiusi naują komandos narę - profesionalią fotografę Justę, kuri specializuojasi gyvūnų fotografijoje.",
      content: "Sveikiname Justę, kuri prisijungia prie mūsų komandos kaip profesionali fotografė! Justė turi 8 metų patirtį gyvūnų fotografijoje ir jau spėjo suorganizuoti kelias sėkmingas fotosesijas mūsų žirgynėlyje. Nuo šiol galėsime pasiūlyti dar aukštesnės kokybės fotosesijų paslaugas.",
      readTime: "2 min skaitymo"
    },
    {
      id: 3,
      title: "Nauji žygių maršrutai Nemuno kilpų parke",
      date: "2024-04-22",
      image: zygisImage,
      excerpt: "Atradome naujus nuostabius maršrutus, kurie atskleis jums dar gražesnį Nemuno kilpų regioninio parko veidą.",
      content: "Po ilgų tyrinėjimų ir derinimų su parko administracija, galime pasiūlyti du naujus žygių maršrutus. Pirmasis veda prie retai lankomų Nemuno vingių su nuostabia panorama, o antrasis - per senovės miškus su archeologijos paminklais. Nauji maršrutai prieinami nuo balandžio 25 d.",
      readTime: "4 min skaitymo"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Naujienos
            </h1>
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Gaukite naujienos el. paštu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  Užsiregistruokite ir būkite pirmi, kurie sužinosite apie naujus renginius, 
                  specialius pasiūlymus ir žirgynėlio naujienas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Jūsų el. paštas"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="default" size="lg">
                    Užsiregistruoti
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Jūsų el. paštas saugus. Nesiųsime šlamšto ir galėsite bet kada atsisakyti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Naujienos;