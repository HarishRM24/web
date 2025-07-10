import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Plane, MapPin, Calendar, Users, Search, Check, Sparkles, Star, Zap, Brain, Bot, Smartphone, Target, TrendingUp, BarChart3, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactPopup from "@/components/contact-popup";
import FloatingContactButton from "@/components/floating-contact-button";
import superAgentPath from "@assets/superagent.jpg";
import zipTripPath from "@assets/ziptrip.jpg";

export default function ProductsPage() {
  const products = [
    {
      name: "SuperAgent",
      category: "AI For Real Estate Agents",
      categoryColor: "bg-blue-100 text-blue-800",
      image: superAgentPath,
      description: "SuperAgent is optimized for the U.S. real estate market. It allows agents, buyers and sellers to achieve much faster connection with smart-matching, real-time insights and automated lead workflows. From creating listings to completing transactions, SuperAgent makes it easy.",
      features: [
        "Smart property search with filters",
        "Location-based matching for leads",
        "Mobile-ready design for on-the-go access",
        "Real-time market analytics and pricing",
        "Automated lead generation and follow-ups",
        "Streamlined transaction tracking",
        "Property recommendations powered by AI",
        "Market trends and area intelligence"
      ],
      detailedFeatures: [
        { icon: Search, text: "Smart Property Search" },
        { icon: MapPin, text: "Location Intelligence" },
        { icon: Users, text: "Agent Matching" },
        { icon: Home, text: "Market Analysis" }
      ],

    },
    {
      name: "ZipTrip", 
      category: "Your AI-driven Travel Companion!",
      categoryColor: "bg-green-100 text-green-800",
      image: zipTripPath,
      description: "ZipTrip helps business owners and their teams organize trips without the headache. From booking flights and hotels to creating customized travel itineraries, ZipTrip is powered by AI so you can travel with confidence.",
      features: [
        "AI-based trip planning and suggestions",
        "One-stop shop for booking flights and hotels, even restaurant reservations",
        "Real-time travel alerts and updates",
        "Voice-activated booking assistant",
        "Local recommendations tailored to preferences",
        "Works across devices and platforms"
      ],
      detailedFeatures: [
        { icon: Plane, text: "Flight Booking" },
        { icon: Home, text: "Hotel Reservations" },
        { icon: Calendar, text: "Trip Planning" },
        { icon: MapPin, text: "Local Recommendations" }
      ],

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
            className="absolute bottom-32 right-10 w-6 h-6 bg-purple-400/40 rounded-full"
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
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>
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
              >
                Truly Intelligent AI Tools To Solve Real Business Problems
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our products harness the power of AI to let U.S. businesses tackle the nitty-gritty tasks of each day, be it closing real estate transactions faster, or streamlining business travel.
            </motion.p>
            
            {/* Animated Feature Icons */}

          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div 
                key={product.name} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Background Pattern */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 opacity-10">
                    <motion.div
                      className={`w-full h-full ${product.name === 'SuperAgent' ? 'bg-blue-200' : 'bg-green-200'} rounded-full`}
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge className={`mb-4 ${product.categoryColor} shadow-lg`}>{product.category}</Badge>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                    whileHover={{ scale: 1.02, color: product.name === 'SuperAgent' ? '#2563EB' : '#059669' }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.name}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {product.detailedFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div 
                          key={idx} 
                          className="flex items-center group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`p-2 rounded-lg ${product.name === 'SuperAgent' ? 'bg-blue-50' : 'bg-green-50'} mr-3`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className={`h-5 w-5 ${product.name === 'SuperAgent' ? 'text-blue-600' : 'text-green-600'}`} />
                          </motion.div>
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center text-gray-600 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${product.name === 'SuperAgent' ? 'text-blue-600' : 'text-green-600'}`} />
                        </motion.div>
                        <span className="group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  
                </motion.div>

                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative group`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
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
                  
                  <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500">
                    <div className="aspect-square relative overflow-hidden">
                      <motion.img 
                        src={product.image} 
                        alt={`${product.name} ${product.category}`} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${product.name === 'SuperAgent' ? 'from-blue-500/20 to-purple-500/20' : 'from-green-500/20 to-blue-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Product Icon */}
                      <motion.div 
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {product.name === 'SuperAgent' ? (
                          <Home className="w-6 h-6 text-blue-600" />
                        ) : (
                          <Plane className="w-6 h-6 text-green-600" />
                        )}
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 0.8, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 6,
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
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02, color: "#3B82F6" }}
              transition={{ duration: 0.3 }}
            >
              How Our AI Tools Are Different
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Both of our platforms,—SuperAgent and ZipTrip—have a wealth of features to make you save big on time while minimizing your investment and staying ahead of your competition.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <motion.div
                      className="w-full h-full bg-blue-200 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-3 bg-blue-100 rounded-xl mr-3 group-hover:bg-blue-200 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Home className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">SuperAgent Capabilities</h3>
                  </motion.div>
                  
                  <ul className="space-y-3">
                    {[
                      "Property value prediction using AI",
                      "In-depth market trend analytics", 
                      "Automated outreach and lead follow-up",
                      "Virtual property tours",
                      "Smart contracts and workflow automation",
                      "Real-time property alerts and updates"
                    ].map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-3 h-3 bg-blue-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:bg-white">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <motion.div
                      className="w-full h-full bg-green-200 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-3 bg-green-100 rounded-xl mr-3 group-hover:bg-green-200 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Plane className="h-6 w-6 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors duration-300">ZipTrip Capabilities</h3>
                  </motion.div>
                  
                  <ul className="space-y-3">
                    {[
                      "Intelligent travel planning",
                      "Personalized travel recommendations",
                      "Voice-activated trip scheduling", 
                      "Multi-channel booking support",
                      "Smart itinerary adjustments",
                      "Real-time travel pricing updates"
                    ].map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-3 h-3 bg-green-600 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
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
                Ready to Get Started?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Discover how our AI products can transform your business operations.
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