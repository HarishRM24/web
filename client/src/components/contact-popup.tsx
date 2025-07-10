import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface ContactPopupProps {
  children: React.ReactNode;
}

export default function ContactPopup({ children }: ContactPopupProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message || "We'll get back to you within 1 business day.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
      setOpen(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error?.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@ntimes.ai",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "50 Cragwood Rd, Suite #222 South Plainfield, NJ – 07080",
      color: "bg-purple-500"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            Get in Touch
          </DialogTitle>
          <p className="text-gray-600">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Interest</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                    <SelectItem value="automation">Business Automation</SelectItem>
                    <SelectItem value="custom-ai">Custom AI Development</SelectItem>
                    <SelectItem value="lead-generation">Lead Generation</SelectItem>
                    <SelectItem value="content-marketing">Content Marketing</SelectItem>
                    <SelectItem value="lead-nurturing">Lead Nurturing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {contactMutation.isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`${info.color} w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600 mb-4">
                Need more detailed information? Visit our full contact page.
              </p>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  Visit Contact Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}