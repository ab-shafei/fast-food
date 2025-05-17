import { MenuItem } from "@/components/menu-item";
import { Offer } from "@/components/offer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const offers = [
  {
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
];

const menu = [
  {
    title: "Fatboy Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-02-free-img.png",
  },
  {
    title: "Classic Smash",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-03-free-img.png",
  },
  {
    title: "Bacon Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-04-free-img.png",
  },
  {
    title: "Burger Nine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-05-free-img.png",
  },
  {
    title: "Chicken Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-06-free-img.png",
  },
  {
    title: "Beef Burger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    image: "/images/burger-07-free-img.png",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="bg-primary min-h-screen overflow-hidden px-5 xl:px-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:gap-0 md:pb-36 lg:flex-row lg:gap-5">
          <div className="flex flex-1 flex-col gap-5 pt-36 md:order-2 md:pt-20 lg:order-1 lg:pt-40">
            <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
              Only $12.99
            </h4>
            <h1 className="text-5xl leading-16 font-bold sm:text-8xl sm:leading-32 md:text-9xl md:leading-44">
              The Smokin Burger
            </h1>
            <div className="flex flex-col items-end gap-5 md:flex-row">
              <div className="bg-secondary flex aspect-square flex-col items-center justify-center rounded-full p-8 text-center sm:aspect-auto sm:p-10 md:mb-20 md:ml-0 md:rounded-[200px]">
                <h2 className="text-6xl leading-20 font-bold md:text-7xl md:leading-24">
                  20%
                </h2>
                <h4 className="text-2xl leading-7 font-bold uppercase md:text-3xl">
                  Discount
                </h4>
              </div>
              <div className="flex flex-col gap-5 md:pt-9 md:pr-48 md:pl-2.5 lg:px-0">
                <h3 className="text-4xl leading-11 font-bold md:leading-12">
                  On your first order, if you order online through our App!
                </h3>
                <div>
                  <Button size="lg">Order Online</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[986px] flex-1 flex-col items-start justify-start md:order-1 md:-mb-12 md:w-1/2 md:pt-36 lg:order-2">
            <Image
              width={986}
              height={943}
              src="/images/hero-01-free-img.png"
              className="lg:max-w-[986px]"
              alt="Burger Food"
              sizes="(max-width: 986px) 100vw, 986px"
            />
          </div>
        </div>
      </div>
      <div className="bg-foreground grid min-h-screen grid-cols-1 gap-5 lg:grid-cols-2">
        {offers.map((offer, index) => (
          <Offer
            key={`${index}-${offer.title}`}
            title={offer.title}
            description={offer.description}
            price={offer.price}
            className={cn(
              index % 5 === 0 ? "lg:row-span-2" : "",
              index === offers.length - 1 && index % 2 === 0
                ? "lg:col-span-2"
                : "",
            )}
            backgroundImage={offer.backgroundImage}
          />
        ))}
      </div>
      <div className="bg-secondary min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-5 pb-9 text-center">
            <h6 className="text-base font-bold tracking-widest uppercase">
              Ingredients
            </h6>
            <h2 className="text-4xl font-bold md:text-6xl">
              Baked with Natural Ingredients
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-center md:flex-row md:text-start">
            <div className="flex flex-col items-center gap-5 md:items-start md:justify-end">
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Fresh Buns
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Lettuce Leaf
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Organic Onions
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="">
              <Image
                width={488}
                height={628}
                src="/images/burger-01-free-img.png"
                className="lg:max-w-[986px]"
                alt="Burger Food"
                sizes="(max-width: 986px) 100vw, 986px"
              />
            </div>
            <div className="flex flex-col items-center gap-5 text-center md:items-end md:text-end">
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Glow Cheese
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Quality Meat
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
              <h4 className="text-2xl font-bold md:text-3xl md:leading-7">
                Homemade Bacon
              </h4>
              <p className="mb-7 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 pt-20 pb-20">
          <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
            our menu
          </h6>
          <h2 className="text-4xl font-bold text-black md:text-6xl">
            Choose & Enjoy
          </h2>
          <div className="border-muted-foreground h-12 border-r-3" />
          <div className="grid w-full gap-5 gap-y-14 px-5 text-black sm:grid-cols-3">
            {menu.map((item, index) => (
              <MenuItem
                key={`${index}-${item.title}`}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
