
import { lazy, Suspense } from "react";
import posthog from "posthog-js";
import { Toaster } from "@/components/ui/toaster";

posthog.init("phc_m7EbGmyaPkayZenZsO82OljPBzbgYUJz8QInHwBU7xb", {
  api_host: "https://us.i.posthog.com",
  autocapture: true,
  capture_pageview: true,
  capture_pageleave: true,
  session_recording: {
    recordCrossOriginIframes: true,
  },
});
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy load non-home routes
const Contacts = lazy(() => import("./pages/Contacts"));
const RidingLessons = lazy(() => import("./pages/activities/RidingLessons"));
const TrailRiding = lazy(() => import("./pages/activities/TrailRiding"));
const Stovyklos = lazy(() => import("./pages/activities/Stovyklos"));
const Fotosesijos = lazy(() => import("./pages/activities/Fotosesijos"));
const Edukacijos = lazy(() => import("./pages/activities/Edukacijos"));
const KitiRenginiai = lazy(() => import("./pages/activities/KitiRenginiai"));
const Naujienos = lazy(() => import("./pages/Naujienos"));
const SummerCampPopup = lazy(() => import("./components/SummerCampPopup"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <SummerCampPopup />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
