
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/components/HeroSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { SparklesText } from "@/components/ui/sparkles-text";
import { LazyMotion, domAnimation } from "framer-motion";

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
    <LazyMotion features={domAnimation}>
      <div className="font-heebo">
        <HeroSection heroRef={heroRef} scrollToContact={scrollToContact} />
        
        {/* RE/MAX Image Section */}
        <section ref={remaxImageRef} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] opacity-100" />
          
          {/* Real Estate Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-28 h-28 border-4 border-primary rounded-lg transform rotate-6" />
            <div className="absolute top-40 left-20 w-36 h-36 border-4 border-primary rounded-lg transform -rotate-12" />
            <div className="absolute bottom-60 right-1/4 w-32 h-32 border-4 border-primary rounded-lg transform rotate-15" />
            <div className="absolute top-1/3 left-1/3 w-20 h-20 border-t-8 border-l-8 border-primary transform rotate-12" />
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-b-8 border-r-8 border-primary transform -rotate-6" />
            
            {/* House Silhouettes */}
            <svg className="absolute top-16 left-16 w-28 h-28 text-primary opacity-70" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            <svg className="absolute bottom-16 right-16 w-32 h-32 text-primary opacity-70" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" />
            </svg>
            <svg className="absolute top-2/3 right-1/3 w-24 h-24 text-primary opacity-70" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5,10V20H19V10H5M6.5,12H10.5V15.5H6.5V12M17.5,17.5H13V14H17.5V17.5M13,12V13.5H17.5V12H13M3,4H21V8H19V10H21V12H11V8H9V10H3V4M7,6V7H5V6H7M5,8H7V9H5V8Z" />
            </svg>
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-right space-y-6 animate-fade-up relative z-10">
                <div className="flex justify-end">
                  <SparklesText 
                    text="הנדל״ן שלך, החיים שלך" 
                    className="text-3xl md:text-4xl font-bold text-[#1a56a7] bg-white/90 py-2 rounded-lg inline-block px-4 text-right"
                    colors={{ first: "#1a56a7", second: "#FDE1D3" }}
                    sparklesCount={15}
                  />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-[#E5DEFF] via-[#FDE1D3] to-[#D3E4FD] mr-0 rounded-full"></div>
                <p className="text-lg font-medium text-[#221F26] bg-white/90 py-2 rounded-lg px-4 text-right">
                  הניסיון והמקצועיות שלנו לשירותך בכל צעד בדרך לעסקה מוצלחת
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <img 
                  src="/lovable-uploads/e7f70dcb-3404-4920-8d76-aea4a6a13469.png" 
                  alt="RE/MAX Logo" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection />
        <PropertiesSection />
        <ContactSection contactRef={contactRef} />
        <Footer />
      </div>
    </LazyMotion>
  );
};

export default Index;
