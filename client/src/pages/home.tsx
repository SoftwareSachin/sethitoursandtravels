import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServiceCategories from "@/components/service-categories";
import TourPackages from "@/components/tour-packages";
import FeaturedDestinations from "@/components/featured-destinations";
import TaxiServices from "@/components/taxi-services";
import CustomerSupport from "@/components/customer-support";
import WhatWeOffer from "@/components/what-we-offer";
import PhotoGallery from "@/components/photo-gallery";
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
      <FeaturedDestinations />
      <TaxiServices />
      <CustomerSupport />
      <WhatWeOffer />
      <PhotoGallery />
      <LatestArticles />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
