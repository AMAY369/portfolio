import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

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
    default: "Abhay Gupta - Full Stack Developer | Software Engineer | MERN Stack Expert | Freelance Developer",
    template: "%s | Abhay Gupta"
  },
  description: "Abhay Gupta is a skilled Full Stack Developer, Software Engineer at Vsingh CPA LLC, and Freelance Developer specializing in MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript. Expert in building scalable web applications, mobile apps, ERP systems, and e-commerce platforms. Available for freelance projects worldwide.",
  keywords: [
    // Primary Keywords - Your Name (CRITICAL for ranking!)
    "Abhay Gupta",
    "abhay gupta",
    "Abhay Gupta software developer",
    "Abhay Gupta freelancer",
    "Abhay Gupta full stack developer",
    "Abhay Gupta portfolio",
    "Abhay Gupta software engineer",
    "Abhay Gupta web developer",
    "Abhay Gupta MERN stack",
    "Abhay Gupta React developer",

    // Job Titles & Roles
    "Software Engineer",
    "Full Stack Developer",
    "Freelance Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Mobile App Developer",

    // Technologies
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Express.js Developer",
    "JavaScript Developer",

    // Company & Services
    "Vsingh CPA LLC",
    "Freelance Web Development",
    "Custom Software Development",
    "ERP Systems",
    "E-commerce Development",
    "API Development",
    "Mobile Application Development",
    "Responsive Web Design",

    // Location-based
    "Software Engineer India",
    "Freelance Developer India",
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
    title: "Abhay Gupta - Full Stack Developer | Software Engineer | MERN Stack Expert",
    description: "Abhay Gupta is a skilled Full Stack Developer and Software Engineer specializing in MERN stack, Next.js, TypeScript. Expert in building scalable web applications, mobile apps, and custom software solutions. Available for freelance projects.",
    siteName: "Abhay Gupta - Portfolio",
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
    title: "Abhay Gupta - Full Stack Developer | Software Engineer",
    description: "Abhay Gupta - Full Stack Developer specializing in MERN stack, Next.js, TypeScript. Expert in building scalable web applications and mobile solutions. Available for freelance work.",
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
                    "Full Stack Development",
                    "MERN Stack",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "PostgreSQL",
                    "Web Development",
                    "Mobile Development",
                    "JavaScript",
                    "Software Engineering",
                    "API Development",
                    "RESTful APIs"
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
                  name: "Abhay Gupta - Full Stack Development Services",
                  description: "Professional web development and software engineering services by Abhay Gupta, specializing in MERN stack applications, Next.js, TypeScript, and mobile development.",
                  founder: {
                    "@id": "https://www.guptaabhay.in/#person"
                  },
                  areaServed: "Worldwide",
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
                          name: "Full Stack Development",
                          description: "End-to-end web application development using modern technologies"
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "MERN Stack Development",
                          description: "MongoDB, Express.js, React.js, Node.js application development"
                        }
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "React & Next.js Development",
                          description: "Modern React and Next.js application development with TypeScript"
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
        <Analytics />
      </body>
    </html>
  );
}
