import React from 'react';
import { Activity, HeartPulse, BrainCircuit, LineChart } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import StatCard from '../components/ui/StatCard';
import { focusAreaStats } from '../data/stats';

const FocusAreasPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Focus Areas"
        subtitle="We concentrate on key areas where women face significant health disparities and research gaps."
        primaryButtonText="Join Our Research Network"
        primaryButtonLink="/join-network/researchers"
        backgroundImage="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Pain Section */}
      <section id="pain" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-teal-50 text-teal-600 p-3 rounded-full inline-flex mb-6">
                <Activity size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Pain</h2>
              <p className="text-gray-600 mb-6">
                Chronic pain conditions disproportionately affect women, yet research and treatment approaches often fail to account for sex-specific factors. We focus on understanding these disparities and developing targeted solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {focusAreaStats.pain.map((stat) => (
                  <StatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7088532/pexels-photo-7088532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Woman experiencing chronic pain"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sleep Section */}
      <section id="sleep" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Woman sleeping"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-navy-50 text-navy-600 p-3 rounded-full inline-flex mb-6">
                <HeartPulse size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Sleep</h2>
              <p className="text-gray-600 mb-6">
                Sleep disorders and disturbances affect women differently throughout their lives, particularly during hormonal transitions. We research sex-specific sleep patterns and interventions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {focusAreaStats.sleep.map((stat) => (
                  <StatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section id="mental-health" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-rose-50 text-rose-600 p-3 rounded-full inline-flex mb-6">
                <BrainCircuit size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Mental Health</h2>
              <p className="text-gray-600 mb-6">
                Women face unique mental health challenges, including higher rates of depression and anxiety. We study sex-specific aspects of mental health and develop targeted interventions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {focusAreaStats.mentalHealth.map((stat) => (
                  <StatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mental health support"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PCOS & UTI Section */}
      <section id="pcos-uti" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Medical research"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-teal-50 text-teal-600 p-3 rounded-full inline-flex mb-6">
                <LineChart size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">PCOS & UTI</h2>
              <p className="text-gray-600 mb-6">
                PCOS and UTIs have significant impacts on women's health, with notable racial and ethnic disparities in diagnosis and treatment. We focus on improving understanding and care delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {focusAreaStats.pcosUti.map((stat) => (
                  <StatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom">
          <SectionTitle
            title="Join Our Research Network"
            subtitle="Help us advance understanding and treatment of these critical women's health issues."
            color="light"
          />
          
          <div className="text-center">
            <a href="/join-network/researchers" className="btn bg-white text-teal-700 hover:bg-gray-100">
              Join as a Researcher
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FocusAreasPage;