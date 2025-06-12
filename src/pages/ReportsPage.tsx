import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import PublicationCard from '../components/ui/PublicationCard';
import { publications } from '../data/publications';

const ReportsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = Array.from(
    new Set(publications.flatMap(pub => pub.categories))
  ).sort();

  const filteredPublications = publications.filter(pub => {
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    const categoryMatch = selectedCategory === 'all' || pub.categories.includes(selectedCategory);
    return typeMatch && categoryMatch;
  });

  return (
    <>
      <Hero
        title="Reports & Publications"
        subtitle="Access our latest research, policy briefs, and insights on women's health."
        primaryButtonText="Subscribe to Updates"
        primaryButtonLink="/join-network"
        backgroundImage="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Browse Our Publications"
            subtitle="Filter by type and topic to find relevant research and insights."
          />
          
          <div className="mb-8 flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publication Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="all">All Types</option>
                <option value="report">Research Reports</option>
                <option value="brief">Policy Briefs</option>
                <option value="article">Articles</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication) => (
              <PublicationCard
                key={publication.id}
                {...publication}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-navy-900">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive notifications when we publish new reports and insights.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsPage;