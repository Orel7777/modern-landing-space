
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^05\d{8}$/, "מספר טלפון לא תקין - חייב להתחיל ב-05 ולהכיל 10 ספרות"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  currentLocation: z.string().min(2, "יש להזין מיקום תקין"),
  interestType: z.enum(["sale", "buy", "rent"], { required_error: "יש לבחור סוג התעניינות" }),
  soldProperty: z.string().optional(),
  bankApproval: z.boolean().optional(),
  propertyInterest: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      currentLocation: "",
      interestType: undefined,
      soldProperty: "",
      bankApproval: false,
      propertyInterest: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // שליחת הנתונים ל-Google Apps Script
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data,
          bankApproval: data.bankApproval ? "כן" : "לא",
          interestType: data.interestType === "sale" ? "מכירה" : 
                       data.interestType === "buy" ? "קנייה" : "שכירות"
        }),
      });

      if (!response.ok) {
        throw new Error('שגיאה בשליחת הטופס');
      }

      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "נחזור אליך בהקדם האפשרי"
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסו שוב מאוחר יותר"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-up">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>שם מלא</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className={`text-right ${form.formState.errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="שם מלא" 
                  />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>טלפון נייד</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="tel" 
                    className={`text-right ${form.formState.errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="טלפון נייד" 
                  />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>אימייל</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email" 
                    className={`text-right ${form.formState.errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="אימייל" 
                  />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>מקום מגורים עדכני</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className={`text-right ${form.formState.errors.currentLocation ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="מקום מגורים עדכני" 
                  />
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>מתעניין ב:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className={`flex justify-end gap-4 mx-[42px] my-[6px] ${form.formState.errors.interestType ? 'text-red-500' : ''}`}
                  >
                    <div className="flex items-center gap-1">
                      <Label htmlFor="sale">מכירה</Label>
                      <RadioGroupItem value="sale" id="sale" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Label htmlFor="buy">קנייה</Label>
                      <RadioGroupItem value="buy" id="buy" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Label htmlFor="rent">שכירות</Label>
                      <RadioGroupItem value="rent" id="rent" />
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-right" />
              </FormItem>
            )}
          />

          {form.watch("interestType") === "buy" && (
            <div className="space-y-4 border-t pt-4">
              <FormField
                control={form.control}
                name="soldProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>האם כבר מכרתם נכס או לפני מכירה?</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className={`text-right ${form.formState.errors.soldProperty ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="פרט את מצב הנכס הנוכחי" 
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankApproval"
                render={({ field }) => (
                  <FormItem className="flex flex-row-reverse items-center justify-end gap-2">
                    <FormLabel>יש לי אישור עקרוני מהבנק</FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={form.formState.errors.bankApproval ? 'border-red-500' : ''}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>באיזה נכס אתם מתעניינים?</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        className={`text-right min-h-[100px] ${form.formState.errors.propertyInterest ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="תאר את הנכס המבוקש" 
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "שולח..." : "שליחה"}
        </Button>
      </form>
    </Form>
  );
};
