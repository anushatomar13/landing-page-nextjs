import Features from "./components/Features";
import { Hero } from "./components/Hero";
import Pricing from "./components/Pricing";
import { WatchProduct } from "./components/Product";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
<div className="bg-gradient-to-b from-black via-[#080B24] to-[#2B1B52]">
      <Hero />
      <Features />
      <WatchProduct />
      <Testimonials />
      <Pricing />
    </div>
  );
}
