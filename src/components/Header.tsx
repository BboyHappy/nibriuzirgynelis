
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navigationItems = [
    { name: "Pagrindinis", href: "/" },
    { name: "Veiklos", href: "/veiklos/jojimo-pamokos" },
    { name: "Rezervacijos", href: "/rezervacijos" },
    { name: "Naujienos", href: "/naujienos" },
    { name: "Kontaktai", href: "/kontaktai" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">N</span>
            </div>
            <span className="font-serif text-xl font-bold text-primary">
              Nibrių Žirgynėlis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg",
                  isActive(item.href) && "bg-primary/10 text-primary border border-primary/20"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+37060643952"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0606 43952</span>
            </a>
            <Button asChild variant="default">
              <Link to="/rezervacijos">Rezervuoti</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg",
                    isActive(item.href) && "bg-primary/10 text-primary border border-primary/20"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border mt-4 pt-4">
                <a 
                  href="tel:+37060643952"
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span>0606 43952</span>
                </a>
                <Button asChild variant="default" className="w-full">
                  <Link to="/rezervacijos" onClick={() => setIsMenuOpen(false)}>
                    Rezervuoti
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
