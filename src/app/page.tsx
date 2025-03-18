import Features from "./components/Features";
import Hero from "./components/Hero";
import { WatchProduct } from "./components/Product";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#76030f] via-[#2F0635] to-[#121b67]">
      <Hero/>
      <Features/>
      <WatchProduct/>
      <Testimonials/>
    </div>
  );
}
