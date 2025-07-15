import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FleetShowcase from "@/components/fleet-showcase";
import QuickBooking from "@/components/quick-booking";
import ServicesOverview from "@/components/services-overview";
import ServiceCategories from "@/components/service-categories";
import TourPackages from "@/components/tour-packages";
import ComprehensivePackages from "@/components/comprehensive-packages";
import DestinationHighlights from "@/components/destination-highlights";
import FeaturedDestinations from "@/components/featured-destinations";

import ComprehensiveTaxiServices from "@/components/comprehensive-taxi-services";
import ServiceDetails from "@/components/service-details";
import VehicleFleet from "@/components/vehicle-fleet";
import EnhancedCustomerSupport from "@/components/enhanced-customer-support";

import SafetyFeatures from "@/components/safety-features";
import WhatWeOffer from "@/components/what-we-offer";
import PhotoGallery from "@/components/photo-gallery";
import Testimonials from "@/components/testimonials";
import LatestArticles from "@/components/latest-articles";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import HomeFloatingButtons from "@/components/home-floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FleetShowcase />
      <QuickBooking />
      <ServicesOverview />
      <ServiceCategories />
      <TourPackages />
      <ComprehensivePackages />
      <DestinationHighlights />
      <FeaturedDestinations />
      <ComprehensiveTaxiServices />
      <ServiceDetails />
      <VehicleFleet />
      <EnhancedCustomerSupport />

      <SafetyFeatures />
      <WhatWeOffer />
      <PhotoGallery />
      <Testimonials />
      <LatestArticles />
      <ContactSection />
      <Footer />
      <HomeFloatingButtons />
    </div>
  );
}
