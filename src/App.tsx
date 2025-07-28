
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import RidingLessons from "./pages/activities/RidingLessons";
import TrailRiding from "./pages/activities/TrailRiding";
import Stovyklos from "./pages/activities/Stovyklos";
import Fotosesijos from "./pages/activities/Fotosesijos";
import Edukacijos from "./pages/activities/Edukacijos";
import KitiRenginiai from "./pages/activities/KitiRenginiai";
import Naujienos from "./pages/Naujienos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontaktai" element={<Contacts />} />
          <Route path="/veiklos/jojimo-pamokos" element={<RidingLessons />} />
          <Route path="/veiklos/zygiai" element={<TrailRiding />} />
          <Route path="/veiklos/stovyklos" element={<Stovyklos />} />
          <Route path="/veiklos/fotosesijos" element={<Fotosesijos />} />
          <Route path="/veiklos/edukacijos" element={<Edukacijos />} />
          <Route path="/veiklos/kiti-renginiai" element={<KitiRenginiai />} />
          <Route path="/naujienos" element={<Naujienos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
