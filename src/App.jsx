import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EmergencyBanner from "./components/EmergencyBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCall from "./components/FloatingCall";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <EmergencyBanner />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCall />
    </>
  );
}

export default App;