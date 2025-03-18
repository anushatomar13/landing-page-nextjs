import Features from "./components/Features";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Pricing from "./components/Pricing";
import { WatchProduct } from "./components/Product";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-[#080B24] to-[#2B1B52] scroll-smooth">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="product"><WatchProduct /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="pricing"><Pricing /></section>
      <Footer />
    </div>
  );
}

