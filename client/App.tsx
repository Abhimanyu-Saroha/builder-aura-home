import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import EcoTokens from "./pages/EcoTokens";
import TourGuide from "./pages/TourGuide";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const location = useLocation();
  // scroll to top on every pathname change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/eco-tokens" element={<EcoTokens />} />
            <Route path="/tour-guides" element={<TourGuide />} />
            <Route path="/ar-vr" element={<PlaceholderPage title="AR/VR Experiences" description="Immersive virtual reality tours of Jharkhand's heritage sites coming soon!" />} />
            <Route path="/heritage-haat" element={<PlaceholderPage title="Heritage Haat" description="Shop authentic local handicrafts and traditional products coming soon!" />} />
            <Route path="/plan-trip" element={<PlaceholderPage title="Plan Your Trip" description="AI-powered trip planning for your Jharkhand adventure coming soon!" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
