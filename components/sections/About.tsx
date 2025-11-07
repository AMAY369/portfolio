"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Rocket, GraduationCap } from "lucide-react";
import { useState } from "react";

const identities = [
  {
    id: "corporate",
    title: "Corporate Engineer",
    icon: Briefcase,
    description: "Software Engineer at Vsingh CPA LLC",
    highlights: [
      "Enterprise application development",
      "Employee ERP System architecture",
      "Timesheet & payroll automation",
      "Full-stack web development",
      "Database design & optimization",
    ],
    color: "blue",
  },
  {
    id: "freelance",
    title: "Freelance Developer",
    icon: Rocket,
    description: "Available for custom projects & consulting",
    highlights: [
      "Custom web & mobile applications",
      "E-commerce solutions",
      "API development & integrations",
      "Consultation & technical advisory",
      "Project-based & hourly engagements",
    ],
    color: "purple",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Mobile", items: ["React Native", "Mobile UI/UX", "Cross-platform"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "CI/CD"] },
];

export default function About() {
  const [activeIdentity, setActiveIdentity] = useState("corporate");

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A versatile software engineer with dual expertise in corporate development and freelance solutions
            </p>
          </motion.div>

          {/* Dual Identity Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex rounded-full bg-white dark:bg-gray-900 p-1 shadow-lg border border-gray-200 dark:border-gray-800">
              {identities.map((identity) => (
                <button
                  key={identity.id}
                  onClick={() => setActiveIdentity(identity.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeIdentity === identity.id
                      ? `bg-gradient-to-r from-${identity.color}-600 to-${identity.color === "blue" ? "purple" : "blue"}-600 text-white shadow-lg`
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  {identity.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Identity Content */}
          <div className="mb-20">
            {identities.map((identity) => {
              const Icon = identity.icon;
              return (
                <motion.div
                  key={identity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeIdentity === identity.id ? 1 : 0,
                    x: activeIdentity === identity.id ? 0 : 20,
                    display: activeIdentity === identity.id ? "block" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r from-${identity.color}-500/10 to-${identity.color === "blue" ? "purple" : "blue"}-500/10`}>
                        <Icon className={`w-8 h-8 text-${identity.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{identity.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{identity.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {identity.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-${identity.color}-600`} />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <Code className="inline-block w-8 h-8 mr-2 mb-1" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 grid md:grid-cols-2 gap-8"
          >
            {/* Experience */}
            <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-8 border border-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h4 className="text-2xl font-bold">Experience</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-lg">Software Engineer</h5>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Vsingh CPA LLC</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Building enterprise solutions including ERP systems, timesheet applications, and internal tools
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Freelance Developer</h5>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">Independent</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Delivering custom web and mobile applications for clients across various industries
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl p-8 border border-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-purple-600" />
                <h4 className="text-2xl font-bold">Expertise</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-lg">Software Development</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Specialized in modern JavaScript frameworks, cloud architecture, and scalable application design
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Continuous Learning</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Staying current with latest technologies, best practices, and industry standards
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
