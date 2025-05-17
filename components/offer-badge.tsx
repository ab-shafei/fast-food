import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface OfferBadgeProps {
  price: number;
}

const priceSizeVariants = cva("font-bold leading-24", {
  variants: {
    size: {
      sm: "text-5xl",
      md: "text-6xl",
      lg: "text-7xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const badgeColorVariants = cva(
  "inline-flex aspect-square flex-col justify-center gap-2 rounded-full px-4 text-center",
  {
    variants: {
      variant: {
        default: "mt-4 bg-white text-black",
        primary: "-mt-3 bg-primary text-white",
        secondary: "-mt-3 bg-secondary text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const OfferBadge = ({
  price,
  variant,
  size,
}: OfferBadgeProps &
  VariantProps<typeof badgeColorVariants> &
  VariantProps<typeof priceSizeVariants>) => {
  return (
    <div className={cn(badgeColorVariants({ variant }))}>
      <h4 className="text-2xl leading-8 font-bold">only</h4>
      <h2 className={cn(priceSizeVariants({ size }))}>${price}</h2>
    </div>
  );
};
