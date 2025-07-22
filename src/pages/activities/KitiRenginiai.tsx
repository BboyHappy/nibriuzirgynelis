
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Users, Gift, Star } from "lucide-react";

const KitiRenginiai = () => {
  const faqItems = [
    {
      question: "Kokius renginius galite surengti?",
      answer: "Gimtadienis, korporatyvai, mokyklos išvykos, mergvakarius, berniukų vakarai ir kiti specialūs renginiai."
    },
    {
      question: "Kiek žmonių gali dalyvauti?",
      answer: "Priklausomai nuo renginio tipo, galime priimti nuo 5 iki 50 žmonių. Didesnėms grupėms aptarsime individualiai."
    },
    {
      question: "Ar galiu atsivesti savo maistą?",
      answer: "Taip, galite atsivesti savo maistą arba užsisakyti mūsų paruoštą vietinį maistą. Turime griliaus vietą ir virtuvę."
    },
    {
      question: "Ar renginiai vyksta bet kokiu oru?",
      answer: "Taip, turime dengtos erdvės ir galimybę rengti veiklas viduje. Lauko veiklas derintume su oro sąlygomis."
    },
    {
      question: "Ar reikia mokėti joti, kad dalyvautumėte?",
      answer: "Ne, mes turime veiklų visiems: žaidimų, žirgo priežiūros, pažintinių užsiėmimų ir kitų aktyvumų."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/cf5a81b6-c37a-4f49-bdf9-451ccdb32df3.png" 
            alt="Tinklinio žaidimas stovykloje" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Kiti renginiai
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Gimtadieniai, korporatyvai ir specialūs renginiai gamtos aplinkoje
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti renginį</Link>
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
                  Apie renginius
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Mūsų teritorija - puiki vieta ypatingiems renginiams! Siūlome išskirtinę galimybę 
                    švęsti gimtadinius, rengti korporatyvus ar mokyklos išvykas gamtos aplinkoje su 
                    žirgais ir kitais gyvūnais.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Kiekvienas renginys yra unikalus - mes prisitaikome prie jūsų poreikių ir pageidavimų. 
                    Galime pasiūlyti įvairių veiklų: jojimo pamokas, žirgo priežiūros mokymą, 
                    gamtos pažinimo žaidimus ir sportinės veiklas.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Turime erdvų teritoriją, dengtus pastatus blogam orui ir visas reikalingas sąlygas 
                    sėkmingam renginiui. Mūsų komanda pasirūpins, kad jūsų renginys būtų nepamirštamas!
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
                  <h3 className="font-semibold text-foreground mb-2">Dalyviai</h3>
                  <p className="text-muted-foreground text-sm">5-50 žmonių</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Renginiai</h3>
                  <p className="text-muted-foreground text-sm">Visi tipai</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Paslaugos</h3>
                  <p className="text-muted-foreground text-sm">Individualiai</p>
                </CardContent>
              </Card>
            </div>

            {/* Event Types */}
            <Card className="shadow-elegant mb-12">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Renginių tipai
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Gimtadieniai</h3>
                    <p className="text-foreground/80 text-sm">
                      Nepamirštami gimtadieniai su žirgais, žaidimais ir smagiais aktyvumais visiems amžiams.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Korporatyvai</h3>
                    <p className="text-foreground/80 text-sm">
                      Komandos formavimo renginiai gamtoje su aktyviais užsiėmimais ir bendravimu.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Mokyklos išvykos</h3>
                    <p className="text-foreground/80 text-sm">
                      Edukacinės išvykos su pažintiniais užsiėmimais apie gamtą ir gyvūnus.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-warm rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">Mergvakario / Berniukų vakarai</h3>
                    <p className="text-foreground/80 text-sm">
                      Originalūs ir smagūs mergvakario ar berniukų vakarai gamtos aplinkoje.
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Mažas renginys</h3>
                    <p className="text-3xl font-bold text-primary mb-2">200€</p>
                    <p className="text-sm text-muted-foreground">iki 10 žmonių</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Vidutinis renginys</h3>
                    <p className="text-3xl font-bold text-primary mb-2">350€</p>
                    <p className="text-sm text-muted-foreground">11-25 žmonės</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Didelis renginys</h3>
                    <p className="text-3xl font-bold text-primary mb-2">500€+</p>
                    <p className="text-sm text-muted-foreground">26+ žmonės</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti renginį</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KitiRenginiai;
