import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { navItems } from '../../data/navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownEnter = (item: string) => {
    setActiveDropdown(item);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.children && handleDropdownLeave()}
              >
                {item.children ? (
                  <div className="flex items-center">
                    <button 
                      className={`flex items-center text-sm font-medium transition-colors ${
                        location.pathname.startsWith(`/${item.path}`) 
                          ? 'text-blue-600' 
                          : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className={`absolute top-full left-0 w-64 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200/50 overflow-hidden transition-all duration-300 transform origin-top-left 
                      ${activeDropdown === item.label ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={`/${item.path}${child.path ? `/${child.path}` : ''}`}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={`/${item.path}`}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === `/${item.path}` 
                        ? 'text-blue-600' 
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/sign-up" 
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/25"
              >
                Create Account
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <Logo />
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <div>
                    <button 
                      className="flex items-center justify-between w-full py-2 text-left text-slate-700 hover:text-blue-600"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown 
                        size={16} 
                        className={`transform transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-slate-200 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={`/${item.path}${child.path ? `/${child.path}` : ''}`}
                            className="block py-2 text-slate-600 hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/${item.path}`}
                    className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <Link 
              to="/contact" 
              className="block w-full text-center px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/sign-up" 
              className="block w-full text-center mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
