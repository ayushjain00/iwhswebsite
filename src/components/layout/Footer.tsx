import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo variant="light" />
            </Link>
            <p className="text-slate-300 mb-6">
              Driving innovation, equity, and data-forward strategies in women's health research and policy.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-slate-300 hover:text-blue-300 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/focus-areas" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Focus Areas
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Reports & Publications
                </Link>
              </li>
              <li>
                <Link to="/join-network" className="text-slate-300 hover:text-blue-300 transition-colors">
                  Join the Network
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <a 
                  href="mailto:info@empowerhealthnexus.org" 
                  className="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  monica@mmiwhs.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-6">Stay Updated</h4>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest updates on women's health research.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full text-slate-900 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} EmpowerHealth Research Nexus. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-slate-400 text-sm hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 text-sm hover:text-blue-300 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;