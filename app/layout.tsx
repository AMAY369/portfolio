import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.guptaabhay.in'),
  title: {
    default: "Abhay Gupta - Web Development | App Development | Software Development | Freelance Developer India",
    template: "%s | Abhay Gupta"
  },
  description: "Abhay Gupta: Professional Web Development, App Development & Software Development services. Experienced freelance developer in India specializing in React, Next.js, MERN stack. Expert in building scalable web applications, mobile apps & custom software. Available for hire worldwide. 5+ projects delivered with 100% success rate.",
  keywords: [
    // Primary Keywords - Your Name (HIGHEST PRIORITY!)
    "Abhay Gupta",
    "abhay gupta",
    "Abhay Gupta developer",
    "Abhay Gupta freelance",
    "Abhay Gupta software engineer",
    "Abhay Gupta web developer",

    // Service Keywords (TARGET KEYWORDS!)
    "web development",
    "app development",
    "software development",
    "mobile app development",
    "freelancing",
    "freelance developer",
    "web development services",
    "app development services",
    "software development services",

    // Location + Service (HIGH PRIORITY!)
    "web development india",
    "app development india",
    "software development india",
    "freelance developer india",
    "web developer india",
    "software engineer india",

    // Long-tail Keywords (EASIER TO RANK!)
    "freelance web developer for hire",
    "freelance app developer",
    "custom software development services",
    "hire freelance developer",
    "react developer for hire",
    "next.js developer freelance",
    "mern stack developer freelance",
    "full stack developer available",

    // Technology Keywords
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Full Stack Developer",

    // Service-specific
    "Custom Web Development",
    "Mobile Application Development",
    "E-commerce Development",
    "API Development",
    "Responsive Web Design",
    "PWA Development",

    // Company & Role
    "Vsingh CPA LLC",
    "Software Engineer",
    "Freelance Web Development",
  ],
  authors: [{ name: "Abhay Gupta", url: "https://www.guptaabhay.in" }],
  creator: "Abhay Gupta",
  publisher: "Abhay Gupta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.guptaabhay.in",
    title: "Abhay Gupta - Web Development | App Development | Software Development | Freelance Developer",
    description: "Professional Web Development, App Development & Software Development services in India. Freelance developer specializing in React, Next.js, MERN stack. 5+ projects delivered. Available for hire worldwide.",
    siteName: "Abhay Gupta - Freelance Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhay Gupta - Full Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Gupta - Web Development | App Development | Software Development",
    description: "Freelance Developer specializing in Web Development, App Development & Software Development. React, Next.js, MERN stack expert. Available for hire in India & worldwide.",
    images: ["/og-image.jpg"],
    creator: "@ABHAYG369",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.guptaabhay.in",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'revisit-after': '7 days',
    'language': 'English',
    'geo.region': 'IN',
    'geo.placename': 'India',
    'classification': 'Software Development, Web Development, Freelance Services',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.guptaabhay.in/#person",
                  name: "Abhay Gupta",
                  givenName: "Abhay",
                  familyName: "Gupta",
                  url: "https://www.guptaabhay.in",
                  image: {
                    "@type": "ImageObject",
                    url: "https://www.guptaabhay.in/og-image.jpg",
                    width: 1200,
                    height: 630
                  },
                  sameAs: [
                    "https://github.com/amay369",
                    "https://linkedin.com/in/abhayg369",
                    "https://x.com/ABHAYG369",
                    "https://stackoverflow.com/users/20102858/abhay"
                  ],
                  jobTitle: ["Software Engineer", "Full Stack Developer", "Freelance Developer"],
                  worksFor: {
                    "@type": "Organization",
                    name: "Vsingh CPA LLC",
                    url: "https://www.guptaabhay.in"
                  },
                  description: "Abhay Gupta is a Software Engineer and Freelance Developer specializing in full-stack development, MERN stack (MongoDB, Express.js, React.js, Node.js), web applications, and mobile solutions.",
                  knowsAbout: [
                    "Web Development",
                    "App Development",
                    "Software Development",
                    "Mobile App Development",
                    "Freelance Development",
                    "Full Stack Development",
                    "MERN Stack Development",
                    "React Development",
                    "Next.js Development",
                    "TypeScript Development",
                    "Node.js Development",
                    "MongoDB",
                    "Express.js",
                    "JavaScript Development",
                    "API Development",
                    "E-commerce Development",
                    "Custom Software Solutions"
                  ],
                  email: "abhay473165@gmail.com",
                  telephone: "+918090629954",
                  alumniOf: {
                    "@type": "EducationalOrganization",
                    name: "Information Technology"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.guptaabhay.in/#website",
                  url: "https://www.guptaabhay.in",
                  name: "Abhay Gupta - Full Stack Developer Portfolio",
                  description: "Professional portfolio of Abhay Gupta, a Full Stack Developer and Software Engineer specializing in MERN stack development, web applications, and mobile solutions.",
                  publisher: {
                    "@id": "https://www.guptaabhay.in/#person"
                  },
                  inLanguage: "en-US"
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.guptaabhay.in/#business",
                  name: "Abhay Gupta - Web Development, App Development & Software Development Services",
                  description: "Professional web development, app development, and software development services in India by Abhay Gupta. Freelance developer specializing in React, Next.js, MERN stack, mobile apps, and custom software solutions.",
                  founder: {
                    "@id": "https://www.guptaabhay.in/#person"
                  },
                  areaServed: ["India", "Worldwide"],
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                    addressRegion: "India"
                  },
                  url: "https://www.guptaabhay.in",
                  email: "abhay473165@gmail.com",
                  telephone: "+918090629954",
                  priceRange: "$$",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Development Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Development",
                          description: "Professional web development services using React, Next.js, and modern frameworks. Custom websites, web applications, and e-commerce platforms."
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "App Development",
                          description: "Mobile app development for iOS and Android using React Native. Cross-platform apps with native performance."
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Software Development",
                          description: "Custom software development services. ERP systems, CRM solutions, and enterprise applications using MERN stack."
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Freelance Development",
                          description: "Freelance development services for startups and businesses. Full-stack development, API integration, and technical consulting."
                        }
                      }
                    ]
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
