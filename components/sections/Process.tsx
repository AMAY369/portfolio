"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your vision, requirements, and goals. I'll analyze your needs, identify potential challenges, and create a detailed project roadmap with timeline and milestones.",
    icon: MessageSquare,
    duration: "3-5 days",
    color: "from-blue-500 to-blue-600",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "I design the user interface, plan the technical architecture, and document the solution approach. You'll review and approve everything before development begins.",
    icon: FileText,
    duration: "5-10 days",
    color: "from-purple-500 to-purple-600",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Iterative development with weekly check-ins and demos. You'll see progress regularly, provide feedback, and I'll make adjustments as we go. Continuous testing ensures quality.",
    icon: Code,
    duration: "Varies by scope",
    color: "from-pink-500 to-pink-600",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Deployment to production, final testing, and team training. All projects include 30-60 days of post-launch support to ensure everything runs smoothly.",
    icon: Rocket,
    duration: "3-5 days",
    color: "from-orange-500 to-orange-600",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-32 bg-white dark:bg-black">
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
              How I{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven process that delivers results. Clear communication,
              regular updates, and quality at every step.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
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
                    <div className="flex flex-col items-center text-center">
                      {/* Step Number Circle */}
                      <div
                        className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {step.step}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {step.description}
                      </p>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium">
                        <span>⏱</span>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Weekly Updates",
                description:
                  "Regular progress reports and demo sessions to keep you in the loop",
                emoji: "📊",
              },
              {
                title: "24-Hour Response",
                description:
                  "Quick turnaround on questions and feedback during business hours",
                emoji: "⚡",
              },
              {
                title: "Post-Launch Support",
                description:
                  "30-60 days of free support after launch to ensure smooth operation",
                emoji: "🛟",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
