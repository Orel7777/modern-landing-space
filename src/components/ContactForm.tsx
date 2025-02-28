
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
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CircleCheck } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "שם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^05\d{8}$/, "מספר טלפון לא תקין - חייב להתחיל ב-05 ולהכיל 10 ספרות"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  currentLocation: z.string().min(2, "יש להזין מיקום תקין"),
  interestType: z.enum(["sale", "buy", "landlord", "tenant"], { required_error: "יש לבחור סוג התעניינות" }),
  beforeSale: z.string().optional(),
  soldProperty: z.string().optional(),
  bankApproval: z.boolean().optional(),
  seenProperties: z.string().optional(),
  propertyInterest: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      currentLocation: "",
      interestType: undefined,
      beforeSale: "",
      soldProperty: "",
      bankApproval: false,
      seenProperties: "",
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
                       data.interestType === "buy" ? "קנייה" :
                       data.interestType === "landlord" ? "משכיר" : "שוכר"
        }),
      });

      if (!response.ok) {
        throw new Error('שגיאה בשליחת הטופס');
      }

      // הצגת הודעת הצלחה
      setShowSuccessAlert(true);
      
      toast({
        title: "הודעה נשלחה בהצלחה",
        description: "נחזור אליך בהקדם האפשרי"
      });
      
      form.reset();
      
      // הסתרת ההודעה לאחר 5 שניות
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
      
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
        {showSuccessAlert && (
          <Alert 
            variant="success" 
            className="mb-4 text-emerald-600 border-emerald-500/50"
            icon={<CircleCheck className="text-emerald-500" size={16} strokeWidth={2} />}
          >
            <p className="text-sm">הטופס נשלח בהצלחה ניצור איתך קשר בהקדם</p>
          </Alert>
        )}
        
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
                      <Label htmlFor="landlord">משכיר</Label>
                      <RadioGroupItem value="landlord" id="landlord" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Label htmlFor="tenant">שוכר</Label>
                      <RadioGroupItem value="tenant" id="tenant" />
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
                name="beforeSale"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>האם אתם לפני מכירה?</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className={`text-right ${form.formState.errors.beforeSale ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="ספר לנו על המצב הנוכחי" 
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="soldProperty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>האם כבר מכרתם נכס?</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className={`text-right ${form.formState.errors.soldProperty ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="ספר לנו על המכירה" 
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
                name="seenProperties"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>האם ראיתם כבר נכסים?</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className={`text-right ${form.formState.errors.seenProperties ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="ספר לנו על הנכסים שראיתם" 
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>תאר את הנכס שאתה מחפש</FormLabel>
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
