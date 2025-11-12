import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
