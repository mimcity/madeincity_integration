import ExperiencesSection from "@/components/HomeScreen/ExperiencesSection";
import Hero from "@/components/HomeScreen/Hero";
import InspirationSection from "@/components/HomeScreen/InspirationSection";
import MobileSection from "@/components/HomeScreen/MobileSection";
import PartnersSection from "@/components/HomeScreen/PartnersSection";
import SliderSection from "@/components/HomeScreen/SliderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SliderSection />
      <ExperiencesSection />
      <MobileSection />
      <PartnersSection />
      <InspirationSection />
    </>
  );
}
