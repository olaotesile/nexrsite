import HeroSection from "@/components/HeroSection"; // Correct the path to 'sections'
import Header from "@/components/Header"; // adjust path if needed
import Why from "@/components/Why";
import See from "@/components/See"; // adjust path if needed
import Testimonials from "@/components/Testimonial";
import Register from "@/components/Register";
import More from "@/components/More"; // adjust path if needed
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Why />
      <Testimonials />
      <More />
      <See />
      <Register />
      <Footer />
    </main>
  );
}
