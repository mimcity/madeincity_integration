import ExperiencesSection from "@/components/ExperiencesSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import SliderSection from "@/components/SliderSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-white ${inter.className}`}>
      <Navbar />
      <Hero />
      <SliderSection />
      <ExperiencesSection />
      <PartnersSection />
    </main>
  );
}
