import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">N</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Nibrių Žirgynėlis</h3>
                <p className="text-sm text-primary-foreground/80">Jojimo mokykla</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Šeimos jojimo mokykla ir gyvūnų ūkis, siūlantis aktyvų poilsį gamtoje 
              Nemuno kilpų regioniniame parke.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Veiklos</h4>
            <nav className="space-y-2">
              <Link 
                to="/veiklos/jojimo-pamokos" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Jojimo pamokos
              </Link>
              <Link 
                to="/veiklos/zygiai" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Žygiai
              </Link>
              <Link 
                to="/veiklos/stovyklos" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Stovyklos
              </Link>
              <Link 
                to="/veiklos/fotosesijos" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Fotosesijos
              </Link>
              <Link 
                to="/veiklos/kiti-renginiai" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Kiti renginiai
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontaktai</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-primary-foreground/60" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Nibrių k., Jiezno sen.</p>
                  <p className="text-primary-foreground/80">Prienų r.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/60" />
                <a 
                  href="tel:+370000000" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  +370 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/60" />
                <a 
                  href="mailto:info@nibriuzirgynėlis.lt" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  info@nibriuzirgynėlis.lt
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Darbo laikas</h4>
            <div className="flex items-start space-x-3">
              <Clock size={16} className="mt-1 text-primary-foreground/60" />
              <div className="text-sm">
                <p className="text-primary-foreground/80">Kiekvieną dieną</p>
                <p className="text-primary-foreground font-medium">9:00 – 19:00</p>
              </div>
            </div>
            <div className="mt-6">
              <Link 
                to="/rezervacijos"
                className="inline-block bg-primary-foreground text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Rezervuoti laiką
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Nibrių Žirgynėlis. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;