
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="font-heebo">
      <HeroSection heroRef={heroRef} scrollToContact={scrollToContact} />
      <PropertiesSection />
      <TestimonialsSection />
      <ContactSection contactRef={contactRef} />
    </div>
  );
};

export default Index;
