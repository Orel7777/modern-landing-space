
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const remaxImageRef = useRef(null);

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

    gsap.from(remaxImageRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: remaxImageRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <div className="font-heebo">
      <HeroSection heroRef={heroRef} scrollToContact={scrollToContact} />
      
      {/* RE/MAX Image Section */}
      <section 
        ref={remaxImageRef}
        className="py-12 flex justify-center items-center bg-gradient-to-b from-slate-900 to-[#D3E4FD]"
      >
        <div className="container mx-auto flex justify-center">
          <Card3D 
            imageSrc="/lovable-uploads/3d536c21-8209-4bb8-8391-12be27e309f2.png" 
            alt="RE/MAX Unique - Lihen Biton" 
          />
        </div>
      </section>
      
      <PropertiesSection />
      <AboutSection />
      <ContactSection contactRef={contactRef} />
      <Footer />
    </div>
  );
};

export default Index;
