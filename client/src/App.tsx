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
import TaxiServices from "@/pages/taxi-services";
import RajasthanTaxiService from "@/pages/rajasthan-taxi-service";
import PunjabTaxiService from "@/pages/punjab-taxi-service";
import UttarPradeshTaxiService from "@/pages/uttar-pradesh-taxi-service";
import DelhiTaxiService from "@/pages/delhi-taxi-service";
import CharDhamTaxiService from "@/pages/char-dham-taxi-service";
import JaipurBikanerTaxi from "@/pages/jaipur-bikaner-taxi";

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
