"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-0"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <h1 className="text-6xl font-bold text-white tracking-tight leading-tight">
                    Discover Timeless Elegance
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    WatchDen offers an exclusive collection of the world’s most sought-after luxury timepieces.
                </p>

                <div className="mt-6 flex gap-4 justify-center">
                    <Button size="lg" className="bg-white text-black font-semibold hover:bg-gray-200">
                        Explore Collection
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        Contact Us
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
