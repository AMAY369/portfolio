"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getCoreServices, getOtherServices } from "@/content/services";
import Link from "next/link";

export default function Services() {
  const coreServices = getCoreServices();
  const otherServices = getOtherServices();

  return (
    <section id="services" className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
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
              Development{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Premium web and mobile development services for startups and
              businesses worldwide. From MVP to enterprise scale.
            </p>
          </motion.div>

          {/* Core Services Grid */}
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Core Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="group h-full bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                        {/* Icon */}
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                          <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h4>

                        {/* Tagline */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {service.tagline}
                        </p>

                        {/* Key Deliverables */}
                        <ul className="space-y-2 mb-6">
                          {service.deliverables.slice(0, 3).map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Learn More */}
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-gray-700 dark:text-gray-300">
              Other Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link href={`/services/${service.slug}`}>
                      <div className="group h-full bg-white/50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                            <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>

                          <div className="flex-1">
                            {/* Title */}
                            <h4 className="text-lg font-bold mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {service.name}
                            </h4>

                            {/* Tagline */}
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {service.tagline}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Service Comparison Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Not sure which service fits your needs? Let's talk about your project!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Get in touch for a free consultation
              <ArrowRight className="w-4 h-4" />
            </a>
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
              Get a free consultation to discuss your project requirements and
              receive a detailed proposal within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
