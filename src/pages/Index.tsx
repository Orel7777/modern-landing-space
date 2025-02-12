
import { PropertyCard } from "@/components/PropertyCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      title: "פנטהאוז יוקרתי",
      price: "₪5,200,000",
      location: "הרצליה פיתוח",
      details: "5 חדרים | 180 מ״ר | קומה 20",
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      title: "דירת גן מעוצבת",
      price: "₪3,900,000",
      location: "רמת השרון",
      details: "4 חדרים | 140 מ״ר | גינה 100 מ״ר",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "וילה מפוארת",
      price: "₪8,500,000",
      location: "סביון",
      details: "6 חדרים | 350 מ״ר | מגרש 500 מ״ר",
    },
  ];

  return (
    <div className="font-heebo">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
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
                    <p className="text-gray-600">050-1234567</p>
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
