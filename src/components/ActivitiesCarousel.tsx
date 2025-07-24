import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Clock, Users, MapPin, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Jojimo pamokos",
    description: "Individualios pamokos pradedantiesiems ir pažengusiems. Mokome saugaus bendravimo su žirgais.",
    image: "/lovable-uploads/d1860f45-3d54-41d6-a0b8-de7b5926b354.png",
    duration: "45-60 min",
    price: "nuo 25€",
    participants: "1-2 asmenys",
    link: "/veiklos/jojimo-pamokos"
  },
  {
    id: 2,
    title: "Žygiai",
    description: "Nepamirštami žygiai Nemuno kilpų regioniniame parke su mūsų patikimais žirgais.",
    image: "/lovable-uploads/0c8f72f0-64d5-4680-8f0c-c83111bf5298.png",
    duration: "1-6 val",
    price: "pagal susitarimą",
    participants: "grupės",
    link: "/veiklos/zygiai"
  },
  {
    id: 3,
    title: "Stovyklos",
    description: "Nepamiršamos vasaros stovyklos vaikams su žirgais, gamtos pažinimu ir smagiais nuotykiais.",
    image: "/lovable-uploads/66ff45ea-6901-482a-ae10-53331ae1901c.png",
    duration: "3-5 dienos",
    price: "nuo 35€/dienai",
    participants: "vaikai",
    features: ["Maistas įskaičiuotas", "Edukacinės veiklos"],
    featuresIcons: [Utensils, Users],
    link: "/veiklos/stovyklos"
  },
  {
    id: 4,
    title: "Fotosesijos",
    description: "Profesionalios fotosesijos su žirgais gamtos aplinkoje. Sukuriame nepamirštamas akimirkas.",
    image: "/lovable-uploads/77edc4ed-efa7-49d5-b2aa-c62ab59bf99e.png",
    duration: "1-2 val",
    price: "nuo 30€",
    participants: "pagal susitarimą",
    link: "/veiklos/fotosesijos"
  },
  {
    id: 5,
    title: "Edukacijos",
    description: "Edukacinės programos mokykloms ir grupėms. Mokome gamtos meilės ir atsakingo bendravimo su gyvūnais.",
    image: "/lovable-uploads/0c0d9394-56af-4886-a3e5-fafb807cf429.png",
    duration: "2-4 val",
    price: "nuo 10€/asmeniui",
    participants: "grupės",
    link: "/veiklos/edukacijos"
  },
  {
    id: 6,
    title: "Kiti renginiai",
    description: "Gimtadieniai, įmonių renginiai, mokyklų išvykos ir kiti specialūs renginiai.",
    image: "/lovable-uploads/cf5a81b6-c37a-4f49-bdf9-451ccdb32df3.png",
    duration: "pagal susitarimą",
    price: "nuo 150€",
    participants: "grupės",
    link: "/veiklos/kiti-renginiai"
  }
];

const ActivitiesCarousel = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Mūsų veiklos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atraskite įvairias pramogas ir veiklas Nibrių žirgynėlyje
          </p>
        </div>

        <div className="relative">
          {/* Carousel Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-6 md:-ml-12">
            <Button variant="outline" size="icon" onClick={prevActivity}>
              <ChevronLeft className="w-6 h-6" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-6 md:-mr-12">
            <Button variant="outline" size="icon" onClick={nextActivity}>
              <ChevronRight className="w-6 h-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Activity Card */}
          <Card className="shadow-elegant max-w-lg mx-auto overflow-hidden">
            <div className="md:flex">
              <div className="relative md:w-1/2">
                <img
                  src={activities[currentActivity].image}
                  alt={activities[currentActivity].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <CardContent className="p-6 md:w-1/2">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  {activities[currentActivity].title}
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {activities[currentActivity].description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{activities[currentActivity].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{activities[currentActivity].participants}</span>
                  </div>
                </div>
                <Button asChild variant="default">
                  <Link to={activities[currentActivity].link}>Sužinoti daugiau</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCarousel;
