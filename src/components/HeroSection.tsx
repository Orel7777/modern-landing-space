
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
  scrollToContact: () => void;
}

export const HeroSection = ({ heroRef, scrollToContact }: HeroSectionProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover">
          <source src="/public/lovable-uploads/video.mp4" type="video/mp4" />
          The dream home
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          נדל״ן ברמה אחרת
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          מציאת הבית המושלם עבורך היא המשימה שלנו
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button size="lg" className="text-lg hover:scale-105 transition-transform" onClick={scrollToContact}>
              צור קשר עכשיו
            </Button>
            {isLoggedIn ? (
              <>
                <Button onClick={() => navigate("/admin")} variant="outline" size="lg" className="text-lg hover:scale-105 transition-transform">
                  <LogIn className="ml-2 h-5 w-5" />
                  ניהול
                </Button>
                <Button onClick={handleLogout} variant="outline" size="lg" className="text-lg hover:scale-105 transition-transform">
                  התנתק
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/auth")} variant="outline" size="lg" className="text-lg hover:scale-105 transition-transform">
                <LogIn className="ml-2 h-5 w-5" />
                התחבר
              </Button>
            )}
          </div>
          <ul className="flex justify-center gap-4">
            <li className="group relative">
              <a href="https://wa.me/972500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#25D366]">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </li>
            <li className="group relative">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group-hover:bg-[#e4405f]">
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
    </section>
  );
};
