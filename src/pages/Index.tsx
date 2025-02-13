import { PropertyCard } from "@/components/PropertyCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Index = () => {
  const heroRef = useRef(null);
  const propertiesTitleRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power4.out"
    });
    gsap.from(propertiesTitleRef.current, {
      scrollTrigger: {
        trigger: propertiesTitleRef.current,
        start: "top 80%"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
    gsap.from(contactRef.current, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 70%"
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out"
    });
  }, []);
  const [filter, setFilter] = useState<'all' | 'sold' | 'available'>('all');
  const allProperties = [{
    image: "/lovable-uploads/03c93028-25f9-4a1f-a9b3-9e3eea1b4ac1.png",
    title: "דו משפחתי 5 חדרים פלוס ממ״ד",
    price: "₪5,200,000",
    location: "שכונת בוכמן",
    details: "5 חדרים | 180 מ״ר | דו משפחתי",
    isSold: false,
    isExclusive: true
  }, {
    image: "/lovable-uploads/1778ea6e-3bcb-453d-9c31-79a06a1229d4.png",
    title: "דו משפחתי",
    price: "₪3,900,000",
    location: "שכונת הכרמים",
    details: "4 חדרים | 140 מ״ר | גינה 100 מ״ר",
    isExclusive: true
  }, {
    image: "/lovable-uploads/1f8d5bb3-5609-49b7-97c4-d76420b597d2.png",
    title: "וילה מפוארת",
    price: "₪8,500,000",
    location: "סביון",
    details: "6 חדרים | 350 מ״ר | מגרש 500 מ״ר",
    isSold: true,
    isExclusive: true
  }, {
    image: "/lovable-uploads/99dfa716-d88a-49a6-b415-37665ea93f58.png",
    title: "דירות גן בפרויקט חדש",
    price: "₪2,900,000",
    location: "רמת גן",
    details: "4 חדרים | 120 מ״ר | גינה 80 מ״ר",
    isExclusive: true
  }, {
    image: "/lovable-uploads/214411a2-0541-4ba4-b053-d59b0fde3761.png",
    title: "בניין בוטיק יוקרתי",
    price: "₪4,100,000",
    location: "תל אביב",
    details: "3 חדרים | 95 מ״ר | קומה 3",
    isExclusive: true
  }, {
    image: "/lovable-uploads/0166f288-f38c-49a5-949c-1e7b3307fbca.png",
    title: "דירת גג מפוארת",
    price: "₪3,800,000",
    location: "גבעתיים",
    details: "4 חדרים | 130 מ״ר | מרפסת 30 מ״ר",
    isExclusive: true
  }];
  const filteredProperties = allProperties.filter(property => {
    if (filter === 'sold') return property.isSold;
    if (filter === 'available') return !property.isSold;
    return true;
  });
  return <div className="font-heebo">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url('/lovable-uploads/0166f288-f38c-49a5-949c-1e7b3307fbca.png')`
      }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            נדל״ן ברמה אחרת
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            מציאת הבית המושלם עבורך היא המשימה שלנו
          </p>
          <Button size="lg" className="text-lg hover:scale-105 transition-transform">
            צור קשר עכשיו
          </Button>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <h2 ref={propertiesTitleRef} className="text-3xl font-bold text-center mb-12">
            נכסים נבחרים
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')} className="min-w-[120px] hover:scale-105 transition-transform">
              הכל
            </Button>
            <Button variant={filter === 'available' ? 'default' : 'outline'} onClick={() => setFilter('available')} className="min-w-[120px] hover:scale-105 transition-transform">
              פנוי למכירה
            </Button>
            <Button variant={filter === 'sold' ? 'default' : 'outline'} onClick={() => setFilter('sold')} className="min-w-[120px] hover:scale-105 transition-transform">
              נמכר
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => <div key={index} className="opacity-0" ref={el => {
            if (el) {
              gsap.to(el, {
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%"
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.2
              });
            }
          }}>
                <PropertyCard {...property} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-secondary/20">
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
                    <p className="text-gray-600">???</p>
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
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
