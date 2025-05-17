import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { OfferBadge } from "./offer-badge";

interface OfferProps {
  backgroundImage: string;
  price: number;
  title: string;
  description: string;
}

const getBadgeVarient = (
  price: number,
): {
  variant: "primary" | "secondary" | "default";
  size: "lg" | "sm" | "md";
} => {
  if (price < 14) return { variant: "primary", size: "sm" };
  if (price < 17) return { variant: "secondary", size: "sm" };
  return { variant: "default", size: "lg" };
};

export const Offer = ({
  backgroundImage,
  price,
  title,
  description,
  className,
}: React.ComponentProps<"div"> & OfferProps) => {
  return (
    <div
      className={cn(className, "bg-cover bg-no-repeat")}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full flex-col items-start justify-between bg-black/35 px-6 pb-24 xl:px-24">
        <OfferBadge price={price} {...getBadgeVarient(price)} />
        <div className="items flex flex-col gap-5">
          <h4 className="mt-4 text-2xl font-bold md:text-3xl md:leading-7">
            {title}
          </h4>
          <h2 className="text-3xl leading-20 font-bold md:text-5xl md:leading-20">
            {description}
          </h2>
          <div className="pt-10">
            <Button size="lg">Order Online</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
