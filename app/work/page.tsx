"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { caseStudies } from "@/content/case-studies";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { useState } from "react";

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "Web Development" },
  { label: "Mobile Apps", value: "Mobile App Development" },
  { label: "Custom Software", value: "Custom Software" },
  { label: "SEO Optimization", value: "SEO Optimization" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCaseStudies = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.projectType === activeFilter);
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Work
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Real projects, real results. Explore detailed case studies showcasing
                successful web applications, mobile apps, and custom software solutions.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Featured Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Success Rate
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Industries Served
                  </div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    95+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Performance Score
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActiveFilter(option.value)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === option.value
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <motion.p
                key={filteredCaseStudies.length}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-gray-600 dark:text-gray-400"
              >
                Showing <span className="font-bold text-blue-600 dark:text-blue-400">{filteredCaseStudies.length}</span> {filteredCaseStudies.length === 1 ? 'project' : 'projects'}
              </motion.p>
            </motion.div>

            {/* Case Studies Grid */}
            <AnimatePresence mode="wait">
              {filteredCaseStudies.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try selecting a different category to see more projects.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                  <Link href={`/work/${study.slug}`}>
                    <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                      {/* Image Placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/10">
                            {study.client.charAt(0)}
                          </div>
                        </div>
                        {/* Featured Badge */}
                        {study.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                              Featured
                            </span>
                          </div>
                        )}
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
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {study.client}
                          </span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {study.title}
                        </h3>

                        {/* Challenge Overview (truncated) */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                          {study.challenge.overview}
                        </p>

                        {/* Key Metrics */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          {study.results.metrics.slice(0, 2).map((metric) => (
                            <div
                              key={metric.label}
                              className="flex items-center gap-1 text-xs"
                            >
                              {metric.icon === "TrendingUp" && (
                                <TrendingUp className="w-3 h-3 text-green-500" />
                              )}
                              {metric.icon === "Clock" && (
                                <Clock className="w-3 h-3 text-blue-500" />
                              )}
                              {metric.icon === "DollarSign" && (
                                <DollarSign className="w-3 h-3 text-green-500" />
                              )}
                              <span className="font-semibold">{metric.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-4">
                          <Clock className="w-3 h-3" />
                          <span>Duration: {study.duration}</span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {study.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {study.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">
                              +{study.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Read Case Study Link */}
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:gap-3 transition-all">
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's build something amazing together. Get a free consultation and
              detailed proposal for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </main>
    </PageTransition>
  );
}
