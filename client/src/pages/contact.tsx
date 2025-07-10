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
import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingContactButton from "@/components/floating-contact-button";
import contactBannerPath from "@assets/contact us banner_1751551516447.png";

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
        title: data.message || "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 1 business day.",
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
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
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
      {/* Hero Banner Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <motion.div
          className="w-full h-full responsive-banner"
          style={{
            backgroundImage: `url('${contactBannerPath}')`,
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </section>
      {/* Contact Form and Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Send us a message
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Want to talk about a project, or just curious about what's possible? Complete the form and someone from our team will be in contact within 1 business day.
              </motion.p>

              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">What services do you need?</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                          <SelectItem value="automation">AI Automation</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics</SelectItem>
                          <SelectItem value="machine-learning">Machine Learning</SelectItem>
                          <SelectItem value="custom-ai">Custom AI Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project or question..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get in Touch
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Ready to transform your business with AI? We're here to help you every step of the way.
              </motion.p>

              <div className="space-y-8">
                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">✉</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">contact@ntimes.ai</p>
                    <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+1 (908) 230-5390</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600">50 Cragwood Rd, Suite #222<br />South Plainfield, NJ – 07080</p>
                  </div>
                </motion.div>

                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pl-[100px] pr-[100px]">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to Get Started?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Transform your business operations with AI solutions designed for growth and efficiency.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}