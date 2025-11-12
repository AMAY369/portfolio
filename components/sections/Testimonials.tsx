"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getFeaturedTestimonials } from "@/content/testimonials";

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials();

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white dark:bg-black">
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
              Client{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what clients say about
              working with me.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.clientName.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.clientName}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.clientTitle}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.clientCompany}
                    </p>
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {testimonial.projectType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Projects Completed", value: "25+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Response Time", value: "<24hrs" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
