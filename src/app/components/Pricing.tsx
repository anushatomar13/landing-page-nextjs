"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹4,999",
    features: ["Elegant Design", "Quartz Movement", "Water Resistant", "1-Year Warranty"],
  },
  {
    name: "Premium",
    price: "₹9,999",
    features: ["Luxury Build", "Automatic Movement", "Sapphire Glass", "5-Year Warranty"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹19,999",
    features: ["Handcrafted", "Tourbillon Mechanism", "Diamond Accents", "Lifetime Warranty"],
  },
];

export default function Pricing() {
  const router = useRouter();

  const handleBuyNow = (plan: any) => {
    router.push(`/checkout?name=${plan.name}&price=${plan.price}`);
  };

  return (
    <section className="relative py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold mb-10"
      >
        Choose Your Timepiece
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 px-6">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              className={`relative w-80 p-6 rounded-xl text-center shadow-lg border border-gray-700 bg-white/10 hover:bg-white/20 transition-all ${
                plan.highlight ? "border-yellow-400 shadow-yellow-400" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <CardContent>
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-4xl font-bold mt-2">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleBuyNow(plan)}
                  className="mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
