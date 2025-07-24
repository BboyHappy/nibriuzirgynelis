
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Users, Camera, Heart } from "lucide-react";

const Fotosesijos = () => {
  const faqItems = [
    {
      question: "Ar galiu atsivesti savo fotografą?",
      answer: "Taip, galite atsivesti savo fotografą arba naudotis mūsų paslaugomis. Mes turime patyrusius fotografus, kurie turi daug patirties fotografuojant gyvūnus."
    },
    {
      question: "Kiek nuotraukų gausiu?",
      answer: "Vidutiniškai per valandos fotosesiją gaunate 30-50 redaguotų nuotraukų aukšta raiška. Visas nuotraukas gausite per 1-2 savaites."
    },
    {
      question: "Ar reikia mokėti joti fotosesijai?",
      answer: "Ne, mes turime veiklas ir žmonėms, kurie nemoka joti. Galime fotografuoti su ramiais žirgais, ožiukais ir kitais gyvūnais."
    },
    {
      question: "Kaip reikia pasiruošti?",
      answer: "Rekomenduojame klasiškus arba gamtiškų spalvų drabužius, vengti pernelyg ryškių spalvų. Svarbiausia atsivežti gerą nuotaiką!"
    },
    {
      question: "Ar fotosesija vyksta bet kokiu oru?",
      answer: "Lietaus atveju galime perkelti fotosesiją arba fotografuoti po stogu. Geriausias laikas fotosesijai - rytas arba vakaras."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/77edc4ed-efa7-49d5-b2aa-c62ab59bf99e.png" 
            alt="Mergaitė su ožkyte - fotosesijos su gyvūnais" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Fotosesijos su gyvūnais
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Profesionalios fotosesijos su žirgais ir kitais gyvūnais nuostabioje gamtos aplinkoje
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/rezervacijos">Rezervuoti fotosesiją</Link>
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
                  Apie fotosesijas
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed mb-6">
Mūsų fotosesijos – tai ypatinga patirtis gamtos apsuptyje, leidžianti įamžinti šiltas akimirkas kartu su gyvūnais. Siūlome profesionalias fotosesijas šeimoms, vaikams, poroms ar individualiai – kiekvienai progai, kuriai norisi jaukumo ir autentiškumo.


                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-6">
Fotosesijas galima užsisakyti kartu su edukacijomis. Fotosesijose dalyvauja ramūs, žmonių draugijos įpratę gyvūnai: žirgai, poniai, ožiukai ir kiti ūkio gyventojai. Jie yra puikiai prižiūrimi, socialūs ir puikiai jaučiasi objektyvo dėmesio centre.


                  </p>
                  <p className="text-foreground/80 leading-relaxed">
Mūsų fotografai, turintys patirties gyvūnų ir žmonių emocijų fiksavime, pasirūpins, kad kiekvienas kadras būtų gyvas. Fotosesijoms parenkame pačias gražiausias mūsų teritorijos vietas, kurios dar labiau sustiprina šios patirties žavesį.


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
                  <p className="text-muted-foreground text-sm">iki 2 valandų</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Dalyviai</h3>
                  <p className="text-muted-foreground text-sm">1-8 žmonės</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Nuotraukos</h3>
                  <p className="text-muted-foreground text-sm">30-50 vnt.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Gyvūnai</h3>
                  <p className="text-muted-foreground text-sm">Ramūs ir draugiški</p>
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
                    <h3 className="font-semibold text-foreground mb-2">Šeimos fotosesija</h3>
                    <p className="text-3xl font-bold text-primary mb-2">50€</p>
                    <p className="text-sm text-muted-foreground">1 valanda</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Vaikų fotosesija</h3>
                    <p className="text-3xl font-bold text-primary mb-2">30€</p>
                    <p className="text-sm text-muted-foreground">45 minutės</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-warm rounded-xl">
                    <h3 className="font-semibold text-foreground mb-2">Išplėstinė fotosesija</h3>
                    <p className="text-3xl font-bold text-primary mb-2">90€</p>
                    <p className="text-sm text-muted-foreground">2 valandos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild variant="hero" size="lg" className="px-12">
                <Link to="/rezervacijos">Rezervuoti fotosesiją</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fotosesijos;
