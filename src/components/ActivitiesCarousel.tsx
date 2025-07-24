import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Jojimo pamokos",
    description: "Individualios pamokos pradedantiesiems ir pažengusiems jojikams",
    image: "/lovable-uploads/8a500812-80f3-4e42-89f7-337695758600.png",
    href: "/veiklos/jojimo-pamokos",
    price: "nuo 25€"
  },
  {
    id: 2,
    title: "Žygiai",
    description: "Žygiai Nemuno kilpų regioniniame parke",
    image: "/lovable-uploads/0c8f72f0-64d5-4680-8f0c-c83111bf5298.png",
    href: "/veiklos/zygiai",
    price: "Kaina priklauso nuo žygio"
  },
  {
    id: 3,
    title: "Stovyklos",
    description: "Smagios vasaros stovyklos gamtoje su žirgais",
    image: "/lovable-uploads/66ff45ea-6901-482a-ae10-53331ae1901c.png",
    href: "/veiklos/stovyklos",
    price: "nuo 35€/diena"
  },
  {
    id: 4,
    title: "Fotosesijos",
    description: "Profesionalios fotosesijos su žirgais gamtoje",
    image: "/lovable-uploads/77edc4ed-efa7-49d5-b2aa-c62ab59bf99e.png",
    href: "/veiklos/fotosesijos",
    price: "nuo 30€/val"
  },
  {
    id: 5,
    title: "Edukacijos",
    description: "Susipažinimas su ūkio gyvūnais ir jų priežiūra",
    image: "/lovable-uploads/995c3440-5bb5-4b1b-ab97-60b66717b70e.png",
    href: "/veiklos/edukacijos",
    price: "10€/žmogui"
  },
  {
    id: 6,
    title: "Kiti renginiai",
    description: "Gimtadieniai, klasės išvykos ir specialūs renginiai",
    image: "/lovable-uploads/cf5a81b6-c37a-4f49-bdf9-451ccdb32df3.png",
    href: "/veiklos/kiti-renginiai",
    price: "nuo 5/žmogui€"
  }
];

const ActivitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Mūsų siūlomos veiklos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pasirinkite jums tinkamiausią veiklą ir leiskitės į nuotykį su mūsų žirgais
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity) => (
                <div key={activity.id} className="w-full flex-shrink-0">
                  <div className="relative h-[500px] md:h-[600px]">
                    <img 
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="max-w-2xl">
                        <div className="mb-4">
                          <span className="inline-block bg-sand text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {activity.price}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                          {activity.title}
                        </h3>
                        <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                          {activity.description}
                        </p>
                        <Button asChild variant="hero" size="lg">
                          <Link to={activity.href}>Plačiau</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 rounded-full p-3 transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 shadow-elegant">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
              Pasiruošę naujiems nuotykiams?
            </h3>
            <p className="text-lg text-foreground/80 mb-6 max-w-md mx-auto">
              Rezervuokite savo laiką dabar ir patirkite nepamirštamą jojimo patirtį
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/rezervacijos">Rezervuoti laiką</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCarousel;
