import React from 'react';
import { Users, Building, Heart } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const JoinNetworkPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Join Our Network"
        subtitle="Connect with researchers, industry leaders, and advocates advancing women's health."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Who Can Join?"
            subtitle="Our network brings together diverse stakeholders committed to advancing women's health."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100">
              <div className="bg-teal-50 text-teal-600 p-3 rounded-full inline-flex mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-900">Researchers</h3>
              <p className="text-gray-600 mb-6">
                Academic and clinical researchers studying women's health conditions and treatments.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Access research databases
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Collaborate on studies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Share findings
                </li>
              </ul>
              <a href="/join-network/researchers" className="btn-outline mt-6 w-full text-center">
                Join as Researcher
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100">
              <div className="bg-navy-50 text-navy-600 p-3 rounded-full inline-flex mb-4">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-900">Industry</h3>
              <p className="text-gray-600 mb-6">
                Companies developing innovative solutions and technologies for women's health.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-2"></span>
                  Market validation support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-2"></span>
                  Clinical trial guidance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-navy-500 rounded-full mr-2"></span>
                  Stakeholder connections
                </li>
              </ul>
              <a href="/join-network/industry" className="btn-outline mt-6 w-full text-center">
                Join as Industry Partner
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-soft border border-gray-100">
              <div className="bg-rose-50 text-rose-600 p-3 rounded-full inline-flex mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-900">Advocates</h3>
              <p className="text-gray-600 mb-6">
                Organizations and individuals advocating for better women's health outcomes.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Policy resources
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Community engagement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                  Educational materials
                </li>
              </ul>
              <a href="/join-network/advocates" className="btn-outline mt-6 w-full text-center">
                Join as Advocate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Network Benefits"
            subtitle="Access valuable resources and connections to advance your work in women's health."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Collaboration"
              description="Connect with peers and partners across the women's health ecosystem."
            />
            
            <FeatureCard
              icon={Building}
              title="Resources"
              description="Access research databases, policy briefs, and educational materials."
            />
            
            <FeatureCard
              icon={Heart}
              title="Impact"
              description="Contribute to meaningful advances in women's health research and care."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white mb-8">
              Join our network today and help advance women's health research and innovation.
            </p>
            <a href="/contact" className="btn bg-white text-teal-700 hover:bg-gray-100">
              Contact Us to Join
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinNetworkPage;