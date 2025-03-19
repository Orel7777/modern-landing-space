
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Facebook, Instagram } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
  scrollToContact: () => void;
}
export const HeroSection = ({
  heroRef,
  scrollToContact
}: HeroSectionProps) => {
  return <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
          <source src="/lovable-uploads/video.mp4" type="video/mp4" />
          The dream home
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full">
        {/* 3D Card Component in the middle of the video */}
        <div className="mb-20">
          <CardContainer className="w-72 h-[300px]">
            <CardBody className="w-full h-full">
              <CardItem translateZ="100" className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-white/90 rounded-3xl w-full h-full flex flex-col items-center justify-center p-6 relative">
                  {/* RE/MAX Balloon Logo - Moved down and made larger */}
                  <div className="absolute top-12 left-0 w-full flex justify-center">
                    <img src="/lovable-uploads/bea22aae-fcda-422b-a048-34dcd7a466db.png" alt="RE/MAX Unique" className="w-64 object-contain" />
                  </div>
                  
                  {/* FOLLOW YOUR DREAMS text - Moved down */}
                  <div className="mt-44 text-center">
                    <p className="text-3xl font-bold text-[#1a56a7]">FOLLOW</p>
                    <p className="text-3xl font-bold text-[#1a56a7]">YOUR</p>
                    <p className="text-4xl font-bold text-[#e41b13]">DREAMS</p>
                  </div>
                  
                  {/* Hebrew text */}
                  <div className="mt-4 text-center">
                    <p className="text-3xl font-bold text-[#1a56a7]">ליחן</p>
                    <p className="text-3xl font-bold text-[#1a56a7]">ביטון</p>
                    <p className="text-xl font-medium text-[#e41b13]">אשת הנדל״ן שלך</p>
                  </div>
                  
                  {/* Phone number */}
                  <div className="mt-4 text-center">
                    <p className="text-2xl font-bold text-[#1a56a7]">050-5150002</p>
                  </div>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        
        {/* Social media icons at the bottom */}
        <div className="mt-auto mb-10">
          <RainbowButton onClick={scrollToContact} className="text-lg mb-4">
            צור קשר עכשיו
          </RainbowButton>
          <ul className="flex justify-center gap-4 mt-4">
            <li className="group relative">
              <a href="https://wa.me/972505150002" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#25D366]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </li>
            <li className="group relative">
              <a href="https://instagram.com/lihen_biton" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#e4405f]">
                <Instagram className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li className="group relative">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#1877f2]">
                <Facebook className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};
