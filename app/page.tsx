import CompanyCarousel from "@/src/components/CompanyCarousel";
import FutureSection from "@/src/components/FutureSection";
import HeroSection from "@/src/components/HeroSection";
import Navbar from "@/src/components/Navbar";
import NotificationBanner from "@/src/components/NotificationBanner";
import { companyLogos } from "@/src/constants/companies";

export default function Home() {
  return (
    <div className="flex flex-col items-start min-h-screen gap-4">
      <Navbar />
      <NotificationBanner />
      <HeroSection />
      <CompanyCarousel logos={companyLogos} />
      <FutureSection />
    </div>
  );
}
