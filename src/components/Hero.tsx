
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] md:min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/8f3bf9dc-4ddd-4cae-b7ae-7cd4d7b2a5e4.png" 
          alt="Žirgas rudens gamtoje" 
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "50% 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Aktyvus poilsis <br />
              <span className="text-sand">gamtoje</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              Žygiai Nemuno kilpų regioniniame parke su mūsų patikimais žirgais ir 
              patyrusia komanda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild variant="hero" size="lg">
                <Link to="/kontaktai">Rezervuoti</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/veiklos/zygiai">Sužinoti daugiau</Link>
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              <div className="flex items-center space-x-3 bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <div className="flex-shrink-0 w-12 h-12 bg-sand/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/90">Darbo laikas</p>
                  <p className="text-primary-foreground font-semibold">8:00–21:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <div className="flex-shrink-0 w-12 h-12 bg-sand/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/90">Vieta</p>
                  <p className="text-primary-foreground font-semibold">Nibrių k., Prienų r.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-primary-foreground/15 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <div className="flex-shrink-0 w-12 h-12 bg-sand/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/90">Grupės</p>
                  <p className="text-primary-foreground font-semibold">Individualiai ar grupėmis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
