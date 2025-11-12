"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only detect active section on homepage
      if (pathname !== "/") return;

      // Detect active section based on scroll position
      const sections = navItems
        .filter((item) => item.href.startsWith("/#"))
        .map((item) => ({
          id: item.href.slice(2), // Remove /# to get section id
          element: document.getElementById(item.href.slice(2)),
        }));

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            AG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.startsWith("/#") ? item.href.slice(2) : "";
              const isActive = pathname === "/" && activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors relative ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => {
              const sectionId = item.href.startsWith("/#") ? item.href.slice(2) : "";
              const isActive = pathname === "/" && activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
