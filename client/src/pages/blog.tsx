import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactPopup from "@/components/contact-popup";
import FloatingContactButton from "@/components/floating-contact-button";
import { PenTool, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
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
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
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
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fresh Ideas, Clear Answers, Real Results.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our blog is your home for practical tips, real-world case studies, and how AI is driving positive business outcomes in America.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* What to Expect Section */}
      <section className="py-20 relative bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
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
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
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
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
              transition={{ 
                initial: { duration: 0.8, type: "spring", stiffness: 200, damping: 20 },
                hover: { duration: 0.3, type: "spring", stiffness: 300, damping: 25 }
              }}
              viewport={{ once: true }}
            >
              <PenTool className="h-12 w-12 text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 20 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What to Expect</span>
            </motion.h2>
            
            <motion.div 
              className="text-left text-lg text-gray-600 mb-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We're developing a content hub for business owners who crave something deeper than theory. You'll find:
              </motion.p>
              <motion.ul 
                className="space-y-3 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  "Plain-English explanations of the AI tools and how they work",
                  "AI success stories of companies that are growing faster with AI", 
                  "How to automate marketing, sales, and operations, in an easy step-by-step guide",
                  "Insider tips from our staff on trends, use cases, and making the most of AI"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ 
                      initial: { duration: 0.5, delay: 0.7 + index * 0.1 },
                      hover: { duration: 0.2, type: "spring", stiffness: 400, damping: 25 }
                    }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <motion.span
                      className="text-blue-500 mr-2 font-bold"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      •
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                Whether you are new to AI or looking to make the leap, or you want to optimize your existing AI capability, 
                we help you move forward with clarity and confidence.
              </motion.p>
            </motion.div>

            {/* Content Categories */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Content Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: "AI for Business", 
                    description: "Learn how AI fits into your sales and marketing and operations",
                    icon: PenTool
                  },
                  { 
                    title: "Automation Guides", 
                    description: "Easy tutorials to automate simple tasks",
                    icon: Calendar
                  },
                  { 
                    title: "Marketing & Lead Gen", 
                    description: "AI to get you more leads, faster",
                    icon: Clock
                  },
                  { 
                    title: "Case Studies", 
                    description: "See what works for businesses like yours",
                    icon: PenTool
                  },
                  { 
                    title: "Tech Simplified", 
                    description: "Without the jargon and obfuscation",
                    icon: Calendar
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h4>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Email Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pl-[100px] pr-[100px]">
            {/* Left Column - Text Content */}
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
                Check back soon or Subscribe for updates
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We're behind the scenes, sharing practical content that gives you the tools to make smarter decisions with AI. Stay tuned!
              </motion.p>
            </motion.div>

            {/* Right Column - Contact Us Button */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 border-white/20"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}