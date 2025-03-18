"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael",
    username: "@michael_w",
    body: "The craftsmanship is impeccable. This watch is a true statement piece!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Sophia",
    username: "@sophia_t",
    body: "Absolutely stunning! The precision and elegance make this my favorite timepiece.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Daniel",
    username: "@daniel_h",
    body: "The attention to detail is second to none. A perfect blend of luxury and performance.",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Emily",
    username: "@emily_b",
    body: "This watch turns heads everywhere I go. Timeless design and unmatched quality.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Sophia",
    username: "@sophia_t",
    body: "Absolutely stunning! The precision and elegance make this my favorite timepiece.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Daniel",
    username: "@daniel_h",
    body: "The attention to detail is second to none. A perfect blend of luxury and performance.",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Emily",
    username: "@emily_b",
    body: "This watch turns heads everywhere I go. Timeless design and unmatched quality.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Sophia",
    username: "@sophia_t",
    body: "Absolutely stunning! The precision and elegance make this my favorite timepiece.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Daniel",
    username: "@daniel_h",
    body: "The attention to detail is second to none. A perfect blend of luxury and performance.",
    img: "https://avatar.vercel.sh/daniel",
  },
  {
    name: "Emily",
    username: "@emily_b",
    body: "This watch turns heads everywhere I go. Timeless design and unmatched quality.",
    img: "https://avatar.vercel.sh/emily",
  },
];

const testimonialList = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function InfiniteTestimonials() {
  return (
    <section className="relative py-16 overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        What Our Customers Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 70, 
            ease: "linear",
          }}
        >
          {testimonialList.map((testimonial, index) => (
            <Card
              key={index}
              className="w-80 bg-white/10 text-white p-4 rounded-xl shadow-lg flex-shrink-0"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.username}</p>
                <p className="mt-3 text-center text-gray-200">"{testimonial.body}"</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
