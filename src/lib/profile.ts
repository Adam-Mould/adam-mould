import { type ImageProps } from 'next/image'

import logoALegacyBeyond from '@/images/logos/a-legacy-beyond.svg'
import logoDreamDigital from '@/images/logos/dream-digital.png'
import logoLoveBedford from '@/images/logos/love-bedford.png'
import logoMiltonKeynesCollege from '@/images/logos/milton-keynes-college.png'
import logoOfficeDepot from '@/images/logos/office-depot.png'
import logoSoapboxCreative from '@/images/logos/soapbox-creative.png'
import logoTransitionZero from '@/images/logos/transitionzero.png'
import logoXigen from '@/images/logos/xigen.png'

export const email = 'adam@adam-mould.co.uk'

export const links = {
  github: 'https://github.com/adam-mould',
  linkedin: 'https://www.linkedin.com/in/adamwmould/',
  email: `mailto:${email}`,
}

export const requestCvHref = `mailto:${email}?${new URLSearchParams({
  subject: 'CV request',
  body: [
    'Hi Adam,',
    '',
    'Could you send me a copy of your CV?',
    '',
    'Name:',
    'Company:',
    'Role:',
    '',
    'Thanks',
  ].join('\n'),
})
  .toString()
  .replace(/\+/g, '%20')}`

export interface Role {
  company: string
  title: string
  // Square logo from src/images/logos; falls back to initials
  logo?: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export const roles: Array<Role> = [
  {
    company: 'TransitionZero',
    logo: logoTransitionZero,
    title: 'Principal Frontend Engineer',
    start: '2025',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: 'Dream Digital',
    logo: logoDreamDigital,
    title: 'Co-founder & Technical Director',
    start: '2016',
    end: '2025',
  },
  {
    company: 'Office Depot EU',
    logo: logoOfficeDepot,
    title: 'Frontend Engineer',
    start: '2017',
    end: '2018',
  },
  {
    company: 'Xigen',
    logo: logoXigen,
    title: 'Senior Frontend Engineer',
    start: '2015',
    end: '2017',
  },
  {
    company: 'Soapbox Creative',
    logo: logoSoapboxCreative,
    title: 'Full Stack Engineer',
    start: '2014',
    end: '2015',
  },
]

export interface Project {
  name: string
  context: string
  description: string
  link: { href: string; label: string }
  logo?: ImageProps['src']
}

export const projects: Array<Project> = [
  {
    name: 'Scenario Builder',
    logo: logoTransitionZero,
    context: 'TransitionZero',
    description:
      'An energy-systems modelling platform that governments and think tanks use to plan the energy transition, now past 1,000 users. I rebuilt its frontend from the ground up, which made it far faster, and built AMP, the AI assistant analysts use to explore and edit scenarios in plain English.',
    link: {
      href: 'https://www.transitionzero.org/products/scenario-builder',
      label: 'transitionzero.org',
    },
  },
  {
    name: 'A Legacy Beyond',
    logo: logoALegacyBeyond,
    context: 'Technical co-founder & sole engineer',
    description:
      'Digital memorials you open by scanning a small etched emblem, with a person’s photographs, film and voice recordings behind it. I co-founded it with a non-technical partner and built the whole product myself, from the first commit to launch.',
    link: { href: 'https://www.alegacybeyond.dev', label: 'alegacybeyond.dev' },
  },
  {
    name: 'Milton Keynes College',
    logo: logoMiltonKeynesCollege,
    context: 'Dream Digital',
    description:
      'The college’s marketing site, with a bespoke integration into ProSolution, its student management system. It won two Gold FE First Awards.',
    link: { href: 'https://www.mkcollege.ac.uk', label: 'mkcollege.ac.uk' },
  },
  {
    name: 'Love Bedford',
    logo: logoLoveBedford,
    context: 'Dream Digital',
    description:
      'A guide to the businesses in Bedford town centre. Dream Digital built it and looked after it for years, then took it over when the town’s Business Improvement District wasn’t renewed.',
    link: { href: 'https://lovebedford.co.uk', label: 'lovebedford.co.uk' },
  },
]
