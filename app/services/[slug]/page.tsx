"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { getServiceBySlug } from "@/content/services";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { notFound } from "next/navigation";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              {/* Icon & Title */}
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                    {service.category === "core"
                      ? "Core Service"
                      : "Other Service"}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                    {service.name}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Typical Timeline</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {service.timeline.small} - {service.timeline.large}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {service.longDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Technologies I Use</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">My Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{step.step}</h3>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
                  >
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your {service.name} Project?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Get a free consultation to discuss your project requirements.
              Response within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                Contact Me
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
