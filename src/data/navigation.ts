export interface NavChild {
  label: string;
  path?: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '',
  },
  {
    label: 'About Us',
    path: 'about',
    children: [
      {
        label: 'EmpowerHealth Overview',
        path: 'empowerhealth',
      },
      {
        label: 'IWHS Overview',
        path: 'iwhs',
      },
    ],
  },
  {
    label: 'What We Do',
    path: 'what-we-do',
    children: [
      {
        label: 'Research & Data',
        path: 'research',
      },
      {
        label: 'Policy & Advocacy',
        path: 'policy',
      },
      {
        label: 'Education & Outreach',
        path: 'education',
      },
    ],
  },
  {
    label: 'Focus Areas',
    path: 'focus-areas',
    children: [
      {
        label: 'Pain',
        path: 'pain',
      },
      {
        label: 'Sleep',
        path: 'sleep',
      },
      {
        label: 'Mental Health',
        path: 'mental-health',
      },
      {
        label: 'PCOS & UTI',
        path: 'pcos-uti',
      },
    ],
  },
  {
    label: 'For Startups',
    path: 'for-startups',
    children: [
      {
        label: 'Market Validation',
        path: 'market-validation',
      },
      {
        label: 'Data & Registries',
        path: 'data-registries',
      },
      {
        label: 'Trial Design',
        path: 'trial-design',
      },
    ],
  },
  {
    label: 'Reports',
    path: 'reports',
    children: [
      {
        label: 'State of Women\'s Health',
        path: 'state-of-health',
      },
      {
        label: 'Clinical & Policy Briefs',
        path: 'policy-briefs',
      },
    ],
  },
  {
    label: 'Join Network',
    path: 'join-network',
    children: [
      {
        label: 'For Researchers',
        path: 'researchers',
      },
      {
        label: 'For Industry',
        path: 'industry',
      },
      {
        label: 'For Advocates',
        path: 'advocates',
      },
    ],
  },
];