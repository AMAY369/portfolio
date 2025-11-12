export interface Testimonial {
  id: string;
  content: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientPhoto?: string;
  projectType: string;
  rating: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    content: 'Abhay transformed our outdated e-commerce platform into a modern, lightning-fast Next.js application. Our conversion rate increased by 47% in the first month, and page load time dropped from 4.2s to 1.1s. His attention to detail and ability to understand our business needs beyond just the technical requirements was exceptional. Best investment we\'ve made this year.',
    clientName: 'Rohan Mehta',
    clientTitle: 'Founder & CEO',
    clientCompany: 'GreenCart India',
    projectType: 'Web Development',
    rating: 5,
    featured: true
  },
  {
    id: '2',
    content: 'We needed a comprehensive timesheet application built from scratch to manage our team\'s time tracking and billing. Abhay delivered a fully functional web application with automated time tracking, project management, and detailed reporting. His communication was excellent - weekly demos kept us in the loop, and he was always available to answer questions. Highly recommend!',
    clientName: 'Vikram Singh',
    clientTitle: 'CTO',
    clientCompany: 'Vsingh CPA LLC',
    projectType: 'Mobile App Development',
    rating: 5,
    featured: true
  },
  {
    id: '3',
    content: 'As a non-technical founder, I was intimidated by the prospect of building custom software. Abhay made the entire process smooth and understandable. He built us a comprehensive CRM that automated our entire sales pipeline, saving our team 15+ hours per week. The system handles everything from lead capture to invoice generation. He is very cost effective. Worth every rupee.',
    clientName: 'Ananya Desai',
    clientTitle: 'Founder',
    clientCompany: 'ConsultPro Services',
    projectType: 'Custom Software',
    rating: 5,
    featured: true
  },
  {
    id: '4',
    content: 'Our website was barely visible in search results. Abhay conducted a thorough technical SEO audit and implemented fixes that took our Lighthouse score from 62 to 94. Within 3 months, our organic traffic increased by 130% and we\'re now ranking on page 1 for our key terms. The investment paid for itself in new business.',
    clientName: 'Arjun Malhotra',
    clientTitle: 'Marketing Director',
    clientCompany: 'TechVista Solutions',
    projectType: 'SEO Optimization',
    rating: 5,
    featured: true
  },
  {
    id: '5',
    content: 'Abhay\'s technical consulting helped us avoid costly mistakes. Before committing to a major platform rebuild, we brought him in to review our architecture plans. He identified several scalability issues and suggested better approaches that saved us an estimated ₹65L in future refactoring. Now he\'s our fractional CTO - best decision we made.',
    clientName: 'Priya Sharma',
    clientTitle: 'COO',
    clientCompany: 'DataStream Analytics India',
    projectType: 'Technical Consulting',
    rating: 5
  },
  {
    id: '6',
    content: 'Professional, responsive, and delivered exactly what we needed. Abhay built our internal inventory management system that integrates with our existing tools. The admin panel is intuitive, and training our team was a breeze thanks to his clear documentation. He even stuck around for a month post-launch to ensure everything was perfect.',
    clientName: 'Rajesh Kumar',
    clientTitle: 'Operations Manager',
    clientCompany: 'RetailHub India',
    projectType: 'Custom Software',
    rating: 5
  },
  {
    id: '7',
    content: 'We hired Abhay to rebuild our legacy system into a modern web app. He not only delivered on time and on budget but also suggested several features we hadn\'t thought of that dramatically improved the user experience. His code quality is excellent - our team easily picked up where he left off for future enhancements.',
    clientName: 'Kavita Reddy',
    clientTitle: 'VP of Engineering',
    clientCompany: 'CloudSync Technologies India',
    projectType: 'Web Development',
    rating: 5
  },
  {
    id: '8',
    content: 'What impressed me most was Abhay\'s ability to translate technical jargon into business terms. He helped us evaluate competing technology stacks and make informed decisions. His architecture recommendations were spot-on, and the development team we eventually hired praised the solid foundation he helped us establish.',
    clientName: 'Sanjay Kapoor',
    clientTitle: 'Founder',
    clientCompany: 'FinServe Innovations',
    projectType: 'Technical Consulting',
    rating: 5
  }
];

export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);
export const getTestimonialsByProject = (projectType: string) =>
  testimonials.filter(t => t.projectType === projectType);
