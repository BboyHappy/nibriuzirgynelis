
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Klaida",
        description: "Prašome užpildyti visus privalomas laukus",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the message to your backend
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Žinutė išsiųsta!",
      description: "Dėkojame už jūsų žinutę. Atsakysime kuo greičiau.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Kontaktai
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Susisiekite su mumis dėl rezervacijų, klausimų ar papildomos informacijos
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Susisiekite su mumis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresas</h3>
                    <p className="text-foreground/80">
                      Nemuno 10, Prienu raj<br />
                      Nibriai, 59420 Prienų rajonas
                    </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefonas</h3>
                      <a 
                        href="tel:+37060643952" 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        +370 606 43952
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">El. paštas</h3>
                      <a 
                        href="mailto:triusiulis@gmail.com" 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        triusiulis@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Darbo laikas</h3>
                      <p className="text-foreground/80">
                        Pirmadienio-sekmadienio<br />
                        8:00 - 21:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">
                    Greitas atsakymas
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Rezervacijoms ir skubiems klausimams skambinkite tiesiogiai. 
                    Elektroninę paštu gautas žinutes atsakome per 24 valandas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="default" className="flex-1">
                      <a href="tel:+37060643952">Skambinti dabar</a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="mailto:triusiulis@gmail.com">Siųsti el. laišką</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">
                  Parašykite mums
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Vardas *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono numeris *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">El. paštas *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Tema</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Pvz., Klausimas dėl jojimo pamokų"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Žinutė *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Parašykite savo žinutę..."
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Siųsti žinutę
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Kaip mus rasti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mes įsikūrę Nibrių kaime, Prienų rajone, Nemuno kilpų regioniniame parke
            </p>
          </div>

          <Card className="shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                    Nibrių žirgynėlis
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    Esame lengvai randami išvažiavę iš Kauno link Prienų. 
                    Pasukus į Nibrių kaimą, pamatysite mūsų ženklus.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">40 km nuo Kauno</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">15 km nuo Prienų</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground/80">Nemuno kilpų reg. parke</span>
                    </div>
                  </div>
                </div>
                  <div className="bg-gradient-warm rounded-xl p-8 text-center">
                  <a 
                    href="https://maps.app.goo.gl/rA13CwSXSixu2pLP8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform"
                  >
                    <div className="text-6xl mb-4">🗺️</div>
                    <h4 className="font-semibold text-foreground mb-2">Atidaryti žemėlapyje</h4>
                    <p className="text-foreground/80 text-sm">
                      Nemuno 10, Prienu raj<br />
                      Nibriai, 59420 Prienų rajonas
                    </p>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
