"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Rocket, Target, Users, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "PHP", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Expo", "Native iOS/Android"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Azure", "Docker", "CI/CD", "Vercel", "Git"],
  },
];

const whyWorkWithMe = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "MVP in 4-6 weeks. Enterprise projects with clear milestones and on-time delivery.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "I focus on your business goals, not just code. Solutions that drive real results.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description:
      "Weekly updates, 24-hour response time, and transparent progress tracking.",
  },
  {
    icon: Zap,
    title: "Quality Code",
    description:
      "Clean, maintainable, well-documented code. Easy for your team to work with long-term.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950"
    >
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Software Engineer combining corporate reliability with freelance
              flexibility
            </p>
          </motion.div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a Software Engineer specializing in building modern web
                  and mobile applications. Currently working as a Software
                  Engineer at{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Vsingh CPA LLC
                  </span>
                  , where I build enterprise solutions including ERP systems and
                  internal automation tools.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm available for{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    freelance projects worldwide
                  </span>{" "}
                  typically taking on 2-3 meaningful projects per quarter to ensure each client receives my full attention and dedication. I work with startups launching MVPs, established businesses modernizing their tech stack, and agencies needing specialized development expertise across any technology stack.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Technology-agnostic approach:
                  </span>{" "}
                  While I excel with React, Next.js, and Node.js, I'm not limited to any specific stack. I choose the right tools for your project requirements — whether that's Python, Java, PHP, Vue.js, Angular, or any other technology. Your project's success comes first, and I'll use whatever technology delivers the best results for your specific needs and constraints.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  My approach combines the best of both worlds: corporate-level quality, reliability, and structured processes with the agility, direct communication, and cost-effectiveness of freelance work. When you work with me, you're not just hiring a developer — you're getting a technical partner invested in your success.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I pride myself on transparent communication, meeting deadlines consistently, and writing clean, maintainable code that your team can work with long after the project ends. Every project includes comprehensive documentation, knowledge transfer, and post-launch support to ensure smooth handoffs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why Work With Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Why Work With Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyWorkWithMe.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 w-fit mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
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

          {/* Experience Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Current Role */}
            <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-8 border border-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h4 className="text-2xl font-bold">Current Role</h4>
              </div>
              <div>
                <h5 className="font-semibold text-lg">Software Engineer</h5>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  Vsingh CPA LLC
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building enterprise solutions including Employee ERP systems,
                  timesheet applications, payroll automation, and internal tools.
                  Working with modern tech stack (React, Next.js, Node.js, PostgreSQL).
                </p>
              </div>
            </div>

            {/* Freelance Availability */}
            <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl p-8 border border-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-purple-600" />
                <h4 className="text-2xl font-bold">Freelance Availability</h4>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available Now
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Taking on 2-3 select projects per quarter. Typical project
                  timeline: 4-14 weeks depending on scope.
                </p>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
