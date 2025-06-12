import React from 'react';
import { LineChart, Database, FileCheck, Users } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const ForStartupsPage: React.FC = () => {
  return (
    <>
      <Hero
        title="For Startups"
        subtitle="Supporting early-stage companies in women's health with market validation, data access, and trial design."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="How We Help"
            subtitle="We provide comprehensive support to startups developing innovative solutions in women's health."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={LineChart}
              title="Market Validation"
              description="Data-driven analysis of market size, segmentation, and growth potential for women's health solutions."
            />
            
            <FeatureCard
              icon={Database}
              title="Data Access"
              description="Connect with our network of research registries and real-world data sources."
            />
            
            <FeatureCard
              icon={FileCheck}
              title="Trial Design"
              description="Expert guidance on clinical trial design with sex-specific considerations."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Market Validation Support</h2>
              <p className="text-gray-600 mb-6">
                We help startups validate their market opportunity and refine their value proposition through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <LineChart size={16} className="text-teal-600" />
                  </div>
                  <span className="text-gray-700">Comprehensive TAM/SAM analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <Users size={16} className="text-teal-600" />
                  </div>
                  <span className="text-gray-700">Customer segmentation and targeting</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <Database size={16} className="text-teal-600" />
                  </div>
                  <span className="text-gray-700">Competitive landscape analysis</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team analyzing market data"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Data analysis and registries"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Data & Registry Access</h2>
              <p className="text-gray-600 mb-6">
                Access comprehensive women's health data through our network of:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                    <Database size={16} className="text-navy-600" />
                  </div>
                  <span className="text-gray-700">Research registries and databases</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                    <Users size={16} className="text-navy-600" />
                  </div>
                  <span className="text-gray-700">Patient communities and advocacy groups</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                    <FileCheck size={16} className="text-navy-600" />
                  </div>
                  <span className="text-gray-700">Real-world evidence platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Trial Design Guidance</h2>
              <p className="text-gray-600 mb-6">
                Expert support for designing and implementing clinical trials with sex-specific considerations:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                    <FileCheck size={16} className="text-rose-600" />
                  </div>
                  <span className="text-gray-700">Protocol development and review</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                    <Users size={16} className="text-rose-600" />
                  </div>
                  <span className="text-gray-700">Participant recruitment strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                    <LineChart size={16} className="text-rose-600" />
                  </div>
                  <span className="text-gray-700">Endpoint selection and validation</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Clinical trial planning"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Innovation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect with our team to learn how we can support your women's health startup.
            </p>
            <a href="/contact" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForStartupsPage;