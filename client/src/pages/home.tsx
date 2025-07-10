import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Sparkles, Lightbulb, Star, Award, TrendingUp, Quote, Building2, BarChart3, BookOpen, Calendar, Clock, ExternalLink, Brain, Home, Plane, User, Bot, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactPopup from "@/components/contact-popup";
import FloatingContactButton from "@/components/floating-contact-button";
import bannerPath from "@assets/banner.jpg";
import superAgentPath from "@assets/superagent.jpg";
import zipTripPath from "@assets/ziptrip.jpg";
import aboutImagePath from "@assets/about_1751465768009.jpg";
import ntimesLogoPath from "@assets/about_1751468058119.jpg";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Responsive Animated Background */}
        <div 
          className="absolute inset-0 responsive-banner home-banner-mobile transform scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `url('${bannerPath}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-16 h-16 bg-blue-400/20 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-40 right-32 animate-float-delay">
            <div className="w-24 h-24 bg-blue-300/15 rounded-full blur-md"></div>
          </div>
          <div className="absolute bottom-32 left-32 animate-pulse">
            <div className="w-12 h-12 bg-white/10 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-1/2 right-20 animate-bounce-slow">
            <div className="w-8 h-8 bg-blue-200/20 rotate-45"></div>
          </div>
          <div className="absolute bottom-20 right-1/3 animate-spin-slow">
            <div className="w-6 h-6 border-2 border-blue-300/30 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center min-h-screen">
          <motion.div
            className="absolute top-16 left-8 max-w-2xl md:block hidden"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg mt-[-306px] mb-[20px]"
              variants={fadeInUp}
            >
              AI - The New Growth Catalyst{" "}
              <span className="text-white">
                for Business
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md max-w-2xl"
              variants={fadeInUp}
            >
              We make it possible for U.S. companies to automate, reduce cost, and grow faster — thanks to AI-powered solutions created for real-world results.
            </motion.p>
          </motion.div>

          {/* Mobile Hero Text */}
          <motion.div
            className="mobile-hero-text md:hidden block w-full"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="font-bold text-white leading-tight drop-shadow-lg"
              variants={fadeInUp}
            >
              AI - The New Growth Catalyst for Business
            </motion.h1>

            <motion.p
              className="text-white leading-relaxed drop-shadow-md"
              variants={fadeInUp}
            >
              We make it possible for U.S. companies to automate, reduce cost, and grow faster — thanks to AI-powered solutions created for real-world results.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
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
            className="absolute top-1/2 right-20 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  Shaping Tomorrow
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  with Intelligent AI Solutions
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We're on a mission to democratize AI and make intelligent automation accessible to businesses of all sizes. At NTimes.AI, innovation meets practicality to create solutions that drive real results.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Floating Elements around Image */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200/50 rounded-full z-10"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200/50 rotate-45 z-10"
                animate={{ 
                  rotate: [45, 225, 45],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              <motion.img 
                src={aboutImagePath} 
                alt="Shaping Tomorrow with Intelligent AI Solutions" 
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
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
          <motion.div 
            className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"
            animate={{ 
              x: [100, -100, 100],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About NTimes.AI</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              NTIMES.AI for U.S. mid and small-sized companies is a means to access the potential of AI, but without the complexity. By turning AI automation into simple, practical AI/machine learning which delivers real results for every industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>

              <p className="text-gray-600 leading-relaxed">
                Assist businesses in using AI to save time, cut costs, and scale faster.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>

              <p className="text-gray-600 leading-relaxed">
                Be the trusted AI partner of U.S. companies looking to scale smarter.
              </p>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>

              <p className="text-gray-600 leading-relaxed">
                We keep it simple and do it right, ethically and results oriented.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              x: [100, -100, 100],
              y: [0, 50, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"
            animate={{ 
              x: [-100, 100, -100],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600">Innovative AI applications that solve real-world problems</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={superAgentPath}
                    alt="SuperAgent Real Estate AI Platform"
                    className="w-full h-full object-contain"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2,
                      transition: { duration: 0.6 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      filter: "brightness(1.2) saturate(1.3)",
                      transition: { duration: 0.2 }
                    }}
                  />
                  
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Home className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      SuperAgent
                    </motion.h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">An AI software platform for U.S. real estate companies. It brings agents, buyers and sellers together with smart matching and automation.</p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-green-50 via-white to-green-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-80 overflow-hidden">
                  <motion.img 
                    src={zipTripPath} 
                    alt="ZipTrip AI Travel Companion" 
                    className="w-full h-full object-contain"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -2,
                      transition: { duration: 0.6 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      filter: "brightness(1.2) saturate(1.3)",
                      transition: { duration: 0.2 }
                    }}
                  />
                  
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Plane className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ZipTrip
                    </motion.h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    A Voice Activated travel assistant powered by AI that makes it easy to book flights, hotels and plan your vacations in one place. Best for: U.S.-based travel businesses seeking to enhance customer experience.
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 w-0 group-hover:w-full transition-all duration-700"></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Meet Our Founding Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              x: [-50, 50, -50],
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"
            animate={{ 
              x: [50, -50, 50],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mb-6"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meet Our Founding Team
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >Our management team are seasoned veterans of AI, software, and digital marketing. We know what U.S. businesses need in AI, from help with creating scalable platforms to designing campaigns with results.</motion.p>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Srinivas M", role: "Founder", bio: "Visionary leader with extensive experience in AI technology and business strategy, driving innovation and growth at NTimes.AI." },
              { name: "Kiran M", role: "Co-Founder", bio: "Financial strategist ensuring sustainable growth and optimal resource allocation for maximum impact in AI solution development." },
              { name: "Rajesh N", role: "Digital Marketing Manager", bio: "Marketing expert specializing in AI solutions promotion and building strong digital presence for tech products." },
              { name: "Hariharan R B", role: "AI Engineer", bio: "Senior AI engineer developing cutting-edge machine learning solutions and neural network architectures." },
              { name: "Thilak Sai K", role: "AI Engineer", bio: "AI specialist focused on natural language processing and computer vision applications for business solutions." },
              { name: "Mahalakshmi A", role: "AI Engineer", bio: "AI engineer specializing in data analytics and intelligent automation systems for enterprise applications." },
              { name: "Harish A", role: "AI Engineer", bio: "AI engineer developing innovative algorithms and implementing scalable AI solutions for diverse industry applications." },
              { name: "Gowtham E", role: "AI Engineer", bio: "Innovative AI engineer specializing in machine learning pipeline development and model optimization for enterprise solutions." }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="text-center relative overflow-hidden">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Us Button */}
          
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300/10 rounded-full animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rotate-45 animate-spin-slow"></div>
        </div>
        
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
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-12 w-12 text-blue-200 animate-pulse hover:scale-110 transition-transform duration-300" />
              </motion.div>
              
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Business?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Join the AI revolution and unlock your business potential with our cutting-edge solutions.
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
