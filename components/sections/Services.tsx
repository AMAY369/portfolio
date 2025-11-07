"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, CheckCircle2, ArrowRight, MessageSquare, Rocket, Users } from "lucide-react";

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies",
    features: [
      "Custom web application development",
      "Responsive & mobile-first design",
      "E-commerce solutions with payment integration",
      "CMS integration & content management",
      "API development & third-party integrations",
      "Performance optimization & SEO",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    color: "blue",
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps that deliver native-like experiences on iOS and Android",
    features: [
      "Cross-platform mobile app development",
      "Native iOS & Android experiences",
      "Real-time features & push notifications",
      "Offline-first architecture",
      "App store deployment & maintenance",
      "Mobile UI/UX design",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Mobile APIs"],
    color: "purple",
  },
  {
    id: "custom-software",
    icon: Zap,
    title: "Custom Software Solutions",
    description: "Tailored enterprise solutions and automation tools to streamline your business processes",
    features: [
      "Enterprise application development",
      "Business process automation",
      "Database design & optimization",
      "Legacy system modernization",
      "Technical consulting & architecture",
      "Ongoing support & maintenance",
    ],
    technologies: ["Full-Stack", "Cloud Services", "DevOps", "Microservices"],
    color: "green",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your needs, goals, and project requirements",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Planning",
    description: "Defining project scope, timeline, and technical approach",
    icon: Users,
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with regular updates and feedback loops",
    icon: Code,
  },
  {
    step: "04",
    title: "Launch",
    description: "Deployment, testing, and ongoing support for your project",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Services <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offered</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From concept to deployment, I deliver high-quality solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorMap = {
                blue: {
                  gradient: "from-blue-500 to-blue-600",
                  bg: "from-blue-500/10 to-blue-600/10",
                  text: "text-blue-600 dark:text-blue-400",
                  border: "border-blue-500/20",
                },
                purple: {
                  gradient: "from-purple-500 to-purple-600",
                  bg: "from-purple-500/10 to-purple-600/10",
                  text: "text-purple-600 dark:text-purple-400",
                  border: "border-purple-500/20",
                },
                green: {
                  gradient: "from-green-500 to-green-600",
                  bg: "from-green-500/10 to-green-600/10",
                  text: "text-green-600 dark:text-green-400",
                  border: "border-green-500/20",
                },
              };
              const colors = colorMap[service.color as keyof typeof colorMap];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.bg} ${colors.border} border mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              How I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative"
                  >
                    {/* Connection Line */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 -z-10" />
                    )}

                    <div className="text-center">
                      {/* Step Number */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {step.step}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-3">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with custom software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
