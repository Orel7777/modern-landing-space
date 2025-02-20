import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Testimonial {
  image: string;
  name: string;
  content: string;
  rating: number;
}

export const AboutSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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
    },
    {
      image: "/lovable-uploads/214d8cad-0799-43e3-8d05-b68bae52e025.png",
      name: "רועי ישראלי",
      content: "ליחן מקצועית ואמינה, עזרה לנו למצוא דירה מדהימה במחיר מצוין!",
      rating: 5
    },
    {
      image: "/lovable-uploads/32ad495c-4ef3-4e48-8628-a36e1d0063c5.png",
      name: "שירה אברהם",
      content: "תודה רבה על השירות המקצועי והאישי. מומלצת בחום!",
      rating: 5
    },
    {
      image: "/lovable-uploads/81cbd7d8-7523-423c-9b7e-263ccce666af.png",
      name: "יוסי מזרחי",
      content: "ליחן עזרה לנו להגשים חלום ולמצוא את הבית המושלם. תודה!",
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

  // Calculate which testimonials to show based on currentTestimonial
  const visibleTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length],
    testimonials[(currentTestimonial + 2) % testimonials.length]
  ];

  return (
    <>
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
              {/* Testimonials Grid - Right Side */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative order-2 md:order-1"
              >
                <motion.div 
                  className="grid grid-cols-3 gap-4 h-[240px]"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {visibleTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="relative rounded-xl overflow-hidden h-[240px] cursor-pointer"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      onClick={() => setSelectedImage(testimonial.image)}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-right">
                        <div className="flex justify-end mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400 ml-0.5" />
                          ))}
                        </div>
                        <h3 className="text-sm font-bold mb-1 text-white">{testimonial.name}</h3>
                        <p className="text-xs text-gray-200">{testimonial.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="תמונה מורחבת" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
