import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Users, Award, Shield } from "lucide-react";
import ridingLessonImage from "@/assets/riding-lessons-new.jpg";

const RidingLessons = () => {
  const faqItems = [
    {
      question: "Ar reikia turėti patirties su žirgais?",
      answer: "Ne, mes mokome tiek pradedančiuosius, tiek pažengusiuosius jojikus. Mūsų instruktoriai prisitaikys prie jūsų lygio."
    },
    {
      question: "Kiek trunka viena pamoka?",
      answer: "Standartinė pamoka trunka 45-60 minučių, įskaitant pasiruošimą ir žirgo priežiūrą."
    },
    {
      question: "Koks reikalingas pasiruošimas?",
      answer: "Atsineškite gerą nuotaiką – viskuo kitu pasirūpiname mes! Tik rekomenduojame apsauti patogią avalynę ir ilgas kelnes."
    },
    {
      question: "Nuo kokio amžiaus galima pradėti?",
      answer: "Mes mokome vaikus nuo 6 metų. Jaunesniems vaikams siūlome kitas, specialiai pritaikytas veiklas."
    },
    {
      question: "Ar galiu mokytis grupėje?",
      answer: "Taip, siūlome tiek individualias, tiek grupės pamokas. Grupės dydis paprastai 2-4 žmonės."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/8a500812-80f3-4e42-89f7-337695758600.png" 
            alt="Jojimo pamokos - žirgas šoka per kliūtį" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Jojimo pamokos
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Išmokite joti saugioje ir draugiškoje aplinkoje su mūsų patyrusia komanda
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti pamoką</Link>
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
                  Apie jojimo pamokas
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Mūsų jojimo pamokos skirtos visiems - nuo visiškai pradedančiųjų iki pažengusių jojikų, 
                    norinčių tobulinti savo įgūdžius. Kiekviena pamoka vyksta saugioje aplinkoje su 
                    kvalifikuotais instruktoriais ir ramiais, gerai išlavintais žirgais.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Pradedantieji mokysis pagrindinių jojimo principų: kaip sėsti ant žirgo, valdyti 
                    pavadžius, išlaikyti pusiausvyrą ir bendrauti su žirgu. Pažengusieji galės tobulinti 
                    techniką, mokytis šuolių ar kitų jojimo elementų.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Kiekviena pamoka prasideda nuo žirgo paruošimo ir baigiasi jo priežiūra - 
                    tai svarbi dalis mokymosi proceso, padedanti suprasti žirgo poreikius ir elgesį.
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
                  <p className="text-muted-foreground text-sm">45-60 minučių</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Dalyviai</h3>
                  <p className="text-muted-foreground text-sm">1-10 žmonės</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Lygis</h3>
                  <p className="text-muted-foreground text-sm">Visiems lygiams</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Sauga</h3>
                  <p className="text-muted-foreground text-sm">Šalmas ir profesionalūs treneriai</p>
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
                    <h3 className="font-semibold text-foreground mb-2">Individuali pamoka</h3>
                    <p className="text-3xl font-bold text-primary mb-2">25€</p>
                    <p className="text-sm text-muted-foreground">40 minučių</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Grupės pamoka</h3>
                    <p className="text-3xl font-bold text-primary mb-2">25€</p>
                    <p className="text-sm text-muted-foreground">už žmogų (2-4 žmonės)</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Pamokų paketas</h3>
                    <p className="text-3xl font-bold text-primary mb-2">60€</p>
                    <p className="text-sm text-muted-foreground">4 pamokos (taupote 40€)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti jojimo pamoką</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RidingLessons;
