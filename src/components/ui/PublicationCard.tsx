import React from 'react';
import { Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PublicationCardProps {
  id: string;
  title: string;
  type: 'report' | 'brief' | 'article';
  date: string;
  imageUrl: string;
  summary: string;
  url: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  id,
  title,
  type,
  date,
  imageUrl,
  summary,
  url
}) => {
  const typeLabels = {
    report: 'Research Report',
    brief: 'Policy Brief',
    article: 'Article'
  };
  
  const typeColors = {
    report: 'bg-blue-100 text-blue-800',
    brief: 'bg-slate-100 text-slate-800',
    article: 'bg-purple-100 text-purple-800'
  };
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full flex flex-col hover:shadow-lg hover:border-slate-300 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${typeColors[type]}`}>
            {typeLabels[type]}
          </span>
          <div className="flex items-center ml-auto text-xs text-slate-500">
            <Calendar size={14} className="mr-1" />
            {date}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-3 text-slate-900">{title}</h3>
        
        <p className="text-slate-600 text-sm mb-4 flex-grow">{summary}</p>
        
        <Link 
          to={url} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <FileText size={16} className="mr-2" />
          Read Full Publication
        </Link>
      </div>
    </div>
  );
};

export default PublicationCard;