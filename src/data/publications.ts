export interface Publication {
  id: string;
  title: string;
  type: 'report' | 'brief' | 'article';
  date: string;
  imageUrl: string;
  summary: string;
  url: string;
  categories: string[];
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'The State of Women\'s Health 2024: Gaps and Opportunities',
    type: 'report',
    date: 'April 2024',
    imageUrl: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'A comprehensive analysis of current research gaps, funding disparities, and opportunities for innovation in women\'s health.',
    url: '/reports/state-of-health/2024',
    categories: ['research', 'policy', 'funding'],
    featured: true
  },
  {
    id: '2',
    title: 'Sex-Specific Considerations in Clinical Trial Design',
    type: 'brief',
    date: 'March 2024',
    imageUrl: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'Guidance for incorporating sex as a biological variable in trial design and analysis to improve outcomes for women.',
    url: '/reports/policy-briefs/trial-design',
    categories: ['research', 'clinical', 'methodology']
  },
  {
    id: '3',
    title: 'Policy Recommendations for Addressing PCOS Disparities',
    type: 'brief',
    date: 'February 2024',
    imageUrl: 'https://images.pexels.com/photos/3846738/pexels-photo-3846738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'Targeted policy recommendations to improve PCOS diagnosis, treatment, and research with focus on racial disparities.',
    url: '/reports/policy-briefs/pcos-disparities',
    categories: ['policy', 'disparities', 'pcos']
  },
  {
    id: '4',
    title: 'The Biopsychosocial Model in Women\'s Chronic Pain Management',
    type: 'report',
    date: 'January 2024',
    imageUrl: 'https://images.pexels.com/photos/7088532/pexels-photo-7088532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'An integrated approach to understanding and treating chronic pain conditions that disproportionately affect women.',
    url: '/reports/state-of-health/pain-management',
    categories: ['research', 'clinical', 'pain'],
    featured: true
  },
  {
    id: '5',
    title: 'Advancing Digital Health Solutions for Women',
    type: 'article',
    date: 'December 2023',
    imageUrl: 'https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'Exploring how digital health technologies can address unique women\'s health needs and improve access to care.',
    url: '/reports/policy-briefs/digital-health',
    categories: ['technology', 'innovation', 'access']
  },
  {
    id: '6',
    title: 'Funding Landscape for Women\'s Health Startups',
    type: 'brief',
    date: 'November 2023',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    summary: 'Analysis of venture capital trends, funding gaps, and growth opportunities in the women\'s health technology sector.',
    url: '/reports/policy-briefs/startup-funding',
    categories: ['funding', 'startups', 'innovation']
  }
];