"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-[#080B24] to-[#2B1B52] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        <div>
          <h2 className="text-5xl font-extrabold tracking-wide">WatchDen</h2>
          <p className="text-gray-400 text-[1.1rem] mt-2">
            Timeless Elegance, Crafted for You.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 text-[1.3rem]">
          <a href="#" className="text-gray-400 hover:text-white transition">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Contact
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Terms of Service
          </a>
        </div>

        <div className="flex justify-center md:justify-end space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition hover:scale-110">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition hover:scale-110">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition hover:scale-110">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      <Separator className="bg-gray-700 my-8 mx-auto w-3/4 opacity-50" />

      <div className="text-center">
        <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
        <div className="flex justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-l-md border-gray-600 bg-gray-800 text-white"
          />
          <Button className="rounded-r-md bg-indigo-600 hover:bg-indigo-700">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} WatchDen. All Rights Reserved.
      </div>
    </footer>
  );
}
