import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Certification from "./pages/Certification";
import German from "./pages/courses/German";
import Spanish from "./pages/courses/Spanish";
import Japanese from "./pages/courses/Japanese";
import Mandarin from "./pages/courses/Mandarin";
import IELTS from "./pages/courses/IELTS";
import GRE from "./pages/courses/GRE";
import TOEFL from "./pages/courses/TOEFL";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/courses/german" element={<German />} />
          <Route path="/courses/spanish" element={<Spanish />} />
          <Route path="/courses/japanese" element={<Japanese />} />
          <Route path="/courses/mandarin" element={<Mandarin />} />
          <Route path="/courses/ielts" element={<IELTS />} />
          <Route path="/courses/gre" element={<GRE />} />
          <Route path="/courses/toefl" element={<TOEFL />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
