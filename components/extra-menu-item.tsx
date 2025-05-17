import Image from "next/image";

interface ExtraMenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const ExtraMenuItem = ({
  name,
  description,
  price,
  image,
}: ExtraMenuItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t-2 border-dashed py-9 lg:flex-row">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8">
        <figure>
          <Image
            width={300}
            height={300}
            src={image}
            className="aspect-square h-22 w-22 rounded-full"
            alt={name}
            sizes="(max-width: 986px) 100vw, 986px"
          />
        </figure>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{name}</h2>
          <p className="text-center font-bold text-[#3b3b3b] lg:text-start">
            {description}
          </p>
        </div>
      </div>
      <h4 className="text-primary text-2xl font-bold md:text-3xl">${price}</h4>
    </div>
  );
};
