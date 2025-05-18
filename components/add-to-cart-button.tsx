"use client";

import { useCartStore } from "@/lib/store";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function AddToCartButton({
  id,
  name,
  price,
  image,
  description,
}: AddToCartButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      size="icon"
      className="bg-primary h-14 w-14 cursor-pointer rounded-full text-white hover:text-white"
      onClick={() => addToCart({ id, name, price, image, description })}
    >
      <Plus strokeWidth={3} />
    </Button>
  );
}
