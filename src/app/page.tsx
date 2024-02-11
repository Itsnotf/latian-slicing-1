import Hero from "../components/Hero";
import Company from "@/components/Company";
import Services from "@/components/Services";
import Destionation from "@/components/Destination";
import TravelPoint from "@/components/TravelPoint";
import Features from "@/components/Features";
import Testimoni from "@/components/Testimoni";
import Vector from "../../public/assets/Vector.svg";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative md:mx-16 lg:mx-32 mx-4 overflow-hidden">
      <Hero />
      <Company />
      <Services />
      <Destionation />
      <TravelPoint />
      <Features />
      <Testimoni />
    </section>
  );
}
