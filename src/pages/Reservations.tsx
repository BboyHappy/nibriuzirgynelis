import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, MapPin, Clock, Euro } from "lucide-react";
import { format } from "date-fns";
import { lt } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: "jojimo-pamokos",
    title: "Jojimo pamokos",
    price: "nuo 25€ už pamoką",
    description: "Individualios pamokos pradedantiesiems ir pažengusiems",
    duration: "45-60 min",
    icon: "🐎"
  },
  {
    id: "zygiai",
    title: "Žygiai",
    price: "nuo 35€",
    description: "Vadovaujami žygiai Nemuno kilpų regioniniame parke",
    duration: "2-4 val",
    icon: "🌲"
  },
  {
    id: "stovyklos",
    title: "Stovyklos",
    price: "nuo 50€ už dieną",
    description: "Vasaros stovyklos vaikams su žirgų priežiūros mokymu",
    duration: "Pilna diena",
    icon: "⛺"
  },
  {
    id: "fotosesijos",
    title: "Fotosesijos",
    price: "nuo 80€ už valandą",
    description: "Profesionalios fotosesijos su žirgais gamtos aplinkoje",
    duration: "1-2 val",
    icon: "📸"
  },
  {
    id: "kiti-renginiai",
    title: "Kiti renginiai",
    price: "nuo 200€",
    description: "Gimtadieniai, korporatyvai ir specialūs renginiai",
    duration: "Pagal susitarimą",
    icon: "🎉"
  }
];

const Reservations = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participants: "",
    additionalInfo: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedActivity || !selectedDate || !formData.firstName || !formData.email) {
      toast({
        title: "Klaida",
        description: "Prašome užpildyti visus privalomas laukus",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log({
      activity: selectedActivity,
      date: selectedDate,
      ...formData
    });

    setIsSubmitted(true);
    toast({
      title: "Rezervacija sėkminga!",
      description: "Mes susisieksime su jumis per 24 valandas patvirtinti rezervaciją",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-nature flex items-center justify-center p-4">
          <Card className="max-w-md w-full shadow-elegant">
            <CardContent className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Rezervacija gauta!
              </h2>
              <p className="text-foreground/80 mb-6">
                Dėkojame už jūsų rezervaciją. Mes susisieksime su jumis per 24 valandas 
                patvirtinti jūsų rezervaciją ir aptarti detales.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedActivity("");
                  setSelectedDate(undefined);
                  setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    participants: "",
                    additionalInfo: ""
                  });
                }}
                variant="default"
                className="w-full"
              >
                Nauja rezervacija
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-nature py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Rezervuoti laiką
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pasirinkite norimą veiklą ir užpildykite rezervacijos formą. 
              Mes susisieksime su jumis patvirtinti rezervaciją.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Activity Selection */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    1. Pasirinkite veiklą
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className={cn(
                          "border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-soft",
                          selectedActivity === activity.id
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border hover:border-primary/50"
                        )}
                        onClick={() => setSelectedActivity(activity.id)}
                      >
                        <div className="text-2xl mb-2">{activity.icon}</div>
                        <h3 className="font-semibold text-foreground mb-1">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Euro className="w-3 h-3" />
                            <span>{activity.price}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{activity.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date Selection */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    2. Pasirinkite datą
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          format(selectedDate, "PPP", { locale: lt })
                        ) : (
                          <span>Pasirinkite datą</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    3. Kontaktinė informacija
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Vardas *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Pavardė</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <Label htmlFor="phone">Telefono numeris</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participants">Dalyvių skaičius</Label>
                    <Select value={formData.participants} onValueChange={(value) => handleInputChange("participants", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Pasirinkite dalyvių skaičių" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 asmuo</SelectItem>
                        <SelectItem value="2">2 asmenys</SelectItem>
                        <SelectItem value="3-5">3-5 asmenys</SelectItem>
                        <SelectItem value="6-10">6-10 asmenų</SelectItem>
                        <SelectItem value="10+">Daugiau nei 10 asmenų</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Papildoma informacija</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Jūsų patirtis su žirgais, specialūs poreikiai, klausimai..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto px-12">
                  Rezervuoti
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  * Privalomi laukai. Mes susisieksime su jumis per 24 valandas patvirtinti rezervaciją.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reservations;