import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import JaipurTaxi from "@/pages/jaipur-taxi";
import JaipurCityTour from "@/pages/jaipur-city-tour";
import RajasthanTour from "@/pages/rajasthan-tour";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jaipur-taxi" component={JaipurTaxi} />
      <Route path="/jaipur-city-tour" component={JaipurCityTour} />
      <Route path="/rajasthan-tour" component={RajasthanTour} />
      <Route component={NotFound} />
    </Switch>
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
