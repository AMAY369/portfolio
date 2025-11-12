"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Calendar, Send, CheckCircle2, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "abhay473165@gmail.com",
    href: "mailto:abhay473165@gmail.com",
    color: "blue",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/abhayg369",
    color: "blue",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@amay369",
    href: "https://github.com/amay369",
    color: "purple",
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    value: "Book a meeting",
    href: "#contact",
    color: "green",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Project type is required";
    }

    if (!formData.timeline) {
      newErrors.timeline = "Timeline is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "", timeline: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to send message. Please try again or email directly.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white dark:bg-black">
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
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Let's connect and create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={method.title}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br from-${method.color}-500/10 to-${method.color}-600/10 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 text-${method.color}-600 dark:text-${method.color}-400`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{method.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-6 border border-blue-500/10">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Availability
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Currently available for freelance projects and consulting opportunities.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Response time:</span> Within 24 hours
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400">Message Sent!</h4>
                      <p className="text-sm text-green-600/80 dark:text-green-400/80">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400">Error Sending Message</h4>
                      <p className="text-sm text-red-600/80 dark:text-red-400/80">
                        {errors.submit}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
                      errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
                      errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
                      errors.projectType ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="custom-software">Custom Software Solutions</option>
                    <option value="seo-optimization">SEO Optimization</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="technical-consulting">Technical Consulting</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
                </div>

{/* Timeline */}
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    When Do You Need This? *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
                      errors.timeline ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (1-2 weeks)</option>
                    <option value="1-2-months">1-2 Months</option>
                    <option value="2-3-months">2-3 Months</option>
                    <option value="3-plus-months">3+ Months</option>
                    <option value="flexible">Flexible / Just Exploring</option>
                  </select>
                  {errors.timeline && <p className="mt-1 text-sm text-red-500">{errors.timeline}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${
                      errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
