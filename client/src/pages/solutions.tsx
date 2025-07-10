import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Cog, Brain, Target, Workflow, Zap, CheckCircle, Sparkles, Star, Award, Smartphone, Lightbulb, BookOpen, TrendingUp, BarChart3, Plug, MessagesSquare, BarChart2, Search, PenTool, Mail, Filter, Layers, Cpu, Rocket, Calendar } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactPopup from "@/components/contact-popup";
import FloatingContactButton from "@/components/floating-contact-button";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Plug,
      title: "AI Integration Services", 
      description: "Integrate with your existing systems, without having to reinvent everything.",
      features: [
        "Custom AI module development",
        "API integration and backend support",
        "Support for legacy system upgrades",
        "Ongoing performance monitoring"
      ],
      color: "blue",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Automate your workflow and save time.",
      features: [
        "Document handling and processing",
        "AI-driven customer support",
        "Data entry automation", 
        "Task management automation"
      ],
      color: "green", 
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Cpu,
      title: "Enabling AI Features",
      description: "Plug and play with the AI capability and make your product smarter.",
      features: [
        "Image and voice recognition",
        "Natural language processing (NLP)",
        "Machine learning model integration",
        "Predictive analytics features"
      ],
      color: "purple",
      gradient: "from-purple-50 to-purple-100", 
      iconBg: "bg-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: BarChart2,
      title: "AI-Powered Analytics",
      description: "Transform raw data into actual intelligence with visual dashboards and reports.",
      features: [
        "Real-time data tracking",
        "Custom dashboards",
        "Visual insights for decision-makers"
      ],
      color: "orange",
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-600", 
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      icon: Layers,
      title: "Custom AI Applications",
      description: "Tap AI solutions designed for your unique business needs.",
      features: [
        "Business-specific model development",
        "Prototype and testing",
        "Long-term support and updates"
      ],
      color: "red",
      gradient: "from-red-50 to-red-100",
      iconBg: "bg-red-600",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: Lightbulb,
      title: "AI Consulting & Strategy",
      description: "Not sure where to start? We'll guide your AI journey.",
      features: [
        "AI readiness evaluation",
        "Strategy and planning",
        "Tech roadmap creation"
      ],
      color: "teal",
      gradient: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-6 py-2 text-sm font-semibold">AI Solutions</Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >AI Solutions That Simplify Business</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We empower U.S. businesses to work smarter, and better with intuitive AI solutions that address real-world business challenges.
            </motion.p>
            
            {/* Animated Stats */}

          </motion.div>
        </div>
      </section>
      {/* Solutions */}
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
              Our Comprehensive Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our AI studio builds AI services that are designed to solve real problems—from automating your workflows, to adding smart features to your products.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${solution.gradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/90 backdrop-blur-sm group-hover:bg-white h-full`}>
                  <CardContent className="p-8 h-full relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                      <solution.icon className="w-full h-full" />
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute top-4 left-4 w-3 h-3 bg-blue-200/50 rounded-full"
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
                    
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 ${solution.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <solution.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {solution.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-gray-600 mb-6 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {solution.description}
                    </motion.p>
                    
                    {/* Features */}
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Core Solution Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              whileHover={{ scale: 1.02, color: "#3B82F6" }}
              transition={{ duration: 0.3 }}
            >
              Our Core Solution Areas
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Here's why our AI services work for the modern U.S. company:
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Rocket className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    AI Innovation
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Applied use of bleeding edge tech, not just theory
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Especially for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Especially for Mobile
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Works great on mobile devices
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Execution */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Execution
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    High-performance, scalable, reliable implementations
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Comprehensive Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Comprehensive AI Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We provide a full range of AI-enabled services to assist you with all aspects of customer acquisition, conversion, and accelerated growth.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Lead Generation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-blue-100/50 group-hover:from-blue-100 group-hover:to-blue-200/50">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Search className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    Lead Generation
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      B2B and small business leads generation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Location-specific targeting (e.g., U.S., regional)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Startups and digital agencies supported
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      AI powered-tools for more intelligent automation and lead scoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Content Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-green-50 to-green-100/50 group-hover:from-green-100 group-hover:to-green-200/50">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PenTool className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Content Marketing
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      AI-generated content strategies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Blog content and landing pages written with SEO in mind
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      B2B content campaigns
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Personalized storytelling
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Performance tracking
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Content marketing expert USA
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lead Nurturing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-purple-100/50 group-hover:from-purple-100 group-hover:to-purple-200/50">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Lead Nurturing
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Automated follow-up workflows
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      AI-driven email campaigns
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Personalization at scale
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Lead scoring and engagement analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Lead Funnels */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-orange-100/50 group-hover:from-orange-100 group-hover:to-orange-200/50">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Filter className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    Lead Funnels
                  </h3>
                  
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Complete funnel strategies
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Sales funnel automation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      Conversion-focused landing pages
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      CRM and marketing tool integration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
          
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rotate-45"
            animate={{ 
              rotate: [45, 405, 45],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
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
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16"
                >
                  <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Want to Know What AI Can Do For Your Business?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Here's Why AI solutions will improve your workflows, drive leads, and scale your revenue — without adding to your workload.
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