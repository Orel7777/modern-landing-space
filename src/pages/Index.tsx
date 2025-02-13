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
    details: "5 חדרים | 180 מ״ר | קומה 20"
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
    details: "6 חדרים | 350 מ״ר | מגרש 500 מ״ר"
  }];

  return (
    <div className="font-heebo">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: `url('/lovable-uploads/7880a348-51a2-4e65-9b34-9627fc7c0e96.png')`
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

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">קצת עלינו</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              עם ניסיון של למעלה מ-15 שנה בשוק הנדל״ן, אנו מתמחים במציאת הנכס
              המושלם עבור לקוחותינו. הידע המקצועי, היחס האישי והמסירות שלנו הם
              המפתח להצלחה שלכם בתהליך רכישת או מכירת נכס.
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <div className="text-center px-6">
                <div className="text-3xl font-bold mb-2">350+</div>
                <div className="text-gray-600">עסקאות מוצלחות</div>
              </div>
              <div className="text-center px-6">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-gray-600">שביעות רצון</div>
              </div>
              <div className="text-center px-6">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-gray-600">שנות ניסיון</div>
              </div>
            </div>
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
