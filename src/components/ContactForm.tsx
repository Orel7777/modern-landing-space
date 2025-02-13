
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    currentLocation: "",
    interestType: "",
    soldProperty: "",
    bankApproval: "",
    propertyInterest: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "הודעה נשלחה בהצלחה",
      description: "נחזור אליך בהקדם האפשרי"
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      currentLocation: "",
      interestType: "",
      soldProperty: "",
      bankApproval: "",
      propertyInterest: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">שם מלא</Label>
          <Input
            id="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="text-right mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">טלפון נייד</Label>
          <Input
            id="phone"
            placeholder="טלפון נייד"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="text-right mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">אימייל</Label>
          <Input
            id="email"
            placeholder="אימייל"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="text-right mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="currentLocation">מקום מגורים עדכני</Label>
          <Input
            id="currentLocation"
            placeholder="מקום מגורים עדכני"
            value={formData.currentLocation}
            onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
            className="text-right mt-1"
            required
          />
        </div>

        <div className="space-y-2">
          <Label className="block mb-2">מתעניין ב:</Label>
          <div className="pr-4">
            <RadioGroup
              value={formData.interestType}
              onValueChange={(value) => setFormData({ ...formData, interestType: value })}
              className="flex flex-col space-y-2 bg-slate-50 p-3 rounded-md"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="sale" id="sale" />
                <Label htmlFor="sale">מכירה</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="buy" id="buy" />
                <Label htmlFor="buy">קנייה</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="rent" id="rent" />
                <Label htmlFor="rent">שכירות</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {formData.interestType === "buy" && (
          <div className="space-y-4 border-t pt-4">
            <div>
              <Label htmlFor="soldProperty">האם כבר מכרתם נכס או לפני מכירה?</Label>
              <Input
                id="soldProperty"
                placeholder="פרט את מצב הנכס הנוכחי"
                value={formData.soldProperty}
                onChange={(e) => setFormData({ ...formData, soldProperty: e.target.value })}
                className="text-right mt-1"
              />
            </div>

            <div className="flex items-center flex-row-reverse space-x-2 space-x-reverse">
              <Label htmlFor="bankApproval">יש לי אישור עקרוני מהבנק</Label>
              <Checkbox
                id="bankApproval"
                checked={formData.bankApproval === "yes"}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, bankApproval: checked ? "yes" : "no" })
                }
              />
            </div>

            <div>
              <Label htmlFor="propertyInterest">באיזה נכס אתם מתעניינים?</Label>
              <Textarea
                id="propertyInterest"
                placeholder="תאר את הנכס המבוקש"
                value={formData.propertyInterest}
                onChange={(e) =>
                  setFormData({ ...formData, propertyInterest: e.target.value })
                }
                className="text-right mt-1 min-h-[100px]"
              />
            </div>
          </div>
        )}
      </div>

      <Button type="submit" className="w-full">
        שליחה
      </Button>
    </form>
  );
};
