import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Promo from "./pages/Promo";
import Dealer from "./pages/Dealer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TestRide from "./pages/TestRide";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<ProductsPage />} />
            <Route path="/produk/:slug" element={<ProductDetail />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/dealer" element={<Dealer />} />
            <Route path="/artikel" element={<Blog />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/test-ride" element={<TestRide />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
