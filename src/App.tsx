import { useEffect, useState } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Editor from "./pages/Editor";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import License from "./pages/License";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader"; 
import "./lib/i18n";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      toast.error("Right-click is disabled for security reasons!", {
        position: "bottom-right",
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        toast.error("DevTools access is restricted!");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner closeButton richColors />
        {loading && <Loader />}
        <BrowserRouter>
          <ScrollToTop /> 
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/editor/:type" element={<Editor />} />
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/blogs/:id" element={<BlogsDetails />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/license" element={<License />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;