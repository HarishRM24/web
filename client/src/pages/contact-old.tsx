import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Youtube, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingContactButton from "@/components/floating-contact-button";
import contactBannerPath from "@assets/contact us banner_1751548657889.jpg";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
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
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error?.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div 
            className="absolute top-32 right-1/4 w-8 h-8 bg-blue-400/40 rotate-45"
            animate={{ 
              y: [0, -20, 0],
              rotate: [45, 135, 45]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/40 rounded-full"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -40, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            
            {/* Animated Contact Stats */}

          </motion.div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 relative overflow-hidden">
        {/* Section Background Animation */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
            animate={{ 
              x: [-100, 100, -100],
              y: [0, 50, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <motion.div 
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-200/50 rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    Send Us a Message
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Want to talk about a project, or just curious about what's possible?<br/>
                    Complete the form and someone from our team will be in contact within 1 business day.
                  </motion.p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="John"
                            required
                          />
                        </motion.div>
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <motion.div whileFocus={{ scale: 1.02 }}>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Doe"
                            required
                          />
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </motion.div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your Company"
                        />
                      </motion.div>
                    </div>

                    <div>
                      <Label htmlFor="service">What services do you need?</Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                            <SelectItem value="automation">Business Automation</SelectItem>
                            <SelectItem value="integration">AI Integration</SelectItem>
                            <SelectItem value="custom-development">Custom AI Development</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Textarea 
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project or questions..."
                          className="min-h-[120px]"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Sparkles className="mr-2 h-4 w-4" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-2xl font-bold text-gray-900 mb-6"
                  whileHover={{ scale: 1.02, color: "#3B82F6" }}
                  transition={{ duration: 0.3 }}
                >
                  Get in Touch
                </motion.h2>
                
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    description: "Reach us at contact@ntimes.ai",
                    details: "We will get back to you within 24 hours.",
                    color: "bg-gradient-to-br from-green-500 to-green-600"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    description: "Call us at +1 (555) 123-4567",
                    details: "",
                    color: "bg-gradient-to-br from-blue-500 to-blue-600"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    description: "50 Cragwood Rd, Suite #222",
                    details: "South Plainfield, NJ – 07080",
                    color: "bg-gradient-to-br from-purple-500 to-purple-600"
                  }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white relative overflow-hidden">
                      <CardContent className="p-6 relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          animate={{
                            x: [-1000, 1000],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                        
                        <div className="flex items-start relative z-10">
                          <motion.div 
                            className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: 360,
                              boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              {info.title}
                            </motion.h3>
                            <motion.p 
                              className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300"
                              initial={{ opacity: 0.8 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.4 }}
                            >
                              {info.description}
                            </motion.p>
                            {info.details && (
                              <motion.p 
                                className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                              >
                                {info.details}
                              </motion.p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
    </div>
  );
}