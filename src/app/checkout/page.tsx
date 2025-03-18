"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "Basic";
  const price = searchParams.get("price") || "₹4,999";

  const handlePayment = () => {
    alert(`Proceeding to payment for ${name} at ${price}`);
    router.push("/success");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-96 p-6 text-center bg-white/10 border border-gray-700 shadow-lg">
        <CardContent>
          <h2 className="text-3xl font-bold mb-4">Checkout</h2>
          <p className="text-xl font-semibold">{name} Plan</p>
          <p className="text-2xl font-bold mt-2">{price}</p>
          <Button
            onClick={handlePayment}
            className="mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
          >
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
