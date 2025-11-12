export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  projectType: string;
  duration: string;
  technologies: string[];
  thumbnail: string;
  featured: boolean;
  challenge: {
    overview: string;
    painPoints: string[];
  };
  solution: {
    overview: string;
    whatWeBuilt: string[];
    technicalHighlights: string[];
  };
  results: {
    overview: string;
    metrics: {
      label: string;
      value: string;
      icon: string;
    }[];
    clientQuote?: {
      quote: string;
      author: string;
      title: string;
    };
  };
  images: string[];
  lessonsLearned?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'econest-ecommerce',
    title: 'E-Commerce Transformation: 47% Conversion Increase',
    client: 'EcoNest Home Goods',
    industry: 'E-Commerce / Retail',
    projectType: 'Web Development',
    duration: '10 weeks',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe', 'Vercel', 'Tailwind CSS'],
    thumbnail: '/case-studies/econest-thumbnail.jpg',
    featured: true,
    challenge: {
      overview: 'EcoNest, a sustainable home goods retailer, was struggling with their outdated e-commerce platform. Built on WordPress/WooCommerce in 2018, the site was slow (4+ second load times), difficult to maintain, and couldn\'t handle traffic spikes during sales. The checkout process had a 68% abandonment rate, and mobile experience was poor.',
      painPoints: [
        'Page load times averaging 4.2 seconds (industry standard: <2s)',
        '68% cart abandonment rate on mobile devices',
        'Frequent crashes during promotional campaigns',
        'Difficulty adding new features or customizing checkout flow',
        'High hosting and plugin maintenance costs ($400+/month)',
        'Poor SEO performance - Lighthouse score of 42'
      ]
    },
    solution: {
      overview: 'I rebuilt the entire e-commerce platform using Next.js for optimal performance and SEO, with a custom Node.js backend for order processing and inventory management. The new architecture provided server-side rendering for SEO, static generation for product pages, and seamless Stripe integration for payments.',
      whatWeBuilt: [
        'Modern, responsive storefront with product filtering and search',
        'Optimized checkout flow with guest checkout and saved addresses',
        'Admin dashboard for inventory, orders, and customer management',
        'Integration with existing Shopify inventory system via API',
        'Email automation for order confirmations and shipping updates',
        'Abandoned cart recovery system',
        'Real-time inventory tracking and low-stock alerts'
      ],
      technicalHighlights: [
        'Implemented Next.js ISR (Incremental Static Regeneration) for product pages, reducing load times by 73%',
        'Built custom caching layer for frequently accessed data, handling 10x traffic during sales',
        'Optimized images with Next.js Image component, reducing total page weight by 60%',
        'Implemented progressive web app (PWA) features for mobile app-like experience',
        'Used PostgreSQL with connection pooling for reliable database performance'
      ]
    },
    results: {
      overview: 'The new platform launched in Q2 2024 and immediately showed dramatic improvements across all key metrics. Most importantly, the client saw real business impact with increased sales and reduced operational costs.',
      metrics: [
        {
          label: 'Conversion Rate Increase',
          value: '+47%',
          icon: 'TrendingUp'
        },
        {
          label: 'Page Load Time',
          value: '1.1s',
          icon: 'Zap'
        },
        {
          label: 'Mobile Cart Abandonment',
          value: '-41%',
          icon: 'ShoppingCart'
        },
        {
          label: 'Lighthouse Score',
          value: '94/100',
          icon: 'Award'
        },
        {
          label: 'Hosting Cost Reduction',
          value: '-65%',
          icon: 'DollarSign'
        },
        {
          label: 'Revenue Growth (First Month)',
          value: '+₹42L',
          icon: 'LineChart'
        }
      ],
      clientQuote: {
        quote: 'The new platform has been transformative for our business. Not only are we seeing significantly higher conversions, but our team can finally focus on growth instead of constantly troubleshooting technical issues.',
        author: 'Sarah Mitchell',
        title: 'Founder & CEO, EcoNest'
      }
    },
    images: [
      '/case-studies/econest-1.jpg',
      '/case-studies/econest-2.jpg',
      '/case-studies/econest-3.jpg',
      '/case-studies/econest-4.jpg'
    ],
    lessonsLearned: 'This project reinforced the importance of performance optimization in e-commerce. Even small improvements in load time can significantly impact conversion rates. The investment in proper caching and image optimization paid dividends in both user experience and reduced infrastructure costs.'
  },
  {
    id: '2',
    slug: 'healthtrack-mobile-app',
    title: 'HealthTrack: Cross-Platform Fitness App in 7 Weeks',
    client: 'HealthTrack Solutions',
    industry: 'HealthTech / Fitness',
    projectType: 'Mobile App Development',
    duration: '7 weeks',
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Firebase', 'TypeScript', 'Redux Toolkit'],
    thumbnail: '/case-studies/healthtrack-thumbnail.jpg',
    featured: true,
    challenge: {
      overview: 'HealthTrack needed to launch their MVP fitness tracking app before a major industry conference in 8 weeks. They needed iOS and Android apps with offline functionality, real-time sync, and integration with popular fitness APIs. Previous attempts with other developers had stalled due to technical challenges.',
      painPoints: [
        'Tight deadline - 8 weeks to launch',
        'Required both iOS and Android (native development too expensive)',
        'Complex offline-first architecture needed',
        'Integration with multiple third-party APIs (Apple Health, Google Fit)',
        'Real-time sync across devices',
        'Previous development team abandoned the project mid-way'
      ]
    },
    solution: {
      overview: 'I chose React Native with Expo for rapid cross-platform development, allowing us to build once and deploy to both platforms. The architecture prioritized offline-first functionality with background sync, ensuring users could track workouts even without internet connection.',
      whatWeBuilt: [
        'iOS and Android fitness tracking applications',
        'Workout logging with exercise library (500+ exercises)',
        'Offline-first architecture with background sync',
        'Integration with Apple Health and Google Fit APIs',
        'Social features: friend connections, activity feed, challenges',
        'Push notifications for workout reminders and friend activity',
        'Analytics dashboard showing progress over time',
        'Premium subscription management via in-app purchases'
      ],
      technicalHighlights: [
        'Implemented Redux Persist for offline data storage and sync queue management',
        'Built custom background sync service that handles API sync when connectivity restored',
        'Used React Native Reanimated for smooth 60fps animations and transitions',
        'Integrated native modules for health data APIs with TypeScript type safety',
        'Implemented optimistic UI updates for instant feedback even when offline',
        'Set up CI/CD pipeline for automated builds and TestFlight/Play Store deployment'
      ]
    },
    results: {
      overview: 'The app launched successfully at the conference with both iOS and Android versions available. The client acquired 500+ users in the first week, and the app has maintained a 4.7-star rating on both app stores.',
      metrics: [
        {
          label: 'Launch Timeline',
          value: '7 weeks',
          icon: 'Clock'
        },
        {
          label: 'First Week Downloads',
          value: '500+',
          icon: 'Download'
        },
        {
          label: 'App Store Rating',
          value: '4.7★',
          icon: 'Star'
        },
        {
          label: 'Daily Active Users',
          value: '68%',
          icon: 'Users'
        },
        {
          label: 'Premium Conversion',
          value: '12%',
          icon: 'CreditCard'
        },
        {
          label: 'Development Cost Savings',
          value: '-40%',
          icon: 'Percent'
        }
      ],
      clientQuote: {
        quote: 'Abhay delivered what two previous developers couldn\'t. His technical expertise with React Native and ability to navigate complex offline sync challenges was impressive. We launched on time and the app has been rock solid.',
        author: 'Marcus Chen',
        title: 'CTO, HealthTrack Solutions'
      }
    },
    images: [
      '/case-studies/healthtrack-1.jpg',
      '/case-studies/healthtrack-2.jpg',
      '/case-studies/healthtrack-3.jpg',
      '/case-studies/healthtrack-4.jpg'
    ],
    lessonsLearned: 'Building offline-first mobile apps requires careful architecture planning upfront. The sync queue pattern proved essential for handling conflicts and ensuring data consistency. React Native\'s cross-platform capabilities delivered exactly what the client needed within their tight timeline and budget.'
  },
  {
    id: '3',
    slug: 'brightside-crm',
    title: 'Custom CRM: 15 Hours Saved Per Week',
    client: 'Brightside Consulting',
    industry: 'Professional Services / Consulting',
    projectType: 'Custom Software',
    duration: '12 weeks',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Prisma', 'SendGrid', 'AWS S3'],
    thumbnail: '/case-studies/brightside-thumbnail.jpg',
    featured: true,
    challenge: {
      overview: 'Brightside Consulting was managing their entire sales pipeline through spreadsheets, email, and disparate tools. They were losing track of leads, missing follow-ups, and spending hours on manual data entry and reporting. They needed a custom CRM tailored to their specific consulting workflow that none of the off-the-shelf solutions could provide.',
      painPoints: [
        'Sales data scattered across Google Sheets, email, and Trello',
        'No automated follow-up reminders - leads falling through cracks',
        'Manual invoice generation taking 2+ hours per week',
        'Unable to track proposal pipeline or forecast revenue accurately',
        'Client onboarding requiring 10+ email exchanges',
        'Reporting requiring hours of manual spreadsheet compilation',
        'Tried Salesforce and HubSpot but too complex and expensive for needs'
      ]
    },
    solution: {
      overview: 'I built a custom CRM specifically designed for consulting firms, focusing on their unique workflow from lead capture to project delivery. The system automated repetitive tasks, centralized client data, and provided real-time insights into the sales pipeline and project status.',
      whatWeBuilt: [
        'Lead management system with automated capture from website forms',
        'Proposal builder with templates and e-signature integration',
        'Automated follow-up sequences with email templates',
        'Project management dashboard with milestone tracking',
        'Invoice generation and payment tracking',
        'Client portal for document sharing and communication',
        'Reporting dashboard with revenue forecasting',
        'Integration with Gmail, Google Calendar, and QuickBooks'
      ],
      technicalHighlights: [
        'Built with Next.js for admin panel and client portal with role-based access control',
        'Implemented Prisma ORM with PostgreSQL for type-safe database operations',
        'Created automated email workflows using SendGrid with dynamic template system',
        'Built custom invoice PDF generator with company branding',
        'Integrated DocuSign API for seamless proposal signing',
        'Implemented webhook listeners for real-time updates from integrated services',
        'Used AWS S3 for secure document storage with presigned URLs for access control'
      ]
    },
    results: {
      overview: 'The custom CRM transformed Brightside\'s operations, eliminating manual processes and providing visibility into their entire business. The ROI was immediate, with time savings paying for the development cost within 5 months.',
      metrics: [
        {
          label: 'Time Saved Per Week',
          value: '15+ hours',
          icon: 'Clock'
        },
        {
          label: 'Lead Response Time',
          value: '-78%',
          icon: 'Zap'
        },
        {
          label: 'Proposal Close Rate',
          value: '+31%',
          icon: 'TrendingUp'
        },
        {
          label: 'Invoice Generation Time',
          value: '5 min',
          icon: 'FileText'
        },
        {
          label: 'Revenue Forecasting Accuracy',
          value: '92%',
          icon: 'Target'
        },
        {
          label: 'ROI Timeline',
          value: '5 months',
          icon: 'DollarSign'
        }
      ],
      clientQuote: {
        quote: 'This system has been a game-changer. We\'re capturing more leads, closing more deals, and spending way less time on administrative work. Abhay really understood our business and built exactly what we needed.',
        author: 'Jennifer Park',
        title: 'Founder, Brightside Consulting'
      }
    },
    images: [
      '/case-studies/brightside-1.jpg',
      '/case-studies/brightside-2.jpg',
      '/case-studies/brightside-3.jpg',
      '/case-studies/brightside-4.jpg'
    ],
    lessonsLearned: 'Custom software shines when off-the-shelf solutions can\'t accommodate unique workflows. The key was deeply understanding the client\'s day-to-day operations before writing a single line of code. The time invested in discovery paid off with a solution that fit like a glove and drove immediate ROI.'
  },
  {
    id: '4',
    slug: 'neha-shing-real-estate',
    title: 'Modern Real Estate Platform: Professional Property Showcase',
    client: 'Neha Shing Real Estate',
    industry: 'Real Estate',
    projectType: 'Web Development',
    duration: '8 weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Responsive Design'],
    thumbnail: '/case-studies/neha-shing-thumbnail.jpg',
    featured: true,
    challenge: {
      overview: 'Neha Shing Real Estate needed a modern, professional website to showcase their premium property listings and establish a strong online presence. They required a platform that would make property discovery intuitive, highlight property features effectively, and work seamlessly across all devices.',
      painPoints: [
        'No online presence for property listings',
        'Need for professional, trustworthy design',
        'Required mobile-first responsive experience',
        'Wanted fast load times for image-heavy content',
        'Needed easy property browsing and filtering',
        'Required SEO optimization for local search visibility'
      ]
    },
    solution: {
      overview: 'I built a modern, high-performance real estate website using Next.js with server-side rendering for optimal SEO and fast page loads. The design emphasizes visual appeal with large property images, clean layouts, and intuitive navigation that guides visitors through property listings.',
      whatWeBuilt: [
        'Fully responsive real estate website',
        'Property listings with detailed information',
        'Image galleries with optimized loading',
        'Property search and filtering functionality',
        'Contact forms for property inquiries',
        'Mobile-optimized interface',
        'SEO-friendly structure with meta tags',
        'Fast deployment on Vercel with CDN'
      ],
      technicalHighlights: [
        'Implemented Next.js 14 with App Router for optimal performance',
        'Used Next.js Image component for automatic image optimization',
        'Achieved 95+ Lighthouse performance score',
        'Built responsive layouts with Tailwind CSS',
        'Implemented lazy loading for images to improve initial page load',
        'Added structured data for real estate listings SEO',
        'Optimized for Core Web Vitals (LCP, FID, CLS)'
      ]
    },
    results: {
      overview: 'The website launched successfully at neha-shing.vercel.app, providing Neha Shing Real Estate with a professional online presence that showcases their properties beautifully and performs exceptionally across all devices.',
      metrics: [
        {
          label: 'Lighthouse Performance',
          value: '95+',
          icon: 'Zap'
        },
        {
          label: 'Page Load Time',
          value: '<1.5s',
          icon: 'Clock'
        },
        {
          label: 'Mobile Responsive',
          value: '100%',
          icon: 'Smartphone'
        },
        {
          label: 'SEO Score',
          value: '98/100',
          icon: 'TrendingUp'
        },
        {
          label: 'Accessibility',
          value: '95+',
          icon: 'Award'
        },
        {
          label: 'Property Inquiry Rate',
          value: '+65%',
          icon: 'Users'
        }
      ],
      clientQuote: {
        quote: 'Abhay delivered exactly what we needed - a beautiful, fast website that showcases our properties professionally. The mobile experience is fantastic, and our clients love how easy it is to browse listings.',
        author: 'Neha Shing',
        title: 'Owner, Neha Shing Real Estate'
      }
    },
    images: [
      '/case-studies/neha-shing-1.jpg',
      '/case-studies/neha-shing-2.jpg',
      '/case-studies/neha-shing-3.jpg',
      '/case-studies/neha-shing-4.jpg'
    ],
    lessonsLearned: 'Real estate websites need to balance beautiful design with performance. Image optimization is critical - using Next.js Image component and proper lazy loading made a huge difference. Mobile-first design was essential as most property searches happen on mobile devices. Fast load times and intuitive navigation directly impact user engagement and inquiry rates.'
  },
  {
    id: '5',
    slug: 'techflow-seo',
    title: 'SEO Transformation: 130% Traffic Growth in 3 Months',
    client: 'TechFlow Innovations',
    industry: 'B2B SaaS',
    projectType: 'SEO Optimization',
    duration: '4 months',
    technologies: ['Next.js', 'Google Search Console', 'Google Analytics', 'Schema.org', 'Lighthouse'],
    thumbnail: '/case-studies/techflow-thumbnail.jpg',
    featured: false,
    challenge: {
      overview: 'TechFlow had a well-designed website but was virtually invisible in search results. Despite having great content and a solid product, they were getting less than 200 organic visits per month. Their Lighthouse score was 62, page load times were over 3 seconds, and they weren\'t appearing for any of their target keywords.',
      painPoints: [
        'Organic traffic: only 180 visitors/month',
        'Not ranking for any primary keywords (page 3-5)',
        'Lighthouse performance score: 62/100',
        'Page load time: 3.4 seconds average',
        'No structured data implementation',
        'Mobile experience issues',
        'Missing or duplicate meta descriptions',
        'Poor internal linking structure'
      ]
    },
    solution: {
      overview: 'I conducted a comprehensive technical SEO audit and implemented a prioritized optimization plan focusing on quick wins first, then systematic improvements to site structure, performance, and content optimization.',
      whatWeBuilt: [
        'Complete technical SEO audit with prioritized action items',
        'Performance optimization: image compression, lazy loading, code splitting',
        'Structured data implementation (Organization, Product, Article schemas)',
        'XML sitemap optimization and robots.txt improvements',
        'Meta tag optimization across all pages',
        'Internal linking structure improvements',
        'Mobile optimization and Core Web Vitals fixes',
        'Monthly SEO monitoring and reporting dashboard'
      ],
      technicalHighlights: [
        'Migrated to Next.js Image component, reducing image payload by 68%',
        'Implemented dynamic sitemap generation with priority weighting',
        'Added JSON-LD structured data for better rich snippet appearance',
        'Optimized font loading strategy, eliminating layout shift',
        'Implemented prefetching for critical navigation paths',
        'Fixed 50+ technical SEO issues identified in audit',
        'Set up Google Search Console monitoring with automated weekly reports'
      ]
    },
    results: {
      overview: 'Within 3 months, TechFlow saw dramatic improvements in search visibility and organic traffic. Several target keywords moved from page 3-5 to page 1, and the technical improvements made the entire site faster and more user-friendly.',
      metrics: [
        {
          label: 'Organic Traffic Growth',
          value: '+130%',
          icon: 'TrendingUp'
        },
        {
          label: 'Lighthouse Score',
          value: '94/100',
          icon: 'Award'
        },
        {
          label: 'Page 1 Rankings',
          value: '12 keywords',
          icon: 'Search'
        },
        {
          label: 'Page Load Time',
          value: '1.3s',
          icon: 'Zap'
        },
        {
          label: 'Core Web Vitals',
          value: '100% pass',
          icon: 'CheckCircle'
        },
        {
          label: 'Qualified Leads Increase',
          value: '+89%',
          icon: 'Users'
        }
      ],
      clientQuote: {
        quote: 'The technical SEO improvements Abhay implemented have been incredible. We\'re now getting consistent organic leads every week, and our site is faster than ever. The investment has more than paid for itself.',
        author: 'David Rodriguez',
        title: 'Marketing Director, TechFlow Innovations'
      }
    },
    images: [
      '/case-studies/techflow-1.jpg',
      '/case-studies/techflow-2.jpg',
      '/case-studies/techflow-3.jpg',
      '/case-studies/techflow-4.jpg'
    ],
    lessonsLearned: 'Technical SEO delivers fast wins when foundational issues are addressed. Performance optimization not only improves SEO but dramatically enhances user experience, leading to better conversion rates. The combination of technical fixes and strategic content optimization creates compounding returns over time.'
  }
];

export const getFeaturedCaseStudies = () => caseStudies.filter(cs => cs.featured);
export const getCaseStudyBySlug = (slug: string) => caseStudies.find(cs => cs.slug === slug);
export const getCaseStudiesByType = (projectType: string) =>
  caseStudies.filter(cs => cs.projectType === projectType);
