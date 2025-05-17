import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import KeyMetrics from "@/components/KeyMetrics";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
    </>
  );
}
