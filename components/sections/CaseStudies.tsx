"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Clock } from "lucide-react";
import { getFeaturedCaseStudies } from "@/content/case-studies";
import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = getFeaturedCaseStudies();

  return (
    <section id="work" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
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
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real projects, real results. See how I've helped businesses achieve
              their goals.
            </p>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link href={`/work/${study.slug}`}>
                  <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    {/* Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white/10">
                          {study.client.charAt(0)}
                        </div>
                      </div>
                      {/* Project Type Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white backdrop-blur-sm">
                          {study.projectType}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Client & Industry */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {study.client}
                        </span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {study.title}
                      </h3>

                      {/* Challenge Overview (truncated) */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {study.challenge.overview}
                      </p>

                      {/* Key Metrics */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        {study.results.metrics.slice(0, 3).map((metric) => (
                          <div
                            key={metric.label}
                            className="flex items-center gap-2"
                          >
                            {metric.icon === "TrendingUp" && (
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            )}
                            {metric.icon === "Zap" && (
                              <Zap className="w-4 h-4 text-yellow-500" />
                            )}
                            {metric.icon === "Clock" && (
                              <Clock className="w-4 h-4 text-blue-500" />
                            )}
                            <span className="text-sm font-semibold">
                              {metric.value}
                            </span>
                            <span className="text-xs text-gray-500">
                              {metric.label.split(" ")[0]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">
                            +{study.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Read Case Study Link */}
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
