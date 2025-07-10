import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/home";
import ProductsPage from "@/pages/products";
import SolutionsPage from "@/pages/solutions";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import BlogPage from "@/pages/blog";
import NotFound from "@/pages/not-found";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Small delay to ensure DOM has updated
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/solutions" component={SolutionsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
