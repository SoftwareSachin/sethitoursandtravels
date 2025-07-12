import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServiceCategories from "@/components/service-categories";
import TourPackages from "@/components/tour-packages";
import ComprehensivePackages from "@/components/comprehensive-packages";
import PricingPackages from "@/components/pricing-packages";
import DestinationHighlights from "@/components/destination-highlights";
import FeaturedDestinations from "@/components/featured-destinations";
import TaxiServices from "@/components/taxi-services";
import ServiceDetails from "@/components/service-details";
import VehicleFleet from "@/components/vehicle-fleet";
import CustomerSupport from "@/components/customer-support";
import SafetyFeatures from "@/components/safety-features";
import WhatWeOffer from "@/components/what-we-offer";
import PhotoGallery from "@/components/photo-gallery";
import Testimonials from "@/components/testimonials";
import LatestArticles from "@/components/latest-articles";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServiceCategories />
      <TourPackages />
      <ComprehensivePackages />
      <PricingPackages />
      <DestinationHighlights />
      <FeaturedDestinations />
      <TaxiServices />
      <ServiceDetails />
      <VehicleFleet />
      <CustomerSupport />
      <SafetyFeatures />
      <WhatWeOffer />
      <PhotoGallery />
      <Testimonials />
      <LatestArticles />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
