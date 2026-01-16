import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";
import "./lib/i18n";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import License from "./pages/License";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/editor/:type" element={<Editor />} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
          <Route path="/licenses" element={<License/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
