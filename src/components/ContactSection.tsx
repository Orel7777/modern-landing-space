
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import BoxLoader from "@/components/BoxLoader";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

export const ContactSection = ({
  contactRef
}: {
  contactRef: React.RefObject<HTMLElement>;
}) => {
  return <section ref={contactRef} className="py-20 bg-[#F1F0FB]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">צור קשר</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">טלפון</h3>
                  <p className="text-gray-600">050-5150002</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">אימייל</h3>
                  <p className="text-gray-600">lihenb84@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="font-medium mb-1">כתובת</h3>
                  <p className="text-gray-600">תל אביב</p>
                </div>
              </div>
              <div className="flex items-center justify-start space-x-6 space-x-reverse pt-4">
                <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
              <div className="flex justify-start">
                <BoxLoader />
              </div>
              
              {/* תמונה עם אפקט Tilt מתחת לריבוע הכתום */}
              <div className="mt-8">
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-lg max-w-[240px]"
                >
                  <Spotlight
                    className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                    size={248}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <img
                    src="/lovable-uploads/7ca65098-19e0-4a43-8b0c-4e57a31e21b4.png"
                    alt="Business Card"
                    className="w-full rounded-lg object-cover shadow-lg duration-700 group-hover:shadow-xl"
                  />
                </Tilt>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>;
};
