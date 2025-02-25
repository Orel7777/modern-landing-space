
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

type SubmissionStatus = 'new' | 'in_progress' | 'completed' | 'cancelled';

type Submission = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  current_location: string;
  interest_type: string;
  status: SubmissionStatus;
  notes?: string;
};

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchSubmissions = async () => {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .single();

    if (!profile || profile.role !== 'admin') {
      toast({
        variant: "destructive",
        title: "אין הרשאת גישה",
        description: "רק מנהלים יכולים לגשת לדף זה"
      });
      navigate('/');
      return;
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "שגיאה בטעינת הנתונים",
        description: "אנא נסה שוב מאוחר יותר"
      });
      return;
    }

    // וידוא שהסטטוס תקין לפני השמת הנתונים
    const validSubmissions = (data || []).map(submission => ({
      ...submission,
      status: (submission.status || 'new') as SubmissionStatus
    }));

    setSubmissions(validSubmissions);
    setLoading(false);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const updateSubmissionStatus = async (id: string, status: SubmissionStatus) => {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "שגיאה בעדכון הסטטוס",
        description: "אנא נסה שוב"
      });
      return;
    }

    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, status } : sub
    ));

    toast({
      title: "סטטוס עודכן בהצלחה"
    });
  };

  const updateNotes = async (id: string) => {
    const notes = editingNotes[id];
    const { error } = await supabase
      .from('contact_submissions')
      .update({ notes })
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "שגיאה בעדכון ההערות",
        description: "אנא נסה שוב"
      });
      return;
    }

    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, notes } : sub
    ));

    toast({
      title: "הערות עודכנו בהצלחה"
    });
  };

  if (loading) {
    return <div className="container mx-auto p-8 text-center">טוען...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-right">ניהול פניות</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">תאריך</TableHead>
              <TableHead className="text-right">שם</TableHead>
              <TableHead className="text-right">טלפון</TableHead>
              <TableHead className="text-right">אימייל</TableHead>
              <TableHead className="text-right">מיקום</TableHead>
              <TableHead className="text-right">סוג התעניינות</TableHead>
              <TableHead className="text-right">סטטוס</TableHead>
              <TableHead className="text-right">הערות</TableHead>
              <TableHead className="text-right">פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell>
                  {new Date(submission.created_at).toLocaleDateString('he-IL')}
                </TableCell>
                <TableCell>{submission.name}</TableCell>
                <TableCell>{submission.phone}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.current_location}</TableCell>
                <TableCell>
                  {submission.interest_type === 'buy' ? 'קנייה' :
                   submission.interest_type === 'sale' ? 'מכירה' :
                   submission.interest_type === 'landlord' ? 'משכיר' : 'שוכר'}
                </TableCell>
                <TableCell>
                  <Select
                    value={submission.status}
                    onValueChange={(value: SubmissionStatus) => updateSubmissionStatus(submission.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">חדש</SelectItem>
                      <SelectItem value="in_progress">בטיפול</SelectItem>
                      <SelectItem value="completed">הושלם</SelectItem>
                      <SelectItem value="cancelled">בוטל</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Textarea
                    value={editingNotes[submission.id] ?? submission.notes ?? ''}
                    onChange={(e) => setEditingNotes({
                      ...editingNotes,
                      [submission.id]: e.target.value
                    })}
                    className="min-h-[80px] w-48"
                    placeholder="הוסף הערות..."
                  />
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => updateNotes(submission.id)}
                    size="sm"
                    variant="outline"
                  >
                    שמור הערות
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
