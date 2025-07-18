import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, Star } from "lucide-react";
import horsesImage from "@/assets/about-family.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Apie mus
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              „Nibrių Žirgynėlis" – tai šeimos jojimo mokykla ir gyvūnų ūkis, 
              įsikūręs nuostabioje Nemuno kilpų regioninio parko gamtoje. Jau daugiau 
              nei 10 metų mes dalinamės meile žirgams ir gamtai su šeimomis iš visos Lietuvos.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Mūsų misija – suteikti kiekvienam svečiui nepamirštamą patirtį gamtoje, 
              išmokyti saugiai ir atsakingai bendrauti su žirgais bei parodomi, 
              kad aktyvus poilsis gali būti tiek jaudinantis, tiek ramus.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">Šeimos vertybes puoselejanti aplinka</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">Aukščiausi saugumo standartai</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">Patyrusi ir kvalifikuota komanda</p>
              </div>
            </div>

            <Button asChild variant="default" size="lg">
              <Link to="/kontaktai">Sužinoti daugiau</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={horsesImage} 
                alt="Žirgai ganyklose" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-elegant p-6 border border-border max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">10+ metų patirties</p>
                    <p className="text-sm text-muted-foreground">Jojimo mokymo srityje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;