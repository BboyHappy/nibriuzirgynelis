
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun } from "lucide-react";

const SummerCampPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("camp-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleReadMore = () => {
    setOpen(false);
    sessionStorage.setItem("camp-popup-dismissed", "true");
    if (location.pathname === "/naujienos") {
      document.getElementById("vasaros-stovyklos")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/naujienos#vasaros-stovyklos");
    }
  };

  const handleClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      sessionStorage.setItem("camp-popup-dismissed", "true");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-2xl border-primary/20 p-0 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            src="/lovable-uploads/vasaros-stovyklos.png"
            alt="Vasaros stovyklos vaikams"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Sun className="w-5 h-5" />
              <span className="text-sm font-medium">Vasara 2026</span>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4">
          <DialogTitle className="font-serif text-2xl font-bold text-primary mb-3">
            Nepamirštama Vasara Vaikams!
          </DialogTitle>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Kviečiame į stovyklas Nemuno kilpų parke. Jodinėjimas, maudynės, žygiai ir 
            nakvynė glamping palapinėse. Rinktis galima 2, 3 arba 5 dienų stovyklą!
          </p>
          <Button
            onClick={handleReadMore}
            variant="default"
            size="lg"
            className="w-full"
          >
            Skaityti daugiau
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SummerCampPopup;
