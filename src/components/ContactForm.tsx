
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

  const onSubmit = (data: FormData) => {
    toast({
      title: "הודעה נשלחה בהצלחה",
      description: "נחזור אליך בהקדם האפשרי"
    });
    form.reset();
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
                  <Input {...field} className="text-right" placeholder="שם מלא" />
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
                  <Input {...field} type="tel" className="text-right" placeholder="טלפון נייד" />
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
                  <Input {...field} type="email" className="text-right" placeholder="אימייל" />
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
                  <Input {...field} className="text-right" placeholder="מקום מגורים עדכני" />
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
                    className="flex justify-end gap-4 mx-[42px] my-[6px]"
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
                      <Input {...field} className="text-right" placeholder="פרט את מצב הנכס הנוכחי" />
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
                      <Textarea {...field} className="text-right min-h-[100px]" placeholder="תאר את הנכס המבוקש" />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        <Button type="submit" className="w-full">
          שליחה
        </Button>
      </form>
    </Form>
  );
};
