import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Hero from '../components/ui/Hero';

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about our work and opportunities for collaboration."
        primaryButtonText="Join Our Network"
        primaryButtonLink="/join-network"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're interested in joining our network, collaborating on research, 
                or learning more about our work, we'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Mail className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Email</h3>
                    <a href="mailto:info@empowerhealthnexus.org" className="text-teal-600 hover:text-teal-700">
                      monica@mmiwhs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Phone className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <MapPin className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Location</h3>
                    <p className="text-gray-600">
                      123 Innovation Way<br />
                      Boston, MA 02110
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white rounded-lg shadow-soft p-8 border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="research">Research Collaboration</option>
                      <option value="startup">Startup Support</option>
                      <option value="advocacy">Advocacy Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;