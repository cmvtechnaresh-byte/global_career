import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[+]?[\d\s-]{10,15}$/, "Please enter a valid phone number"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const courses = [
  { value: "german", label: "German Language" },
  { value: "spanish", label: "Spanish Language" },
  { value: "japanese", label: "Japanese Language" },
  { value: "mandarin", label: "Mandarin Language" },
  { value: "ielts", label: "IELTS Preparation" },
  { value: "gre", label: "GRE Preparation" },
  { value: "toefl", label: "TOEFL Preparation" },
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-12 border border-border shadow-medium"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-navy-dark" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Thank You for Your Interest!
            </h3>
            <p className="text-muted-foreground mb-6">
              We've received your enrollment inquiry. Our counselor will contact you within 24 hours to discuss your learning journey.
            </p>
            <Button variant="gold" onClick={() => setIsSubmitted(false)}>
              Submit Another Inquiry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Start Your <span className="gradient-text">Learning Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to master a new language or ace your English exam? Fill out the form and our counselors will help you choose the perfect program for your goals.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email Us", value: "info@myskill.edu" },
                { icon: Phone, title: "Call Us", value: "+91 98765 43210" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-medium">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Enter your full name"
                      className={`pl-10 ${errors.name ? "border-destructive" : ""}`}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className={`pl-10 ${errors.email ? "border-destructive" : ""}`}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`pl-10 ${errors.phone ? "border-destructive" : ""}`}
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Course of Interest
                  </label>
                  <div className="relative">
                    <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                      <SelectTrigger className={errors.course ? "border-destructive" : ""}>
                        <BookOpen className="w-5 h-5 text-muted-foreground mr-2" />
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.course && <p className="text-destructive text-sm mt-1">{errors.course}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <Textarea
                      placeholder="Tell us about your learning goals..."
                      rows={4}
                      className={errors.message ? "border-destructive" : ""}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
