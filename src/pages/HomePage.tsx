import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Users, BookOpen, TrendingUp, Heart, Shield, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    {
      icon: Heart,
      stat: "80%",
      description: "of drug recalls affect women disproportionately",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Shield,
      stat: "4.8x",
      description: "more likely to be misdiagnosed with heart disease",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: TrendingUp,
      stat: "91%",
      description: "of therapies lack sex-disaggregated data",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const services = [
    {
      icon: Database,
      title: "Data & Research",
      description: "Comprehensive analysis of research gaps and opportunities using advanced data science and evidence synthesis.",
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Policy & Advocacy",
      description: "Strategic policy recommendations and advocacy initiatives to drive systemic change in healthcare systems.",
      gradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Education & Access",
      description: "Evidence-based education programs and resources to improve health literacy and care accessibility.",
      gradient: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Simple Solid Blue Background */}
      <div className="fixed inset-0 bg-blue-100">
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-blue-50/50"></div>
      </div>

      {/* Hero Section - Reduced height */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reimagining the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Women's Health
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Using innovation, data, and collaboration to drive equity in care, policy, and research.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/25"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                to="/join-network"
                className="inline-flex items-center px-8 py-4 border-2 border-slate-700 text-slate-700 rounded-xl font-medium hover:border-slate-800 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                Join the Network
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              The Hidden Crisis in Healthcare
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-700 max-w-3xl mx-auto"
            >
              Despite representing half the population, women face systematic gaps in medical research, diagnosis, and treatment.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-6`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-3">{stat.stat}</div>
                  <p className="text-slate-600 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Driving Change Through Innovation
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-700 max-w-3xl mx-auto"
            >
              Our integrated approach combines cutting-edge research, strategic advocacy, and accessible education to transform women's healthcare.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`relative p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border border-white/50 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 hover:-translate-y-1`}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${service.iconColor}`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Impact Visual Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900">
                Bridging the Gap Between 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                  Science and Impact
                </span>
              </h2>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                For too long, women's health has been an afterthought in medical research and policy. 
                We're changing that by connecting researchers, innovators, and advocates to create 
                evidence-based solutions that work for everyone.
              </p>
              <div className="flex flex-wrap gap-6">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Evidence-Based Research</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Policy Innovation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full"></div>
                  <span className="text-slate-700">Global Collaboration</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="relative"
            >
              {/* Enhanced Network Visualization */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  <defs>
                    {/* Enhanced Gradients */}
                    <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9"/>
                    </linearGradient>
                    <linearGradient id="nodeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="nodeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8"/>
                    </linearGradient>
                    <linearGradient id="nodeGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8"/>
                    </linearGradient>
                    
                    {/* Glow Filter */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Enhanced Connecting Lines with Animation */}
                  <motion.path
                    d="M 250 200 Q 185 160 120 120"
                    stroke="url(#nodeGrad1)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.0 }}
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 250 200 Q 315 150 380 100"
                    stroke="url(#nodeGrad2)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.2 }}
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 250 200 Q 175 240 100 280"
                    stroke="url(#nodeGrad3)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.4 }}
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 250 200 Q 325 230 400 260"
                    stroke="url(#nodeGrad3)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.6 }}
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 250 200 Q 215 260 180 320"
                    stroke="url(#nodeGrad4)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 2.8 }}
                    viewport={{ once: false }}
                  />
                  <motion.path
                    d="M 250 200 Q 300 260 350 320"
                    stroke="url(#nodeGrad4)"
                    strokeWidth="2"
                    fill="none"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 3.0 }}
                    viewport={{ once: false }}
                  />
                  
                  {/* Central Hub - Larger and more prominent */}
                  <motion.circle
                    cx="250" cy="200" r="35"
                    fill="url(#nodeGrad1)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false }}
                  />

                  {/* Research Nodes */}
                  <motion.circle
                    cx="120" cy="120" r="25"
                    fill="url(#nodeGrad2)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false }}
                  />
                  <motion.circle
                    cx="380" cy="100" r="20"
                    fill="url(#nodeGrad2)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: false }}
                  />
                  
                  {/* Policy Nodes */}
                  <motion.circle
                    cx="100" cy="280" r="22"
                    fill="url(#nodeGrad3)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: false }}
                  />
                  <motion.circle
                    cx="400" cy="260" r="18"
                    fill="url(#nodeGrad3)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: false }}
                  />
                  
                  {/* Innovation Nodes */}
                  <motion.circle
                    cx="180" cy="320" r="28"
                    fill="url(#nodeGrad4)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: false }}
                  />
                  <motion.circle
                    cx="350" cy="320" r="24"
                    fill="url(#nodeGrad4)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: false }}
                  />
                  
                  {/* Pulsing effect on central node */}
                  <motion.circle
                    cx="250" cy="200" r="35"
                    fill="none"
                    stroke="url(#nodeGrad1)"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.2, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reduced padding */}
      <section className="py-8 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              Join the Movement for 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Equitable Healthcare</span>
            </h2>
            <p className="text-xl text-slate-700 mb-12 leading-relaxed">
              Whether you're a researcher, innovator, or advocate, your expertise can help us build a future where women's health is prioritized, understood, and properly addressed.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/join-network"
                className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Join Our Network
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;