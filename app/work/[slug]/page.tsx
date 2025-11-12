"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Building2,
  TrendingUp,
  Zap,
  Clock,
  Target,
  CheckCircle2,
  Award,
  DollarSign,
  Users,
  LineChart,
  ShoppingCart,
  Star,
  CreditCard,
  FileText,
  Percent,
  Search,
  Download,
} from "lucide-react";
import { getCaseStudyBySlug } from "@/content/case-studies";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { notFound } from "next/navigation";

// Icon mapping
const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  Clock,
  Target,
  CheckCircle2,
  Award,
  DollarSign,
  Users,
  LineChart,
  ShoppingCart,
  Star,
  CreditCard,
  FileText,
  Percent,
  Search,
  Download,
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Projects
              </Link>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {study.projectType}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {study.industry}
                </span>
                {study.featured && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-yellow-900">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {study.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">{study.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{study.duration}</span>
                </div>
              </div>

              {/* Key Metrics Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {study.results.metrics.slice(0, 4).map((metric) => {
                  const IconComponent = iconMap[metric.icon] || TrendingUp;
                  return (
                    <div
                      key={metric.label}
                      className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800"
                    >
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {study.challenge.overview}
              </p>

              <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-red-600" />
                  Key Pain Points
                </h3>
                <ul className="space-y-3">
                  {study.challenge.painPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                        <span className="text-red-600 font-bold text-sm">
                          {index + 1}
                        </span>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {study.solution.overview}
              </p>

              {/* What We Built */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">What We Built</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.solution.whatWeBuilt.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  Technical Highlights
                </h3>
                <ul className="space-y-3">
                  {study.solution.technicalHighlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                        <Zap className="w-3 h-3 text-blue-600" />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                The Results
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                {study.results.overview}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {study.results.metrics.map((metric) => {
                  const IconComponent = iconMap[metric.icon] || TrendingUp;
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-500/10 rounded-2xl p-6 text-center"
                    >
                      <IconComponent className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Lessons Learned (Optional) */}
      {study.lessonsLearned && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Lessons Learned
                </h2>
                <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {study.lessonsLearned}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want Similar Results for Your Project?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your business goals with
              custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View More Projects
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
