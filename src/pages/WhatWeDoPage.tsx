import React from 'react';
import { Database, Presentation, Users } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';

const WhatWeDoPage: React.FC = () => {
  return (
    <>
      <Hero
        title="What We Do"
        subtitle="Our work spans research, policy, and education to drive meaningful change in women's health."
        primaryButtonText="Join Our Network"
        primaryButtonLink="/join-network"
        backgroundImage="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <SectionTitle
                title="Research & Data"
                subtitle="We leverage comprehensive databases and conduct thorough analyses to identify gaps and opportunities in women's health."
                alignment="left"
              />
              
              <div className="space-y-6">
                <FeatureCard
                  icon={Database}
                  title="Landscape Analysis"
                  description="Comprehensive review of existing research, clinical trials, and market data to identify gaps and opportunities."
                />
                
                <FeatureCard
                  icon={Database}
                  title="Database Integration"
                  description="Access to PubMed, CDC, and clinicaltrials.gov for evidence-based insights and trend analysis."
                />
                
                <FeatureCard
                  icon={Database}
                  title="Data Registry"
                  description="Development and maintenance of specialized registries for women's health conditions and treatments."
                />
              </div>
            </div>

            <div>
              <SectionTitle
                title="Policy & Advocacy"
                subtitle="We develop evidence-based recommendations and advocate for policy changes to improve women's health outcomes."
                alignment="left"
              />
              
              <div className="space-y-6">
                <FeatureCard
                  icon={Presentation}
                  title="Health Reports"
                  description="Annual State of Women's Health Reports highlighting key trends, gaps, and opportunities."
                />
                
                <FeatureCard
                  icon={Presentation}
                  title="Policy Briefs"
                  description="Targeted recommendations for policymakers on critical women's health issues."
                />
                
                <FeatureCard
                  icon={Presentation}
                  title="Reimbursement Strategy"
                  description="Guidance on coverage and payment models for women's health innovations."
                />
              </div>
            </div>

            <div>
              <SectionTitle
                title="Education & Outreach"
                subtitle="We create accessible content to improve health literacy and awareness across diverse communities."
                alignment="left"
              />
              
              <div className="space-y-6">
                <FeatureCard
                  icon={Users}
                  title="BPS Messaging"
                  description="Development of biopsychosocial messaging frameworks for health communication."
                />
                
                <FeatureCard
                  icon={Users}
                  title="Digital Content"
                  description="Production of podcasts, videos, and interactive content for health education."
                />
                
                <FeatureCard
                  icon={Users}
                  title="Community Engagement"
                  description="Programs to connect with and educate diverse communities about women's health."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Impact"
            subtitle="Through our integrated approach, we're driving meaningful change in women's health research and care."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
              <div className="text-lg font-medium text-navy-900 mb-2">Research Partners</div>
              <p className="text-gray-600">Collaborating with leading institutions and researchers worldwide.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="text-4xl font-bold text-teal-600 mb-2">45+</div>
              <div className="text-lg font-medium text-navy-900 mb-2">Policy Recommendations</div>
              <p className="text-gray-600">Influencing healthcare policy and funding priorities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <div className="text-4xl font-bold text-teal-600 mb-2">200k+</div>
              <div className="text-lg font-medium text-navy-900 mb-2">Community Members</div>
              <p className="text-gray-600">Engaged through our education and outreach programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of researchers, industry leaders, and advocates to advance women's health research and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/join-network" className="btn-primary">
                Join Our Network
              </a>
              <a href="/contact" className="btn bg-white text-navy-900 hover:bg-gray-100">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDoPage;