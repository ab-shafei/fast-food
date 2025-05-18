import Image from "next/image";
import { AddToCartButton } from "./add-to-cart-button";

interface MenuItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export const MenuItem = ({
  id,
  title,
  description,
  image,
  price,
}: MenuItemProps) => {
  return (
    <div className="mb-10">
      <div className="z-10 mx-auto flex max-w-[300px]">
        <Image
          width={986}
          height={943}
          src={image}
          className=""
          alt={title}
          sizes="(max-width: 986px) 100vw, 986px"
        />
      </div>
      <div className="hover:shadow-custom -mt-60 flex flex-col items-center gap-5 rounded-md px-10 pt-60 text-center hover:bg-white sm:-mt-30 sm:pt-30">
        <h4 className="mt-10 text-2xl font-bold md:text-3xl md:leading-7">
          {title}
        </h4>
        <h6 className="text-primary text-xl font-bold">${price.toFixed(2)}</h6>
        <p className="text-xl text-[#3b3b3b]">{description}</p>
        <div className="translate-y-7 transition-all hover:scale-105">
          <AddToCartButton
            id={id}
            name={title}
            price={price}
            image={image}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};
