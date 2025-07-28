
import { useState } from "react";
import { Star, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Marija Tamkevičiutė",
    location: "Vilnius",
    rating: 5,
    text: "Dėkojame už nuostabų laiką Nibrių žirgynėlis  už be galo draugiškus gyvūnus (o jų visa įvairovė: avytės, žirgai, vištos, žąsys, antys, kalakutai, haskiai..) atskiras ačiū žąsims, nesitikėjome, kad bus tokios draugiškos (net vaikai galėjo glostyti). Labai maloni nuostabi šeimininkų pora 🤗❤️ Dėkojame už šiltą priėmimą ir nuoširdų rūpestį.",
    image: "👩‍👧‍👦"
  },
  {
    id: 2,
    name: "Daiva Brazdziuniene", 
    location: "Vilnius",
    rating: 5,
    text: "Mano šešiametė buvo dienos stovykloje. 35 € 9–17 val. su maitinimu. Labai patiko, daug veiklos ir įspūdžių! Labai rekomenduoju!",
    image: "👩"
  },
  {
    id: 3,
    name: "Jovita Galeckaite",
    location: "Kaunas", 
    rating: 5,
    text: "Draugiški ir svetingi šeimininkai. Ūkis toliau netoli ežero, erdvios apylinkės. Atvykus  vaikams patiko pajodinėti  asiliuku. Aplinkui laisvai vaikšto vištos, galima palesinti. Yra pavėsinė, tad ir gimtadienį susiorganizuoti patogu. Puiki galimybė jodinėti arkliais. Organizuoja ir stovyklas.",
    image: "💑"
  }
];

const galleryImages = [
  {
    src: "/lovable-uploads/0dde3f9e-434f-415e-bdec-446c9bae5878.png",
    alt: "Žirgai pievoje"
  },
  {
    src: "/lovable-uploads/0747d877-85d6-4cb9-a38c-1b6e47494913.png",
    alt: "Vaikai su viščiuku"
  },
  {
    src: "/lovable-uploads/38646c9a-03d4-4093-a77f-ddb70ad1ecb0.png",
    alt: "Edukacijos su ožkomis"
  },
  {
    src: "/lovable-uploads/c24d2a48-a839-40f2-8861-c77ed487ee6a.png",
    alt: "Edukacijos miške"
  },
  {
    src: "/lovable-uploads/5e81cc57-acf8-4b03-8c68-cfeac591832e.png",
    alt: "Jojimas vandenyje"
  },
  {
    src: "/lovable-uploads/4dcb0c70-4a02-4d5a-a09b-d51c1704d644.png",
    alt: "Žygis su žirgais"
  },
  {
    src: "/lovable-uploads/770c6fb7-8745-4ebc-9bde-8f02e15f9da3.png",
    alt: "Ūkio gyvūnai"
  },
  {
    src: "/lovable-uploads/10f69813-a6b8-40e7-a599-428a24c50036.png",
    alt: "Stovykla prie ežero"
  },
  {
    src: "/lovable-uploads/d1860f45-3d54-41d6-a0b8-de7b5926b354.png",
    alt: "Jojimo pamokos"
  },
  {
    src: "/lovable-uploads/0c8f72f0-64d5-4680-8f0c-c83111bf5298.png",
    alt: "Žygiai miške su žirgais"
  },
  {
    src: "/lovable-uploads/66ff45ea-6901-482a-ae10-53331ae1901c.png",
    alt: "Stovyklos - vaikai pramogauja"
  },
  {
    src: "/lovable-uploads/995c3440-5bb5-4b1b-ab97-60b66717b70e.png",
    alt: "Vaikai su asilėliu - edukacijos"
  },
  {
    src: "/lovable-uploads/cf5a81b6-c37a-4f49-bdf9-451ccdb32df3.png",
    alt: "Tinklinio žaidimas stovykloje"
  }
];

const TestimonialsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Ką sako mūsų svečiai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kiekvienas atsiliepimas mums primena, kodėl mes taip mylime savo darbą
            </p>
          </div>
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="whitespace-nowrap"
            >
              <a
                href="https://share.google/TEE5WiqtcqaCOW9SN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Skaityti daugiau atsiliepimų Google Maps
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Google Reviews Button */}
        <div className="text-center mt-8 md:hidden">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full"
          >
            <a
              href="https://share.google/TEE5WiqtcqaCOW9SN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              Skaityti daugiau atsiliepimų Google Maps
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              Mūsų nuotraukos
            </h3>
            <p className="text-muted-foreground">Akimirkos iš mūsų veiklų</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
