
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Euro, Clock } from "lucide-react";

const activities = [
  {
    id: "jojimo-pamokos",
    title: "Jojimo pamokos",
    price: "nuo 25€ už pamoką",
    description: "Individualios pamokos pradedantiesiems ir pažengusiems",
    duration: "45-60 min",
    icon: "🐎"
  },
  {
    id: "zygiai",
    title: "Žygiai",
    price: "priklauso nuo žygio",
    description: "Žygiai Nemuno kilpų regioniniame parke",
    duration: "1-6 val",
    icon: "🌲"
  },
  {
    id: "stovyklos",
    title: "Stovyklos",
    price: "nuo 35€ už dieną",
    description: "Nepamiršamos vasaros stovyklos vaikams su žirgais ir gamta",
    duration: "Pagal susitarimą",
    icon: "⛺"
  },
  {
    id: "fotosesijos",
    title: "Fotosesijos",
    price: "nuo 30€ už valandą",
    description: "Profesionalios fotosesijos su žirgais gamtos aplinkoje",
    duration: "1-2 val",
    icon: "📸"
  },
  {
    id: "edukacijos",
    title: "Edukacijos",
    price: "10€ už žmogų",
    description: "Susipažinimas su ūkio gyvūnais ir jų priežiūra",
    duration: "1-2 val",
    icon: "🎓"
  },
  {
    id: "kiti-renginiai",
    title: "Kiti renginiai",
    price: "nuo 150€",
    description: "Gimtadieniai, mokyklų išvykos ir specialūs renginiai",
    duration: "Pagal susitarimą",
    icon: "🎉"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Mūsų siūlomos paslaugos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Pasirinkite jums tinkamiausią veiklą
          </p>
          
          {/* Reservation notice */}
          <div className="bg-gradient-warm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-primary mr-3" />
              <h3 className="font-serif text-xl font-bold text-primary">
                Rezervacijas vykdome telefonu
              </h3>
            </div>
            <Button asChild variant="default" size="lg">
              <a href="tel:+37060643952" className="text-lg font-semibold">
                +370 606 43952
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.id} className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{activity.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-foreground text-sm mb-4">
                    {activity.description}
                  </p>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <Euro className="w-4 h-4" />
                    <span>{activity.price}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
