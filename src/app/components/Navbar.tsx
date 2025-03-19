"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", id: "hero" },
        { label: "Features", id: "features" },
        { label: "Product", id: "product" },
        { label: "Testimonials", id: "testimonials" },
        { label: "Pricing", id: "pricing" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] lg:w-[70%] px-6 py-3 backdrop-blur-xl bg-white/10 border border-white/10 shadow-xl rounded-lg"
        >
            <div className="flex items-center justify-between">
                <a href="#hero" className="text-3xl font-semibold text-white tracking-wide">
                    WatchDen
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItems.map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="text-gray-300 text-lg relative hover:text-white transition duration-300"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <button
  className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium text-white bg-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:bg-gray-500 disabled:text-gray-300 disabled:pointer-events-none disabled:opacity-50"
  aria-label="SignUp"
  data-slot="button"
  onClick={() => router.push("/SignUp")}
>
  SignUp
</button>



                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="md:hidden flex flex-col w-full py-3 mt-3 bg-black/80 border border-white/10 rounded-lg"
                >
                    {navItems.map(({ label, id }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="text-gray-300 text-lg py-3 px-6 w-full text-left hover:text-white transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
