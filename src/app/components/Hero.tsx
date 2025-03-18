"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">


            <motion.h1
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:text-[1rem] text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
            >
                Discover Timeless Elegance
            </motion.h1>

            <br />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="md:text-[1rem] text-[1rem] lg:text-3xl font-bold text-center text-white relative z-20"
            >
                WatchDen offers an exclusive collection of the world’s most <br />
                sought-after luxury timepieces.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="mt-6"
            >
                <Button
                    variant="default"
                    className="relative px-8 py-6 text-[1.3rem] font-semibold text-gray-200 rounded-lg 
             border border-gray-800 bg-[#111] transition-all duration-300 
             shadow-[0_0_10px_rgba(255,255,255,0.1)] 
             hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] 
             hover:bg-[#1a1a1a] hover:border-gray-600 
             before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
             before:from-gray-700/20 before:via-gray-500/10 before:to-gray-700/20 
             before:opacity-0 before:transition-opacity before:duration-300 
             hover:before:opacity-40"
                >
                    Explore Collection
                </Button>

            </motion.div>

            <div className="w-[40rem] h-40 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full"
                >

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                </motion.div>

                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
