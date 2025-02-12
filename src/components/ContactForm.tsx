
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "הודעה נשלחה בהצלחה",
      description: "נחזור אליך בהקדם האפשרי",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up">
      <div>
        <Input
          placeholder="שם מלא"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="text-right"
          required
        />
      </div>
      <div>
        <Input
          placeholder="טלפון"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="text-right"
          required
        />
      </div>
      <div>
        <Input
          placeholder="אימייל"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="text-right"
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="הודעה"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="text-right min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        שליחה
      </Button>
    </form>
  );
};
