import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useCriticalImagePrefetch, useImagePrefetch } from "@/hooks/use-image-prefetch";
import NotFound from "@/components/NotFound";
import NavigationLoader from "@/components/NavigationLoader";
import Home from "@/pages/home";
import JaipurTaxi from "@/pages/jaipur-taxi";
import JaipurCityTour from "@/pages/jaipur-city-tour";
import RajasthanTour from "@/pages/rajasthan-tour";
import TaxiServices from "@/pages/taxi-services";
import RajasthanTaxiService from "@/pages/rajasthan-taxi-service";
import PunjabTaxiService from "@/pages/punjab-taxi-service";
import UttarPradeshTaxiService from "@/pages/uttar-pradesh-taxi-service";
import DelhiTaxiService from "@/pages/delhi-taxi-service";
import CharDhamTaxiService from "@/pages/char-dham-taxi-service";
import JaipurBikanerTaxi from "@/pages/jaipur-bikaner-taxi";
import LoadingDemo from "@/pages/loading-demo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jaipur-taxi" component={JaipurTaxi} />
      <Route path="/jaipur-city-tour" component={JaipurCityTour} />
      <Route path="/rajasthan-tour" component={RajasthanTour} />
      <Route path="/taxi-services" component={TaxiServices} />
      <Route path="/taxi-services/rajasthan" component={RajasthanTaxiService} />
      <Route path="/taxi-services/punjab" component={PunjabTaxiService} />
      <Route path="/taxi-services/uttar-pradesh" component={UttarPradeshTaxiService} />
      <Route path="/taxi-services/delhi" component={DelhiTaxiService} />
      <Route path="/taxi-services/char-dham" component={CharDhamTaxiService} />
      <Route path="/taxi-services/rajasthan/jaipur-bikaner" component={JaipurBikanerTaxi} />
      <Route path="/loading-demo" component={LoadingDemo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Prefetch critical images immediately for instant loading
  useCriticalImagePrefetch();
  // Prefetch high priority images after initial load
  useImagePrefetch('high');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <NavigationLoader />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
