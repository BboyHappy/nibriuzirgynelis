import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Pagrindinis", href: "/" },
    { 
      name: "Veiklos", 
      href: "#",
      submenu: [
        { name: "Jojimo pamokos", href: "/veiklos/jojimo-pamokos" },
        { name: "Žygiai", href: "/veiklos/zygiai" },
        { name: "Stovyklos", href: "/veiklos/stovyklos" },
        { name: "Fotosesijos", href: "/veiklos/fotosesijos" },
        { name: "Edukacijos", href: "/veiklos/edukacijos" },
        { name: "Kiti renginiai", href: "/veiklos/kiti-renginiai" },
      ]
    },
    { name: "Rezervacijos", href: "/rezervacijos" },
    { name: "Naujienos", href: "/naujienos" },
    { name: "Kontaktai", href: "/kontaktai" },
  ];

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-soft">
              <span className="text-2xl font-bold text-primary-foreground">N</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-primary">Nibrių Žirgynėlis</h1>
              <p className="text-sm text-muted-foreground">Jojimo mokykla</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className={cn(
                      "text-foreground hover:text-primary transition-colors font-medium",
                      "group-hover:text-primary"
                    )}>
                      {item.name}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-elegant border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-foreground hover:text-primary transition-colors font-medium",
                      isActivePage(item.href) && "text-primary font-semibold"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100057225738324&locale=lt_LT"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg hover:bg-accent text-primary hover:text-primary/80 transition-colors"
            >
              <Facebook size={24} />
            </a>
            
            <Button asChild variant="hero" size="default" className="hidden md:inline-flex">
              <Link to="/rezervacijos">Rezervuoti</Link>
            </Button>
            
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="px-4 py-2 font-medium text-foreground">{item.name}</div>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-2 text-foreground hover:text-primary transition-colors",
                        isActivePage(item.href) && "text-primary font-semibold"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button asChild variant="hero" size="default" className="w-full">
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