export interface Stat {
  id: string;
  percentage: string;
  description: string;
  source?: string;
  color?: 'teal' | 'navy' | 'rose';
}

export const homeStats: Stat[] = [
  {
    id: 'pain-stat',
    percentage: '70%',
    description: 'Of chronic pain conditions disproportionately affect women',
    source: 'National Institutes of Health',
    color: 'teal'
  },
  {
    id: 'pcos-stat',
    percentage: '2-3x',
    description: 'PCOS disproportionately affects South East Asian and Black women',
    source: 'American Journal of Obstetrics & Gynecology',
    color: 'navy'
  },
  {
    id: 'therapies-stat',
    percentage: '91%',
    description: 'Of therapies lack sex-disaggregated data',
    source: 'Journal of Women\'s Health',
    color: 'rose'
  }
];

export const focusAreaStats: Record<string, Stat[]> = {
  pain: [
    {
      id: 'pain-stat-1',
      percentage: '70%',
      description: 'Of chronic pain patients are women',
      source: 'National Institutes of Health'
    },
    {
      id: 'pain-stat-2',
      percentage: '90%',
      description: 'Of fibromyalgia patients are women',
      source: 'American College of Rheumatology'
    },
    {
      id: 'pain-stat-3',
      percentage: '2-3x',
      description: 'Women are more likely to be prescribed sedatives instead of pain medication',
      source: 'Journal of Pain Research'
    }
  ],
  sleep: [
    {
      id: 'sleep-stat-1',
      percentage: '40%',
      description: 'Of women report sleep problems during menstrual cycles',
      source: 'Sleep Medicine Reviews'
    },
    {
      id: 'sleep-stat-2',
      percentage: '50%',
      description: 'Of pregnant women experience insomnia symptoms',
      source: 'Sleep Medicine'
    },
    {
      id: 'sleep-stat-3',
      percentage: '25%',
      description: 'Greater risk of sleep apnea after menopause',
      source: 'American Journal of Respiratory and Critical Care Medicine'
    }
  ],
  mentalHealth: [
    {
      id: 'mental-stat-1',
      percentage: '2x',
      description: 'Women are twice as likely to experience depression',
      source: 'World Health Organization'
    },
    {
      id: 'mental-stat-2',
      percentage: '85%',
      description: 'Of eating disorder patients are women',
      source: 'National Eating Disorders Association'
    },
    {
      id: 'mental-stat-3',
      percentage: '23%',
      description: 'Of women experience perinatal mood disorders',
      source: 'Journal of the American Medical Association'
    }
  ],
  pcosUti: [
    {
      id: 'pcos-uti-stat-1',
      percentage: '10%',
      description: 'Of women of reproductive age have PCOS',
      source: 'American Journal of Obstetrics & Gynecology'
    },
    {
      id: 'pcos-uti-stat-2',
      percentage: '50%',
      description: 'Of women will experience a UTI in their lifetime',
      source: 'National Kidney Foundation'
    },
    {
      id: 'pcos-uti-stat-3',
      percentage: '30%',
      description: 'Of women with UTIs will have recurrent infections',
      source: 'International Journal of Antimicrobial Agents'
    }
  ]
};