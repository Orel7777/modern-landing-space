
import { PropertyCard } from "@/components/PropertyCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Index = () => {
  const properties = [{
    image: "/lovable-uploads/f529eade-2b26-4667-8ec2-fd2c0b7ad1f9.png",
    title: "פנטהאוז יוקרתי",
    price: "₪5,200,000",
    location: "הרצליה פיתוח",
    details: "5 חדרים | 180 מ״ר | קומה 20",
    isSold: true
  }, {
    image: "/lovable-uploads/1778ea6e-3bcb-453d-9c31-79a06a1229d4.png",
    title: "דירת גן מעוצבת",
    price: "₪3,900,000",
    location: "רמת השרון",
    details: "4 חדרים | 140 מ״ר | גינה 100 מ״ר"
  }, {
    image: "/lovable-uploads/1f8d5bb3-5609-49b7-97c4-d76420b597d2.png",
    title: "וילה מפוארת",
    price: "₪8,500,000",
    location: "סביון",
    details: "6 חדרים | 350 מ״ר | מגרש 500 מ״ר",
    isSold: true
  }, {
    image: "/lovable-uploads/99dfa716-d88a-49a6-b415-37665ea93f58.png",
    title: "דירות גן בפרויקט חדש",
    price: "₪2,900,000",
    location: "רמת גן",
    details: "4 חדרים | 120 מ״ר | גינה 80 מ״ר"
  }, {
    image: "/lovable-uploads/214411a2-0541-4ba4-b053-d59b0fde3761.png",
    title: "בניין בוטיק יוקרתי",
    price: "₪4,100,000",
    location: "תל אביב",
    details: "3 חדרים | 95 מ״ר | קומה 3"
  }, {
    image: "/lovable-uploads/0166f288-f38c-49a5-949c-1e7b3307fbca.png",
    title: "דירת גג מפוארת",
    price: "₪3,800,000",
    location: "גבעתיים",
    details: "4 חדרים | 130 מ״ר | מרפסת 30 מ״ר"
  }];

  return (
    <div className="font-heebo">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('/lovable-uploads/08be7d32-c3a7-49ce-b996-bd232cedd84f.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative container mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            נדל״ן ברמה אחרת
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            מציאת הבית המושלם עבורך היא המשימה שלנו
          </p>
          <Button size="lg" className="text-lg">
            צור קשר עכשיו
          </Button>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">נכסים נבחרים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/20">
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
                    <p className="text-gray-600">contact@realestate.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-medium mb-1">כתובת</h3>
                    <p className="text-gray-600">רחוב הברוש 12, תל אביב</p>
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
    </div>
  );
};

export default Index;
