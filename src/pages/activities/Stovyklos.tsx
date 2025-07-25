
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Utensils, Users, Calendar, Award } from "lucide-react";

const Stovyklos = () => {
  const faqItems = [
    {
      question: "Kokiam amžiui skirtos stovyklos?",
      answer: "Mūsų stovyklos skirtos vaikams nuo 7 iki 18 metų. Formuojame grupes pagal amžių ir patirtį."
    },
    {
      question: "Ar reikia mokėti joti?",
      answer: "Ne, stovyklose mokome nuo pat pradžių. Patyręs vaikams taip pat surengisime sudėtingesnių veiklų."
    },
    {
      question: "Kur vaikai gyvena stovykloje?",
      answer: "Vaikai gyvena arba palapinėse, arba namelyje su lovomis – priklausomai nuo stovyklos tipo ir oro sąlygų."
    },
    {
      question: "Kokios veiklos laukia stovykloje?",
      answer: "Jojimo pamokos, žirgo priežiūra, gamtos pažinimas, kūrybiškumo valandėlės ir sportinės veiklos."
    },
    {
      question: "Ar yra maitinimas?",
      answer: "Taip, į kainą įskaičiuoti pusryčiai, pietūs ir vakarienė. Skanų maistą tiekiame iš vietinio miestelio restorano. Be to, galime prisitaikyti prie jūsų poreikių ir specialių užsakymų."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/66ff45ea-6901-482a-ae10-53331ae1901c.png" 
            alt="Vasaros stovykla - vaikai pramogauja stovyklavietėje" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Vasaros stovyklos
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Nepamiršamos vasaros stovyklos vaikams su žirgais ir gamta
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti vietą</Link>
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
                  Apie stovyklas
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
Mūsų stovyklos – tai galimybė vaikams smagiai ir prasmingai leisti laiką gamtoje. Kasdienybę čia praturtina jodinėjimo pamokos, žaidimai, bendravimas su gyvūnais ir pažintis su kaimo gyvenimu.


                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
Kiekviena stovykla turi savo temą – vaikai ne tik mokosi joti, bet ir dalyvauja edukacijose, kūrybinėse dirbtuvėse, žaidžia komandos formavimo žaidimus ir patiria vasariškų nuotykių.


                  </p>
                  <p className="text-foreground/80 leading-relaxed">
Stovyklą veda patyrę instruktoriai bei auklėtojai, kurie rūpinasi vaikų saugumu, užtikrina individualų dėmesį ir šiltą bendravimo atmosferą.


                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Trukmė</h3>
                  <p className="text-muted-foreground text-sm">1-7 dienų</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Grupė</h3>
                  <p className="text-muted-foreground text-sm">6-12 vaikų</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Maistas</h3>
                  <p className="text-muted-foreground text-sm">Įskaičiuotas</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Amžius</h3>
                  <p className="text-muted-foreground text-sm">7-18 metų</p>
                </CardContent>
              </Card>
            </div>

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">1 dienos stovykla</h3>
                    <p className="text-3xl font-bold text-primary mb-2">35€</p>
                    <p className="text-sm text-muted-foreground">už dieną</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">3-dienų stovykla</h3>
                    <p className="text-3xl font-bold text-primary mb-2">170€</p>
                    <p className="text-sm text-muted-foreground">3 dienos</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">5-dienų stovykla</h3>
                    <p className="text-3xl font-bold text-primary mb-2">240€</p>
                    <p className="text-sm text-muted-foreground">5 dienos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti stovyklos vietą</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stovyklos;
