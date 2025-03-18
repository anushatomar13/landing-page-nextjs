"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "Curated Luxury", description: "A handpicked selection of the world's finest luxury timepieces." },
  { title: "Authenticity Guaranteed", description: "Every watch is 100% authentic and certified by experts." },
  { title: "Exclusive Access", description: "Get early access to rare and limited-edition releases." },
  { title: "Secure Transactions", description: "Safe and transparent purchasing process with buyer protection." },
];

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="absolute inset-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 max-w-5xl"
      >
        <h2 className="text-5xl font-bold text-white tracking-tight leading-tight">
          Elevate Your Timepiece Collection
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Experience luxury and exclusivity with WatchDen.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
            >
              <Card className="bg-black/80 border border-gray-700 shadow-lg hover:shadow-xl transition duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <CheckCircle className="text-[#00D4FF]" size={28} />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
