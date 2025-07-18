import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Audra Kazlauskienė",
    location: "Kaunas",
    rating: 5,
    text: "Nuostabi patirtis su visa šeima! Vaikai pirmą kartą sėdo ant žirgo ir buvo sužavėti. Instruktoriai labai kantrūs ir profesionalūs. Tikrai grįšime dar kartą!",
    image: "👩‍👧‍👦"
  },
  {
    id: 2,
    name: "Mindaugas Petrauskas", 
    location: "Vilnius",
    rating: 5,
    text: "Žygis Nemuno kilpų parke buvo tiesiog fantastiškas! Gamta, žirgai, puiki organizacija. Rekomenduoju visiems, kurie ieško aktyvaus poilsio gamtoje.",
    image: "👨‍💼"
  },
  {
    id: 3,
    name: "Giedrė ir Tomas",
    location: "Šiauliai", 
    rating: 5,
    text: "Fotosesija su žirgais buvo mūsų svajonė! Fotografas profesionalus, žirgai ramūs ir gražūs. Gavome nuostabias nuotraukas, kuriomis didžiuojamės.",
    image: "💑"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ką sako mūsų svečiai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kiekvienas atsiliepimas mums primena, kodėl mes taip mylime savo darbą
          </p>
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

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-2xl px-8 py-6 shadow-soft border border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Patenkintų klientų</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Vidutinis įvertinimas</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Metų patirties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;