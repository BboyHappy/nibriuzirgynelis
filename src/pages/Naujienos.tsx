
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Facebook, Instagram } from "lucide-react";

const Naujienos = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const articles = [
    {
      id: "vasaros-stovyklos",
      title: "Vasaros stovyklos vaikams",
      date: "2026-02-16",
      image: "/lovable-uploads/vasaros-stovyklos.png",
      excerpt: "",
      content: "Kviečiame vaikus į nepamirštamas vasaros stovyklas mūsų žirgynėlyje, įsikūrusiame nuostabiame Nemuno kilpų regioninio parko kampelyje – ant upės kranto, apsuptame miškų ir pievų.\n\nJau ketvirtus metus kuriame vietą, kur vaikai gali: būti arčiau gamtos, susirasti naujų draugų, patirti tikras kaimiškas vasaras.\n\nKą veiksime? Jodinėsime ir bendrausime su žirgais. Maitinsime ir glostysime avis, ožkas, viščiukus, žąsis ir net asilą. Maudysimės, žaisime vandens karą. Su gelbėjimosi liemenėmis išbandysime irklentes. Grybausime, versime žemuoges ant smilgų. Vakarais kursime laužą ir kepsime zefyrus. Vedžiosime šunis pušyne. Važinėsime dviračiais ir miško paspirtukais. Žaisime tinklinį ir daugybę kitų žaidimų.\n\nIr, žinoma – lakstysime basomis ir valgysime obuolius tiesiai nuo medžio!\n\nKodėl verta rinktis mūsų stovyklą? Nuostabi, saugi gamta toli nuo miesto šurmulio. Nedidelės grupės – daugiau dėmesio kiekvienam vaikui. Draugiški, pilnamečiai ir patyrę vadovai. Skanus, šviežias maistas iš kavinės. Nakvynė 6 m skersmens jaukioje glampingo palapinėje arba savo palapinėse. Galimybė rinktis 2, 3 arba 5 dienų stovyklą.\n\nSTOVYKLŲ DATOS:\n2 dienų stovykla – 80 €: Liepos 6–7 (Puiki proga vaikams, kurie dar niekur nėra nakvoję!)\n3 dienų stovykla – 180 €:, Liepos 27–29, Rugpjūčio 10–12, Rugpjūčio 17–19\n5 dienų stovykla – 260 €:, Liepos 13–17, Rugpjūčio 3–7\n\nAdresas: Nemuno g. 10, Nibriai, Prienų r.\nRegistracija telefonu: 060643952\n\nKviečiame vaikus patirti vasarą, kuri kvepia pievomis, laužo dūmais ir tikrais nuotykiais!",
      readTime: "Stovyklos liepą–rugpjūtį"
    },
    {
      id: "edukacijos-grupems",
      title: "Edukacijos grupėms ir klasėms",
      date: "2026-02-08",
      image: "/lovable-uploads/edukacijos-grupems.png",
      excerpt: "",
      content: "Artėja pavasaris, tad kviečiame darželio grupes ir mokyklos klases atvykti į Nibrių žirgynėlį. Čia vaikus ir mokytojas pasitiks draugiški ūkio gyvūnai. Vaikai šukuos žirgus ir asilę Simą. Glostys aveles, laikys viščiukus rankose, susipažins su žaismingomis ožkytėmis. Gyvūnus maitinsime ir žinoma visi turės galimybę pajodinėti. Turint laiko galime pasivaikščioti Nemuno kilpų regioniniame parke kartu su ožkyte ir šunimis. Po pramogų vaikus kviečiame suvalgyti pietus mūsų sode, po obelimis. Čia yra pavėsinė, supynės, grilius. Kaina vaikui 10 eurų, auklėtojoms nemokamai. Turime galimybę priimti ir tėvelius. Tikimės sutikti Jus draugiškame šeimos ūkyje Prienų rajone. Pas mus galima sutikti ir gimtadienius, ar tiesiog atvykti su šeima. Telefonas rezervacijai: +37060643952.",
      readTime: "Edukacijos visus metus"
    },
    {
      id: "dienos-stovykla",
      title: "Praūžė dar viena vasaros stovykla!",
      date: "2025-07-22",
      image: "/lovable-uploads/53a0e99b-cf5e-4ab0-8313-7215c1d9964e.png",
      excerpt: "",
      content: "Smagiai praleidome dieną su mažais ir dideliais – mišri grupė nuo 3 metų! Veiklų netrūko visiems: mažieji jojimo džiaugsmą patyrė ant asilės Simos, o vyresni pajodinėjo žirgais. Orai buvo puikūs – maudynės ir vandens mūšiai buvo garantuoti! Taip pat susipažinome su avytėmis, ožiukais, maitinome žąsiukus ir tyrinėjome gamtą Nemuno kilpų regioniniame parke. Grupėje buvo 10–14 vaikų, tad dėmesio užteko kiekvienam! Vieta: Nemuno g. 10, Nibriai, Jiezno sen., Prienų r.",
      readTime: "Stovykla įvyko liepos 29"
    },
    {
      id: "nauja-svetaine",
      title: "Nauja svetainė!",
      date: "2025-07-26",
      image: "/lovable-uploads/0dde3f9e-434f-415e-bdec-446c9bae5878.png",
      excerpt: "",
      content: "Džiaugiamės galėdami pristatyti naująją Nibrių žirgynėlio svetainę! Čia rasite visą informaciją apie mūsų siūlomas pramogas, fotosesijas, stovyklas ir renginius. Apsilankykite, sekite naujienas ir susisiekite greitai bei patogiai!",
      readTime: "."
    },
    {
      id: "vasaros-nuotykiai",
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
      <SEO
        title="Naujienos – Nibrių žirgynėlis"
        description="Aktualios Nibrių žirgynėlio naujienos: vasaros stovyklos vaikams, edukacijos grupėms, renginiai ir pasiūlymai Prienų rajone."
        path="/naujienos"
      />
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
                <Card key={article.id} id={article.id} className="shadow-elegant overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-full">
                      <img 
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
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
                      
                      <p className="text-foreground leading-relaxed mb-6 whitespace-pre-line">
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
