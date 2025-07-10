import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, User, Target, Lightbulb, Award, ArrowRight, Globe, Rocket, Handshake, Star, Heart, Sparkles, Brain } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactPopup from "@/components/contact-popup";
import FloatingContactButton from "@/components/floating-contact-button";
import logoPath from "@assets/logo.png";
import bannerPath from "@assets/banner.jpg";
import aboutImagePath from "@assets/about_1750861561002.jpg";

export default function AboutPage() {
  const highlights = [
    {
      icon: User,
      title: "Expert Team",
      description: "AI specialists & developers",
      color: "bg-blue-600"
    },
    {
      icon: Globe,
      title: "Global Reach", 
      description: "Worldwide client base",
      color: "bg-green-600"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions",
      color: "bg-purple-600"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Long-term relationships",
      color: "bg-blue-600"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Marketing First",
      description: "We believe AI tools are only valuable if the right people can discover them. We prioritize messaging, UX and real-world results from day one.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Customer First", 
      description: "At the end of the day, all of our decisions begin with the customer need. We collaborate with you to ensure the AI solutions we provide are valuable, easy to adopt, and geared toward lasting success.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Brain,
      title: "AI First",
      description: "We're tech geniuses who know what's what. We leverage well-established AI technologies to develop effective, efficient, and cost-effective systems that stay simple.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const teamMembers = [
    {
      name: "Srinivas M",
      role: "Founder",
      bio: "AI visionary, with deep technical strategy and leadership experience."
    },
    {
      name: "Kiran M",
      role: "Co-Founder",
      bio: "Finance strategist focused on scalable efficiency and resource planning."
    },
    {
      name: "Rajesh N",
      role: "Manager Digital Marketing",
      bio: "10+ years experienced growth marketer who grow digital presence of AI brands."
    },
    {
      name: "Hariharan R B",
      role: "AI Engineer",
      bio: "Senior AI engineer developing cutting-edge machine learning solutions and neural network architectures."
    },
    {
      name: "Thilak Sai K",
      role: "AI Engineer",
      bio: "AI specialist focused on natural language processing and computer vision applications for business solutions."
    },
    {
      name: "Mahalakshmi A",
      role: "AI Engineer",
      bio: "AI engineer specializing in data analytics and intelligent automation systems for enterprise applications."
    },
    {
      name: "Harish A",
      role: "AI Engineer",
      bio: "AI engineer developing innovative algorithms and implementing scalable AI solutions for diverse industry applications."
    },
    {
      name: "Gowtham E",
      role: "AI Engineer",
      bio: "Innovative AI engineer specializing in machine learning pipeline development and model optimization for enterprise solutions."
    }
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                
                <Badge className="mb-4 bg-blue-100 text-blue-800 px-6 py-2 text-sm font-semibold">About NTimes.AI</Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ duration: 0.2 }}
                >
                  Aiding U.S. Businesses
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  in Building Smart with AI
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >At NTIMES.AI, we work to make difficult things easy, to reduce costs, and to scale higher and faster with custom artificial intelligence. It is our goal to enable the understanding and application of AI, so that you can focus on delivering results, not wrestling with tech headaches. We partner with fast-growing businesses, startups, and enterprises throughout the U.S, creating practical AI-powered tools that deliver real impact.</motion.p>
              
              {/* Animated Achievement Badges */}

            </motion.div>
            
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
                alt="About NTimes.AI - AI Technology and Innovation" 
                className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Purpose */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-16 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 40, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-16 w-56 h-56 bg-purple-200/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 35, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          {/* Floating Icons */}
          <motion.div 
            className="absolute top-32 right-1/3 w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Target className="w-6 h-6 text-blue-500" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 left-1/3 w-10 h-10 bg-purple-400/10 rounded-full flex items-center justify-center"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {/* Animated Purpose Icon */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(59, 130, 246, 0.3)",
                    "0 10px 40px rgba(147, 51, 234, 0.4)",
                    "0 10px 30px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.02, 
                color: "#3B82F6",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              Our Purpose
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
            >
              We're not here to simply "apply AI." We're here to solve real business problems, with clear solutions— designed around your goals, teams, and customers.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* What Makes NTIMES.AI Different */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-24 right-12 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, -35, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-24 left-12 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl"
            animate={{ 
              x: [0, 45, 0],
              y: [0, -30, 0],
              scale: [1, 0.85, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div 
            className="absolute top-40 left-1/4 w-6 h-6 bg-purple-400/30 rounded-full"
            animate={{ 
              y: [0, -25, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 right-1/4 w-8 h-8 bg-blue-400/30 rotate-45"
            animate={{ 
              rotate: [45, 225, 45],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 6,
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
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {/* Animated Difference Icon */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(147, 51, 234, 0.3)",
                    "0 10px 40px rgba(59, 130, 246, 0.4)",
                    "0 10px 30px rgba(147, 51, 234, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.02, 
                color: "#3B82F6",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              What Makes NTIMES.AI Different?
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative bg-white rounded-lg p-8 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  We build for results, not hype
                </motion.h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  We create for outreach, not to make a buzz about us. Far too many companies are talking about A.I. in theory. And we deliver real results—faster lead gen, better data decisions, less manual work.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-white rounded-lg p-8 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  We speak your language
                </motion.h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  You do not need to be a technologist to do a job with us. We talk things in plain language, steer you through the process and make AI available.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-white rounded-lg p-8 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.4
                }}
              />
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <Rocket className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  We're agile and adaptive
                </motion.h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  No matter you are start-ups or scaling business, we customise our work to your size, team and objectives.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-white rounded-lg p-8 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }}
              />
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-md"
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: -10,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  <Handshake className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  We're your partner, not just your vendor
                </motion.h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  We are with you from planning to ongoing support and make sure your AI journey becomes a long-term success story.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* What We Stand For: Our Core Principles */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Enhanced Section Background Animation */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-purple-100/15 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-purple-100/15 to-blue-100/15 rounded-full blur-3xl"
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
          
          {/* Floating Principle Icons */}
          <motion.div 
            className="absolute top-40 right-1/4 w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-6 h-6 text-blue-500" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-40 left-1/4 w-10 h-10 bg-purple-400/10 rounded-full flex items-center justify-center"
            animate={{ 
              x: [0, 25, 0],
              y: [0, -35, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <Star className="w-5 h-5 text-purple-500" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            {/* Animated Core Principles Icon */}
            

            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.02, 
                color: "#3B82F6",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              What We Stand For: Our Core Principles
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
            >
              The foundation of everything we do at NTimes.AI
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-white/90 backdrop-blur-sm group-hover:bg-white h-full">
                    <CardContent className="p-8 text-center relative overflow-hidden h-full">
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute top-4 right-4 w-3 h-3 bg-blue-200/50 rounded-full"
                        animate={{ 
                          y: [0, -8, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      
                      <motion.div 
                        className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {value.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {value.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Section Background Animation */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-green-100/30 to-blue-100/30 rounded-full blur-3xl"
            animate={{ 
              x: [100, -100, 100],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 12,
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02, color: "#3B82F6" }}
              transition={{ duration: 0.3 }}
            >
              Meet the People Behind NTIMES.AI
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our leaders and engineering team have extensive experience in AI development, product strategy, marketing and machine learning. We are builders, problem-solvers, growth enablers.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-white/90 backdrop-blur-sm group-hover:bg-white h-full">
                  <CardContent className="p-6 text-center relative overflow-hidden h-full">
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute top-2 right-2 w-2 h-2 bg-blue-200/50 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-blue-600 font-medium mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.role}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {member.bio}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
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
                Join Our Mission
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to work with our team and transform your business with AI?
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