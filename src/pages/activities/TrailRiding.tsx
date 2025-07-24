import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Award } from "lucide-react";

const TrailRiding = () => {
  const faqItems = [
    {
      question: "Ar reikia mokėti joti?",
      answer: "Taip, žygiams reikia bent minimalaus jojimo patirties. Jei esate pradedantysis, rekomenduojame pirmiau paimti keletą pamokų."
    },
    {
      question: "Kiek trunka žygis?",
      answer: "Žygių trukmė priklauso nuo pasirinkto maršruto - nuo 2 valandų iki visos dienos žygio su pietų pertrauka."
    },
    {
      question: "Kas atsitiks, jei bus blogas oras?",
      answer: "Žygiai vyksta beveik bet kokiomis oro sąlygomis. Stipraus lietaus ar audros atveju žygį nukelsineme."
    },
    {
      question: "Ar galima fotografuoti?",
      answer: "Žinoma! Mes net padarysime kelias nuotraukas jums įsimintiniausiais momentais. Tačiau prašome saugiai laikyti fotoaparatą."
    },
    {
      question: "Ar yra amžiaus apribojimai?",
      answer: "Žygiuose dalyvauti gali asmenys nuo 12 metų. Vaikams iki 16 metų privalomas suaugusiojo palydovas."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/0c8f72f0-64d5-4680-8f0c-c83111bf5298.png" 
            alt="Žygiai miške su žirgais" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Žygiai žirgais
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Leiskitės į žygį su žirgais ir atraskite Nemuno kilpų regioninio parko grožį.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti žygį</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <Card className="shadow-elegant mb-12">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">
                  Apie žygius
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Mūsų žygiai su žirgais – tai nepamirštama patirtis tyrinėjant Nemuno kilpų regioninio parko grožį iš žirgo balno.
Keliausime lėtu žingsniu per senvages, miško takelius ir pievų pakraščius – ten, kur nepasiektų jokie automobiliai.
Dažnai kartu keliauja ir mūsų draugiški šunys, tad kompanija – tik dar jaukesnė!
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                   Kiekvienas žygis unikalus, nes maršrutą pritaikome pagal metų laiką, orą ir grupės poreikius.
Pavasarį ir vasarą lydės žydinčios pievos, rudenį – spalvoti lapai, o žiemą – tylus sniego kraštovaizdis.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Visus žygius lydi mūsų instruktorius, kuris ne tik užtikrina saugumą, bet ir papasakoja įdomybių apie gamtą, vietovės istoriją bei žirgus.
Ilgesnių žygių metu sustosime gražiausiose vietose trumpai poilsio pertraukėlei.


                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Trukmė</h3>
                  <p className="text-muted-foreground text-sm">2-6 valandos</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Grupės dydis</h3>
                  <p className="text-muted-foreground text-sm">2-8 žmonės</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Maršrutai</h3>
                  <p className="text-muted-foreground text-sm">Įvairūs</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Nuotraukos</h3>
                  <p className="text-muted-foreground text-sm">Įtrauktos</p>
                </CardContent>
              </Card>
            </div>

            {/* Routes */}
            <Card className="shadow-elegant mb-12">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Mūsų maršrutai
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Trumpas žygis</h3>
                    <p className="text-muted-foreground text-sm mb-4">2-3 valandos</p>
                    <p className="text-foreground/80">
                      Idealus pradedantiesiems. Važinėsime ramiais takais per mišką 
                      ir pievų pakraščiais su gražiais vaizdais.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Nemuno kilpų žygis</h3>
                    <p className="text-muted-foreground text-sm mb-4">4-5 valandos</p>
                    <p className="text-foreground/80">
                      Pamatysime nuostabius Nemuno vingius ir aplanksime 
                      gražiausias parko vietas su pietų pertrauka.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Saulėlydžio žygis</h3>
                    <p className="text-muted-foreground text-sm mb-4">2-3 valandos</p>
                    <p className="text-foreground/80">
                      Romantiškassaulėlydžio žygis su sustojimais 
                      gražiausiose vietose fotografijoms.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Visos dienos žygis</h3>
                    <p className="text-muted-foreground text-sm mb-4">5-6 valandos</p>
                    <p className="text-foreground/80">
                      Pilno pasinėrimo žygis su pietu gamtoje ir 
                      daugiausiai įspūdingiausių vietų.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-elegant mb-12">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Dažniausiai užduodami klausimai
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                      <p className="text-foreground/80">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Kainodara
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-6 bg-gradient-warm rounded-xl">
                  <p className="text-lg text-foreground/80">Kaina priklauso nuo žygio.</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti žygį</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TrailRiding;
