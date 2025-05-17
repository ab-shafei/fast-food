import { Plus } from "lucide-react";
import Image from "next/image";

interface MenuItemProps {
  title: string;
  description: string;
  image: string;
}

export const MenuItem = ({ title, description, image }: MenuItemProps) => {
  return (
    <div className="mb-10">
      <div className="z-10 mx-auto flex max-w-[300px]">
        <Image
          width={986}
          height={943}
          src={image}
          className=""
          alt="Burger Food"
          sizes="(max-width: 986px) 100vw, 986px"
        />
      </div>
      <div className="hover:shadow-custom -mt-60 flex flex-col items-center gap-5 rounded-md px-10 pt-60 text-center hover:bg-white sm:-mt-30 sm:pt-30">
        <h4 className="mt-10 text-2xl font-bold md:text-3xl md:leading-7">
          {title}
        </h4>
        <h6 className="text-primary text-xl font-bold">$4.6</h6>
        <p className="text-xl text-[#3b3b3b]">{description}</p>
        <div className="bg-primary -mb-8 rounded-full p-4 text-white">
          <Plus strokeWidth={3} size={34} />
        </div>
      </div>
    </div>
  );
};
