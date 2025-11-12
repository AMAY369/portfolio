import { Code2, Smartphone, Cog, TrendingUp, Megaphone, Users } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  icon: any;
  name: string;
  tagline: string;
  category: 'core' | 'other';
  description: string;
  longDescription: string;
  deliverables: string[];
  technologies: string[];
  pricing: {
    hourly: string;
    projectSmall: string;
    projectMedium: string;
    projectLarge: string;
    retainer?: string;
  };
  timeline: {
    small: string;
    medium: string;
    large: string;
  };
  process: {
    step: string;
    description: string;
    duration: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  // CORE SERVICES
  {
    id: '1',
    slug: 'web-development',
    icon: Code2,
    name: 'Web Development',
    tagline: 'Modern, responsive web applications built for growth',
    category: 'core',
    description: 'Custom web applications using the best technology stack for your needs. From MVPs to enterprise-scale platforms.',
    longDescription: 'I build modern, scalable web applications that drive business results. Whether you\'re launching a startup MVP, modernizing a legacy system, or building enterprise software, I deliver high-performance solutions using the right technology for your project — React, Vue, Angular, Python, PHP, or any framework that fits your requirements. Every project includes responsive design, SEO optimization, and clean, maintainable code.',
    deliverables: [
      'Fully responsive web application',
      'Admin dashboard (if applicable)',
      'API integration & backend setup',
      'Authentication & user management',
      'Database design & implementation',
      'Deployment & hosting setup',
      'Documentation & code handoff',
      '30 days of post-launch support'
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Node.js', 'Python', 'PHP', 'Java', 'PostgreSQL', 'MongoDB', 'AWS'],
    pricing: {
      hourly: '₹2,000-3,000/hour',
      projectSmall: 'Starting at ₹1,50,000',
      projectMedium: '₹3,50,000 - ₹8,00,000',
      projectLarge: '₹8,00,000+',
      retainer: '₹80,000-1,50,000/month'
    },
    timeline: {
      small: '4-6 weeks',
      medium: '8-14 weeks',
      large: '4-6 months'
    },
    process: [
      {
        step: 'Discovery & Planning',
        description: 'We discuss your vision, requirements, and goals. I\'ll analyze your needs and create a detailed project roadmap.',
        duration: '3-5 days'
      },
      {
        step: 'Design & Architecture',
        description: 'I design the user interface, plan the technical architecture, and get your approval before development.',
        duration: '5-10 days'
      },
      {
        step: 'Development & Testing',
        description: 'Iterative development with weekly check-ins. You\'ll see progress regularly and provide feedback.',
        duration: 'Varies by scope'
      },
      {
        step: 'Launch & Support',
        description: 'Deployment to production, testing, and 30 days of support to ensure everything runs smoothly.',
        duration: '3-5 days'
      }
    ],
    faqs: [
      {
        question: 'What technologies do you use?',
        answer: 'I specialize in React, Next.js, and Node.js for most projects. For databases, I use PostgreSQL or MongoDB depending on requirements. I can also work with other technologies if your project requires it.'
      },
      {
        question: 'Can you work with my existing codebase?',
        answer: 'Absolutely! I have experience taking over and improving existing projects. I\'ll audit your code, identify improvements, and work within your existing architecture.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, I offer retainer packages for ongoing maintenance, updates, and feature additions. All projects include 30 days of post-launch support.'
      }
    ]
  },
  {
    id: '2',
    slug: 'mobile-app-development',
    icon: Smartphone,
    name: 'Mobile App Development',
    tagline: 'Cross-platform mobile apps that feel native',
    category: 'core',
    description: 'Native-quality mobile applications for iOS and Android using the best approach for your needs — native or cross-platform.',
    longDescription: 'Build your mobile presence with apps that deliver exceptional performance and user experience. Whether using React Native, Flutter, or native development (Swift/Kotlin), I choose the right approach based on your requirements, timeline, and budget. Cross-platform solutions can reduce development time by up to 40%, while native apps offer maximum performance. Perfect for startups validating ideas or businesses expanding their digital reach.',
    deliverables: [
      'iOS & Android mobile applications',
      'App Store & Google Play deployment',
      'Push notifications setup',
      'API integration & backend',
      'User authentication & profiles',
      'Offline functionality (if needed)',
      'App analytics integration',
      '30 days of post-launch support'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Node.js', 'REST APIs'],
    pricing: {
      hourly: '₹2,500-3,500/hour',
      projectSmall: 'Starting at ₹2,50,000',
      projectMedium: '₹5,00,000 - ₹10,00,000',
      projectLarge: '₹10,00,000+',
      retainer: '₹1,00,000-2,00,000/month'
    },
    timeline: {
      small: '6-8 weeks',
      medium: '10-16 weeks',
      large: '5-8 months'
    },
    process: [
      {
        step: 'Discovery & UX Planning',
        description: 'Define app features, user flows, and technical requirements. Create wireframes and get alignment.',
        duration: '5-7 days'
      },
      {
        step: 'UI Design & Prototyping',
        description: 'Design the mobile interface following iOS and Android guidelines. Create interactive prototype.',
        duration: '7-10 days'
      },
      {
        step: 'Development & Testing',
        description: 'Build the app with weekly builds for testing. Iterate based on your feedback and testing results.',
        duration: 'Varies by scope'
      },
      {
        step: 'Deployment & Launch',
        description: 'Submit to App Store and Google Play, handle review process, and launch with full support.',
        duration: '5-10 days'
      }
    ],
    faqs: [
      {
        question: 'Why React Native over native development?',
        answer: 'React Native allows us to build for both iOS and Android simultaneously, reducing time and cost by 30-40%. You get near-native performance with faster iterations.'
      },
      {
        question: 'Can you publish to the app stores?',
        answer: 'Yes, I handle the entire submission process for both App Store and Google Play, including creating store listings and managing reviews.'
      },
      {
        question: 'What about app updates after launch?',
        answer: 'I offer retainer packages for ongoing updates and new features. All projects include 30 days of post-launch bug fixes and support.'
      }
    ]
  },
  {
    id: '3',
    slug: 'custom-software',
    icon: Cog,
    name: 'Custom Software Solutions',
    tagline: 'Tailored enterprise tools and automation',
    category: 'core',
    description: 'Bespoke software for business process automation, internal tools, and enterprise applications.',
    longDescription: 'Transform your business operations with custom software built specifically for your workflows. I specialize in creating internal tools, automation systems, CRM platforms, inventory management, and other business-critical applications. Leverage my corporate experience at Vsingh CPA LLC to build enterprise-grade solutions that scale.',
    deliverables: [
      'Custom application development',
      'Business process automation',
      'Database architecture & design',
      'API development & integrations',
      'Admin panel & user management',
      'Reporting & analytics dashboards',
      'Security & compliance implementation',
      'Training & documentation',
      '60 days of post-launch support'
    ],
    technologies: ['Node.js', 'Python', 'Java', 'PHP', 'PostgreSQL', 'MongoDB', 'React', 'Vue.js', 'Docker', 'AWS', 'Azure'],
    pricing: {
      hourly: '₹3,000-4,000/hour',
      projectSmall: 'Starting at ₹3,00,000',
      projectMedium: '₹6,00,000 - ₹15,00,000',
      projectLarge: '₹15,00,000+',
      retainer: '₹1,20,000-2,50,000/month'
    },
    timeline: {
      small: '6-10 weeks',
      medium: '12-20 weeks',
      large: '6-12 months'
    },
    process: [
      {
        step: 'Requirements Analysis',
        description: 'Deep dive into your business processes, pain points, and goals. Document detailed requirements.',
        duration: '1-2 weeks'
      },
      {
        step: 'Architecture Design',
        description: 'Design system architecture, database schema, and integration points. Plan for scalability and security.',
        duration: '1-2 weeks'
      },
      {
        step: 'Agile Development',
        description: 'Build in 2-week sprints with regular demos. Iterate based on feedback and evolving requirements.',
        duration: 'Varies by scope'
      },
      {
        step: 'Deployment & Training',
        description: 'Deploy to your infrastructure, train your team, and provide comprehensive documentation.',
        duration: '1-2 weeks'
      }
    ],
    faqs: [
      {
        question: 'Do you work with legacy systems?',
        answer: 'Yes, I have experience integrating with and modernizing legacy systems. I can build bridges between old and new technologies.'
      },
      {
        question: 'Can you handle enterprise security requirements?',
        answer: 'Absolutely. I implement industry-standard security practices including encryption, authentication, role-based access, and compliance with regulations like SOC 2 and GDPR.'
      },
      {
        question: 'What about ongoing support and maintenance?',
        answer: 'I offer retainer packages for ongoing support, updates, and new feature development. Enterprise projects include 60 days of post-launch support.'
      }
    ]
  },
  {
    id: '4',
    slug: 'seo-optimization',
    icon: TrendingUp,
    name: 'SEO Optimization',
    tagline: 'Technical SEO and performance optimization',
    category: 'core',
    description: 'Improve search rankings with technical SEO, performance optimization, and search-friendly architecture.',
    longDescription: 'Increase your organic visibility and search traffic with comprehensive SEO optimization. I focus on technical SEO, site speed optimization, structured data implementation, and search-friendly architecture. Perfect for businesses with existing websites or as an add-on to development projects.',
    deliverables: [
      'Complete technical SEO audit',
      'Performance optimization (90+ Lighthouse score)',
      'Structured data implementation',
      'XML sitemap & robots.txt optimization',
      'Page speed improvements',
      'Mobile optimization',
      'Core Web Vitals optimization',
      'SEO monitoring setup (Google Search Console)',
      'Monthly performance reports (retainer)'
    ],
    technologies: ['Next.js SEO', 'Google Analytics', 'Google Search Console', 'Schema.org', 'PageSpeed Insights', 'Lighthouse'],
    pricing: {
      hourly: '₹1,500-2,500/hour',
      projectSmall: 'Starting at ₹60,000',
      projectMedium: '₹1,50,000 - ₹3,50,000',
      projectLarge: '₹3,50,000+',
      retainer: '₹30,000-80,000/month'
    },
    timeline: {
      small: '2-3 weeks',
      medium: '4-8 weeks',
      large: '2-4 months'
    },
    process: [
      {
        step: 'SEO Audit & Analysis',
        description: 'Comprehensive audit of your site\'s technical SEO, performance, and search visibility. Identify issues and opportunities.',
        duration: '3-5 days'
      },
      {
        step: 'Strategy & Prioritization',
        description: 'Create prioritized action plan based on impact and effort. Get your approval on the roadmap.',
        duration: '2-3 days'
      },
      {
        step: 'Implementation',
        description: 'Execute optimizations including technical fixes, performance improvements, and structured data.',
        duration: 'Varies by scope'
      },
      {
        step: 'Monitoring & Reporting',
        description: 'Track improvements, monitor rankings, and provide ongoing optimization recommendations.',
        duration: 'Ongoing'
      }
    ],
    faqs: [
      {
        question: 'How long before I see results?',
        answer: 'Technical improvements (site speed, Core Web Vitals) show immediate results. Organic ranking improvements typically take 2-4 months as Google crawls and re-indexes your site.'
      },
      {
        question: 'Do you do content writing or link building?',
        answer: 'I focus on technical SEO and can provide content strategy guidance. For content writing and link building, I can recommend trusted partners.'
      },
      {
        question: 'Can you optimize my existing website?',
        answer: 'Yes! I work with any technology stack - WordPress, React, Next.js, or custom platforms. I\'ll audit and optimize regardless of how it\'s built.'
      }
    ]
  },

  // OTHER SERVICES (SECONDARY)
  {
    id: '5',
    slug: 'digital-marketing',
    icon: Megaphone,
    name: 'Digital Marketing',
    tagline: 'Complete digital presence management',
    category: 'other',
    description: 'Marketing strategy, social media, content marketing, and PPC campaigns to complement your development.',
    longDescription: 'Extend your digital reach with comprehensive marketing services. I offer digital marketing as a complement to development projects, providing a complete solution for businesses that need both technical execution and marketing expertise. Perfect for startups and small businesses looking for a single partner.',
    deliverables: [
      'Marketing strategy & planning',
      'Social media management',
      'Content marketing & copywriting',
      'Email marketing campaigns',
      'PPC campaign setup (Google Ads, Facebook)',
      'Analytics & performance tracking',
      'Marketing automation setup',
      'Monthly reporting & optimization'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'Mailchimp', 'HubSpot', 'Buffer', 'Canva'],
    pricing: {
      hourly: '₹1,500-2,000/hour',
      projectSmall: 'Starting at ₹50,000',
      projectMedium: '₹1,00,000 - ₹3,00,000',
      projectLarge: '₹3,00,000+',
      retainer: '₹40,000-1,20,000/month'
    },
    timeline: {
      small: '2-4 weeks',
      medium: '1-3 months',
      large: '3-6 months'
    },
    process: [
      {
        step: 'Marketing Assessment',
        description: 'Understand your goals, target audience, and current marketing efforts. Identify gaps and opportunities.',
        duration: '3-5 days'
      },
      {
        step: 'Strategy Development',
        description: 'Create comprehensive marketing plan including channels, messaging, budget allocation, and KPIs.',
        duration: '5-7 days'
      },
      {
        step: 'Campaign Execution',
        description: 'Launch and manage marketing campaigns across selected channels. Regular optimization based on performance.',
        duration: 'Ongoing'
      },
      {
        step: 'Analysis & Optimization',
        description: 'Monthly reporting on performance, insights, and recommendations for continuous improvement.',
        duration: 'Monthly'
      }
    ],
    faqs: [
      {
        question: 'Do I need development services to get marketing?',
        answer: 'No, but digital marketing is most effective when paired with development for complete digital solutions. I offer both separately or as packages.'
      },
      {
        question: 'What\'s the minimum commitment?',
        answer: 'For meaningful results, I recommend a minimum 3-month retainer. This allows time for testing, optimization, and seeing ROI.'
      },
      {
        question: 'Do you handle ad spend budget?',
        answer: 'Yes, I can manage your ad campaigns, but the ad spend budget is separate from my service fees. Typical minimum ad budget is $1,000-2,000/month.'
      }
    ]
  },
  {
    id: '6',
    slug: 'technical-consulting',
    icon: Users,
    name: 'Technical Consulting',
    tagline: 'CTO-level guidance and technical advisory',
    category: 'other',
    description: 'Strategic technical advisory for non-technical founders, architecture reviews, and technology decisions.',
    longDescription: 'Get expert technical guidance without hiring a full-time CTO. I provide strategic advisory for startups and businesses on technology decisions, architecture planning, vendor evaluation, team building, and technical due diligence. Perfect for non-technical founders or businesses facing critical technical decisions.',
    deliverables: [
      'Technology strategy & roadmap',
      'Architecture review & recommendations',
      'Vendor & tool evaluation',
      'Team hiring & interview support',
      'Code review & quality assessment',
      'Technical due diligence (for investors)',
      'CTO advisory (ongoing)',
      'Technology risk assessment'
    ],
    technologies: ['Full Stack', 'Cloud Platforms', 'DevOps', 'Architecture Patterns', 'Team Management', 'Project Management'],
    pricing: {
      hourly: '₹4,000-5,000/hour',
      projectSmall: 'Starting at ₹1,00,000',
      projectMedium: '₹2,00,000 - ₹5,00,000',
      projectLarge: '₹5,00,000+',
      retainer: '₹60,000-1,50,000/month'
    },
    timeline: {
      small: '1-2 weeks',
      medium: '3-6 weeks',
      large: 'Ongoing advisory'
    },
    process: [
      {
        step: 'Initial Assessment',
        description: 'Understand your business, technical challenges, and goals. Identify immediate needs and long-term strategy.',
        duration: '2-3 days'
      },
      {
        step: 'Analysis & Recommendations',
        description: 'Deep dive into your technical situation. Provide detailed recommendations and action plan.',
        duration: '1-2 weeks'
      },
      {
        step: 'Implementation Support',
        description: 'Guide execution of recommendations, provide ongoing advisory, and adjust strategy as needed.',
        duration: 'Varies'
      },
      {
        step: 'Ongoing Advisory',
        description: 'Monthly check-ins, strategic guidance, and support for technical decisions and challenges.',
        duration: 'Ongoing'
      }
    ],
    faqs: [
      {
        question: 'What\'s the difference between consulting and development?',
        answer: 'Consulting focuses on strategy, planning, and advisory. If you need hands-on development, that\'s a separate engagement. Many clients start with consulting, then hire me for implementation.'
      },
      {
        question: 'Do you do fractional CTO work?',
        answer: 'Yes! I offer fractional CTO services on a retainer basis, providing ongoing strategic guidance and leadership without the full-time cost.'
      },
      {
        question: 'Can you help with technical due diligence?',
        answer: 'Absolutely. I provide technical due diligence for investors evaluating acquisition targets or funding opportunities, including code review, architecture assessment, and team evaluation.'
      }
    ]
  }
];

export const getCoreServices = () => services.filter(s => s.category === 'core');
export const getOtherServices = () => services.filter(s => s.category === 'other');
export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
