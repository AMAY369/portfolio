export type ProjectCategory = "all" | "web" | "mobile" | "fullstack";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory[];
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge: string;
  solution: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "amay-cafe",
    title: "Amay Cafe",
    description: "Modern restaurant website with online ordering system and reservation management",
    longDescription: "A full-featured restaurant website built with React and modern web technologies. Features include an interactive menu, online ordering system, table reservations, and admin dashboard for order management.",
    category: ["web", "fullstack"],
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/projects/amay-cafe.jpg",
    githubUrl: "https://github.com/amay369/amay-cafe",
    challenge: "Creating an intuitive ordering experience with real-time menu updates and seamless checkout flow while maintaining performance.",
    solution: "Implemented optimistic UI updates, lazy loading for images, and efficient state management with React Context to ensure smooth user experience even with complex menu data.",
    featured: false,
  },
  {
    id: "erp-system",
    title: "Employee ERP System",
    description: "Enterprise resource planning system for employee management and workflow automation",
    longDescription: "Comprehensive ERP solution developed at Vsingh CPA LLC for managing employee data, payroll, attendance, and performance metrics. Built with scalability and security in mind.",
    category: ["web", "fullstack"],
    tags: ["React", "TypeScript", "PostgreSQL", "Node.js", "AWS"],
    image: "/projects/erp-system.jpg",
    challenge: "Building a secure, scalable system to handle sensitive employee data with role-based access control and real-time synchronization across multiple departments.",
    solution: "Architected a microservices-based backend with JWT authentication, implemented granular RBAC, and used WebSockets for real-time updates. Database optimization reduced query times by 60%.",
    featured: true,
  },
  {
    id: "timesheet-app",
    title: "Timesheet Application",
    description: "Time tracking and payroll automation system with reporting and analytics",
    longDescription: "Developed for Vsingh CPA LLC to automate timesheet management, payroll calculations, and generate comprehensive reports for accounting purposes.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Prisma", "Chart.js"],
    image: "/projects/timesheet-app.jpg",
    challenge: "Automating complex payroll calculations with multiple pay rates, overtime rules, and generating accurate reports for accounting compliance.",
    solution: "Created a rule engine for flexible payroll calculations, implemented automated validation checks, and built interactive dashboards with Chart.js for visualizing time allocation and project costs.",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management",
    longDescription: "A complete e-commerce platform with product catalog, shopping cart, secure checkout, payment processing, and admin dashboard for inventory and order management.",
    category: ["web", "fullstack"],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "/projects/ecommerce.jpg",
    githubUrl: "https://github.com/amay369",
    challenge: "Integrating secure payment processing while maintaining PCI compliance and providing seamless checkout experience across devices.",
    solution: "Integrated Stripe for secure payment handling, implemented cart persistence with localStorage and database sync, and optimized checkout flow reducing cart abandonment by 35%.",
    featured: false,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management platform with real-time updates and team features",
    longDescription: "A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration, and team productivity analytics.",
    category: ["web", "fullstack"],
    tags: ["React", "Firebase", "TypeScript", "DnD Kit", "Tailwind CSS"],
    image: "/projects/task-app.jpg",
    githubUrl: "https://github.com/amay369",
    challenge: "Implementing real-time collaboration features with conflict resolution when multiple users edit the same tasks simultaneously.",
    solution: "Leveraged Firebase Realtime Database for instant updates, implemented optimistic locking for conflict resolution, and used drag-and-drop library for intuitive task organization.",
    featured: false,
  },
  {
    id: "vtube",
    title: "vTube",
    description: "Full-featured video streaming platform with user authentication and video management",
    longDescription: "A YouTube-inspired video streaming application built with modern web technologies. Features include video upload and playback, user authentication, comments system, like/dislike functionality, channel subscriptions, and personalized recommendations.",
    category: ["web", "fullstack"],
    tags: ["React", "Node.js", "MongoDB", "Express", "Video.js", "JWT"],
    image: "/projects/vtube.jpg",
    githubUrl: "https://github.com/amay369",
    challenge: "Building a scalable video streaming platform with efficient video encoding, smooth playback across devices, and implementing complex recommendation algorithms while maintaining performance.",
    solution: "Implemented chunked video uploads with progress tracking, used adaptive bitrate streaming for optimal playback quality, integrated cloud storage for video files, and built a recommendation engine based on viewing history and engagement metrics.",
    featured: false,
  },
];

export const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "fullstack", label: "Full-Stack" },
];
