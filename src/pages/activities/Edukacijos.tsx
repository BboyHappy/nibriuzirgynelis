import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Users, GraduationCap, Heart } from "lucide-react";
import aboutFamilyImage from "@/assets/about-family.jpg";

const Edukacijos = () => {
  const faqItems = [
    {
      question: "Kiek kainuoja edukacija?",
      answer: "Atvykus 3 ir daugiau žmonių – kaina 10 eurų žmogui. Kaina nepriklauso nuo to, ar žmogus jodinėja."
    },
    {
      question: "Kiek trunka edukacijos programa?",
      answer: "Edukacija trunka beveik valandą laiko - susipažinimas su ūkio gyvūnais, jų šukavimas, maitinimas, po to žirgo balnojimas ir trumpas jojimas."
    },
    {
      question: "Su kokiais gyvūnais susipažins dalyviai?",
      answer: "Dalyviai susipažins su žirgais, avimis, ožkomis, paukščiais ir asile. Sužinos faktus apie juos, mokysis juos šukuoti ir maitinti."
    },
    {
      question: "Ar visi gali joti?",
      answer: "Joti gali visi iki 90 kg svorio. Po edukacijos laukia žirgo balnojimas ir trumpas jojimas."
    },
    {
      question: "Ką galima daryti po edukacijos?",
      answer: "Po edukacijos - laisvas laikas mūsų pavėsinėje. Vasaros metu galima naudotis ir irklentėmis."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutFamilyImage} 
            alt="Edukacijos programa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Edukacijos
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Susipažinkite su ūkio gyvūnais ir sužinokite apie jų gyvenimą
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti edukaciją</Link>
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
                  Apie edukaciją
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    <strong>Atvykus 3 ir daugiau žmonių – kaina 10 eurų žmogui.</strong>
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Edukacija su jojimu – tai beveik valandos laiko susipažinimas su ūkio gyvūnais: 
                    žirgais, avimis, ožkomis, paukščiais, asile. Jų šukavimas, maitinimas, faktų apie 
                    juos sužinojimas. Po edukacijos laukia žirgo balnojimas ir trumpas jojimas.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Joti gali visi iki 90 kg. 10 eurų kaina nepriklauso nuo to ar žmogus jodinėja. 
                    Po edukacijos – laisvas laikas mūsų pavėsinėje. Vasaros metu galima naudotis ir irklentėmis.
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-accent">
                    <strong>Nuolaida gimtadienių šventėms, kai atvyksta 10 vaikų, o tėveliai nejodinėja.</strong>
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
                  <p className="text-muted-foreground text-sm">~1 valanda</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Grupė</h3>
                  <p className="text-muted-foreground text-sm">3+ žmonės</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Mokymasis</h3>
                  <p className="text-muted-foreground text-sm">Gyvūnų priežiūra</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Jojimas</h3>
                  <p className="text-muted-foreground text-sm">Iki 90 kg</p>
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
            <Card className="shadow-elegant mb-12">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Dovanų kuponai
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">1 žmogui</h3>
                    <p className="text-3xl font-bold text-primary mb-2">20€</p>
                    <p className="text-sm text-muted-foreground">Dovanų kuponas</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">2 žmonėms</h3>
                    <p className="text-3xl font-bold text-primary mb-2">25€</p>
                    <p className="text-sm text-muted-foreground">Dovanų kuponas</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">3+ žmonėms</h3>
                    <p className="text-3xl font-bold text-primary mb-2">10€</p>
                    <p className="text-sm text-muted-foreground">už žmogų</p>
                  </div>
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
                  <h3 className="font-semibold text-foreground mb-2">Edukacija (3+ žmonės)</h3>
                  <p className="text-3xl font-bold text-primary mb-2">10€</p>
                  <p className="text-sm text-muted-foreground">už žmogų</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti edukaciją</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Edukacijos;