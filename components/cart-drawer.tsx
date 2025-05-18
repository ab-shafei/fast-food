"use client";

import { useCartStore } from "@/lib/store";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { items, total, itemCount, removeFromCart, updateQuantity } =
    useCartStore();

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="relative cursor-pointer transition-transform hover:scale-105"
        >
          <ShoppingCart className="text-primary size-5" />
          {itemCount > 0 && (
            <span className="bg-primary absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full text-xs text-white">
              {itemCount}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full text-neutral-800">
        <div className="mx-auto w-full md:max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Your Cart</DrawerTitle>
            <DrawerDescription className="text-[#3b3b3b]">
              {itemCount === 0
                ? "Your cart is empty"
                : `${itemCount} items in your cart`}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex max-h-[50vh] flex-col gap-4 overflow-y-auto p-4 md:max-h-[60vh]">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center rounded-lg border p-4 sm:gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-[#3b3b3b]">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="size-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive size-8 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <div className="flex items-center justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 w-full cursor-pointer text-white hover:text-white"
              disabled={itemCount === 0}
            >
              Checkout
            </Button>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full text-[#3b3b3b] ring-1"
              >
                Continue Shopping
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
