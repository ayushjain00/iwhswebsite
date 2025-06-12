import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, LineChart, Award, BarChart as ChartBar, BookOpen } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200">
              Learn about our dual organization bridging science and commercialization 
              to advance women's health research, policy, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EmpowerHealth Overview */}
      <section id="empowerhealth" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-navy-900">EmpowerHealth Research Nexus</h2>
                <p className="text-gray-600 mb-6">
                  EmpowerHealth Research Nexus serves as a critical support structure for startups and 
                  researchers developing innovative solutions for women's health challenges. We bridge the 
                  gap between scientific research and commercialization, ensuring that evidence-based 
                  approaches reach the market and ultimately benefit women's lives.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team provides data-driven market analyses, assists with clinical trial design, and 
                  connects innovators with key stakeholders in the women's health ecosystem. We focus on 
                  identifying unmet needs and quantifying market opportunities to support sustainable 
                  innovation in women's health.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <ChartBar size={16} className="text-teal-600" />
                    </div>
                    <p className="text-gray-700">Data-driven TAM/SAM models for women's health startups</p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <LineChart size={16} className="text-teal-600" />
                    </div>
                    <p className="text-gray-700">Clinical trial strategy with sex-specific considerations</p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <Users size={16} className="text-teal-600" />
                    </div>
                    <p className="text-gray-700">Connections to key stakeholders in women's health</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3861456/pexels-photo-3861456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="EmpowerHealth team meeting" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IWHS Overview */}
      <section id="iwhs" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-lg overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="IWHS researchers analyzing data" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-navy-900">Institute for Women's Health Strategies</h2>
                <p className="text-gray-600 mb-6">
                  The Institute for Women's Health Strategies (IWHS) is a think tank dedicated to identifying 
                  research gaps, producing policy reports, and developing health literacy education to advance 
                  the field of women's health. Our work is grounded in rigorous research and analysis, with a 
                  focus on addressing systemic inequities in healthcare.
                </p>
                <p className="text-gray-600 mb-6">
                  Through our State of Women's Health Reports and policy briefs, we influence funding priorities 
                  and healthcare practices to better address women's unique health needs. We collaborate with 
                  academic institutions, healthcare organizations, and advocacy groups to drive meaningful change.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                      <BookOpen size={16} className="text-navy-600" />
                    </div>
                    <p className="text-gray-700">Gap analysis in women's health research</p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                      <Building size={16} className="text-navy-600" />
                    </div>
                    <p className="text-gray-700">Policy reports and recommendations</p>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                      <Award size={16} className="text-navy-600" />
                    </div>
                    <p className="text-gray-700">Health literacy education and resources</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="These principles guide our work and partnerships in advancing women's health."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Award}
              title="Equity"
              description="We prioritize addressing health disparities across race, ethnicity, socioeconomic status, and geography in all our work."
            />
            
            <FeatureCard
              icon={ChartBar}
              title="Data-Driven"
              description="Our recommendations and strategies are grounded in rigorous research and comprehensive data analysis."
            />
            
            <FeatureCard
              icon={BookOpen}
              title="Evidence-Based"
              description="We promote treatments, policies, and approaches that are supported by scientific evidence and clinical research."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-white mb-8">
              Join our collaborative network and help us drive innovation and equity in women's health.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/join-network" className="btn bg-white text-teal-700 hover:bg-gray-100">
                Join Our Network
              </Link>
              <Link to="/contact" className="btn border border-white text-white hover:bg-teal-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;