
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const testimonials = [
    {
      src: "/lovable-uploads/f21393f4-30f4-425c-8c8a-837c4ef9166d.png",
      name: "נטלי קופמן",
      quote: "מקצועית, אמינה ומסורה. ליחן עזרה לנו למצוא את הבית המושלם!"
    },
    {
      src: "/lovable-uploads/0166f288-f38c-49a5-949c-1e7b3307fbca.png",
      name: "דני כהן",
      quote: "שירות מעולה ומקצועי. ממליץ בחום!"
    },
    {
      src: "/lovable-uploads/1778ea6e-3bcb-453d-9c31-79a06a1229d4.png",
      name: "מירב לוי",
      quote: "ליחן היא המתווכת הכי טובה שיצא לי לעבוד איתה. תודה רבה!"
    },
    {
      src: "/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png",
      name: "רועי ישראלי",
      quote: "ליחן מקצועית ואמינה, עזרה לנו למצוא דירה מדהימה במחיר מצוין!"
    },
    {
      src: "/lovable-uploads/32ad495c-4ef3-4e48-8628-a36e1d0063c5.png",
      name: "שירה אברהם",
      quote: "תודה רבה על השירות המקצועי והאישי. מומלצת בחום!"
    },
    {
      src: "/lovable-uploads/81cbd7d8-7523-423c-9b7e-263ccce666af.png",
      name: "יוסי מזרחי",
      quote: "ליחן עזרה לנו להגשים חלום ולמצוא את הבית המושלם. תודה!"
    }
  ];

  return (
    <section className="py-20 bg-[#F1F0FB] text-[#403E43]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-4"
            >
              ליחן ביטון: נדל"ן עם תוצאות
            </motion.h2>
            <div className="flex justify-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-right order-2 md:order-1"
            >
              <p className="leading-relaxed">
                ליחן ביטון היא נדלניסטית מנוסה ומקצועית עם רקורד עשיר בתחום הנדל"ן, המתמחה במכירות, קניות והשכרות נכסים. הנדל"ן הוא לא רק העבודה שלה – זה העולם שלה. היא חיה את השטח, מכירה לעומק את השוק ויודעת לתת את המענה המקצועי ביותר לכל לקוח.
              </p>
              
              <p className="leading-relaxed">
                עם רשת רחבה של אנשי מקצוע, כולל יועצי משכנתאות, יועצי מס, עורכי דין, שמאים ואדריכלים, לכן מלווה את לקוחותיה לכל אורך הדרך ומספקת פתרונות מותאמים אישית לכל צורך. היא מאמינה בשירות אישי, מקצועיות בלתי מתפשרת וליווי צמוד לכל עסקה – עד לפרטים הקטנים ביותר.
              </p>
              
              <p className="font-medium text-lg">
                כאשר אתם מחפשים ליווי אמין בעולם הנדל"ן – ליחן ביטון היא הכתובת שלכם.
              </p>
            </motion.div>

            <div className="order-1 md:order-2">
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
