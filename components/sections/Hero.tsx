"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >

            {/* Name with Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight pt-12"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Abhay Gupta
              </span>
            </motion.h1>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available for Freelance Projects
              </span>
            </motion.div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                Web Development | App Development | Software Development
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Professional <span className="font-semibold text-blue-600 dark:text-blue-400">freelance developer</span> specializing in{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  web development, app development, and custom software development
                </span>
                . I help businesses in India and worldwide build scalable web applications, mobile apps, and enterprise software solutions using React, Next.js, and the MERN stack.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 justify-center items-center pt-8"
            >
              <a
                href="https://github.com/amay369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/abhayg369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:abhay473165@gmail.com"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-gray-700 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download className="w-6 h-6" />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, repeat: Infinity, duration: 2 }}
              className="pt-16"
            >
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto relative">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-blue-600 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
