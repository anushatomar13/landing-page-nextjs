"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Success() {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-bold">Payment Successful!</h2>
      <p className="text-lg mt-2">Thank you for your purchase.</p>
      <Button
        onClick={() => router.push("/")}
        className="mt-6 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
      >
        Back to Home
      </Button>
    </section>
  );
}
