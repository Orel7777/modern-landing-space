
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  image: string;
  name: string;
  content: string;
  rating: number;
}

export const AboutSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      image: "/lovable-uploads/f21393f4-30f4-425c-8c8a-837c4ef9166d.png",
      name: "נטלי קופמן",
      content: "מקצועית, אמינה ומסורה. ליחן עזרה לנו למצוא את הבית המושלם!",
      rating: 5
    },
    {
      image: "/lovable-uploads/0166f288-f38c-49a5-949c-1e7b3307fbca.png",
      name: "דני כהן",
      content: "שירות מעולה ומקצועי. ממליץ בחום!",
      rating: 5
    },
    {
      image: "/lovable-uploads/1778ea6e-3bcb-453d-9c31-79a06a1229d4.png",
      name: "מירב לוי",
      content: "ליחן היא המתווכת הכי טובה שיצא לי לעבוד איתה. תודה רבה!",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-[#F1F0FB] text-[#403E43]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
            {/* Testimonials Slider - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative order-2 md:order-1"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: currentTestimonial === index ? 1 : 0,
                      scale: currentTestimonial === index ? 1 : 0.8,
                      zIndex: currentTestimonial === index ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                        <div className="flex justify-end mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-1" />
                          ))}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{testimonial.name}</h3>
                        <p className="text-gray-200">{testimonial.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index ? "bg-white w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* About Text - Left Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-right order-1 md:order-2"
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
          </div>
        </div>
      </div>
    </section>
  );
};
