
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
        className="py-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-90" />
        
        {/* Real Estate Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-lg transform rotate-12" />
          <div className="absolute top-40 right-20 w-40 h-40 border-4 border-primary rounded-lg transform -rotate-6" />
          <div className="absolute bottom-20 left-1/4 w-36 h-36 border-4 border-primary rounded-lg transform rotate-45" />
          
          {/* House Silhouettes */}
          <svg className="absolute top-10 right-10 w-24 h-24 text-primary opacity-10" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <svg className="absolute bottom-20 left-20 w-32 h-32 text-primary opacity-10" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
          </svg>
        </div>
        
        <div className="relative container mx-auto flex justify-center">
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
