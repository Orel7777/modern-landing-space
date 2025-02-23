
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const testimonials = [
    {
      src: "/lovable-uploads/e69edb93-f9e6-4355-bcff-ca1ed1a9ba1d.png",
      name: "נטלי קופמן",
      quote: "יש מישהו שמעוניין לקחת שיש מטבח?"
    },
    {
      src: "/lovable-uploads/6f17495b-46b8-4452-b23a-598c49f41c6d.png",
      name: "חן נזריאן אמיר",
      quote: "טוב אז אחרי חיפושים של כמה חודשים טובים לדירה שכל כך רצינו, דיברנו ונפגשנו עם כמה מתווכים עד שהגענו לליחן המדהימה."
    },
    {
      src: "/lovable-uploads/c265b691-63ad-46a9-be19-5c495a45bd58.png",
      name: "אלי",
      quote: "שבת שלום, אכלנו הערב ארוחה חלבית ופתחנו את הגבינות שהיו ממש טעימות."
    },
    {
      src: "/lovable-uploads/b6f8d4fa-3785-4f87-8a9c-b838bc4cb4d5.png",
      name: "נטלי קופמן",
      quote: "טוב אז אחרי חיפושים של כמה חודשים טובים לדירה שכל כך רצינו, דיברנו ונפגשנו עם כמה מתווכים."
    }
  ];

  return (
    <section className="py-20 bg-[#F1F0FB] text-[#403E43]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-xl">
              <motion.img 
                src="/lovable-uploads/58ec3ff6-ac03-46ab-9f3a-790067948d58.png"
                alt="ליחן ביטון"
                className="w-full h-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
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
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-right mb-20"
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

          <div className="w-full max-w-5xl mx-auto">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};
