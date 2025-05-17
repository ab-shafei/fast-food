import { ExtraMenuItem } from "@/components/extra-menu-item";
import { MenuItem } from "@/components/menu-item";
import { Offer } from "@/components/offer";
import { cn } from "@/lib/utils";

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

const extras = [
  {
    name: "BN Famous Fries",
    description: "Crispy Fries, Salt, Butter, Cheese, Spices",
    price: 2,
    image: "/images/menu-01-free-img.jpg",
  },
  {
    name: "4 Pieces Chicken Wings",
    description: "Deep Fried Chicken Wings",
    price: 2.5,
    image: "/images/menu-02-free-img.jpg",
  },
  {
    name: "Potato Wedges",
    description: "Crispy Garlic Baked Potato Wedges, Cheese, Salt",
    price: 2,
    image: "/images/menu-03-free-img.jpg",
  },
  {
    name: "Crispy Chicken Sandwich",
    description: "Chicken Breast, Tomatoes, Cheese, Iceberg Salad",
    price: 3,
    image: "/images/menu-04-free-img.jpg",
  },
  {
    name: "The Spring Salad",
    description: "Tomatoes, Cucumber, Black Beans, Olives, Salad, Cheese",
    price: 2.75,
    image: "/images/menu-05-free-img.jpg",
  },
  {
    name: "Chicken Salad",
    description: "Chicken Meat, Spacial Gravy, Fresh Bread",
    price: 4,
    image: "/images/menu-06-free-img.jpg",
  },
];

const sweets = [
  {
    name: "Baked Apple Pie",
    description: "Our special homemade apple pie",
    price: 2,
    image: "/images/menu-07-free-img.jpg",
  },
  {
    name: "Chocolate Chip Cookie",
    description: "Chocolate Chip Cookie Lorem Ipsum Dolor",
    price: 2.5,
    image: "/images/menu-08-free-img.jpg",
  },
  {
    name: "Hot Caramel Shake",
    description: "Caramel, Whipped Cream, Milk, Chocolate",
    price: 2,
    image: "/images/menu-09-free-img.jpg",
  },
  {
    name: "Vanilla Ice Cream",
    description: "100g Vanilla Ice Cream, Cone",
    price: 3,
    image: "/images/menu-10-free-img.jpg",
  },
  {
    name: "Strawberry Shake",
    description: "Whipped Cream, Milk, Strawberry Flavours",
    price: 2.75,
    image: "/images/menu-11-free-img.jpg",
  },
  {
    name: "Classic Fruit Tart",
    description: "Apple, Strawberry, Orange, Banana, Raspberry",
    price: 4,
    image: "/images/menu-12-free-img.jpg",
  },
];

export default function OurMenu() {
  return (
    <div className="">
      <div className="bg-white">
        <div className="bg-primary mb-10 flex flex-col items-center gap-5 pt-52 pb-44">
          <h4 className="pt-16 text-2xl font-bold lg:text-3xl">Checkout</h4>
          <h1 className="text-5xl font-bold lg:text-9xl">Our Menu</h1>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 pt-20 pb-20">
          <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
            A variety of
          </h6>
          <h2 className="text-4xl font-bold text-black md:text-6xl">
            Delicious Burgers
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
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 pt-20 pb-20">
        <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
          Extras
        </h6>
        <h2 className="text-4xl font-bold text-black md:text-6xl">
          Snakes & sides
        </h2>
        <div className="border-muted-foreground h-12 border-r-3" />
        <div className="mt-10 grid w-full gap-5 px-5 text-black xl:grid-cols-2 xl:gap-x-20">
          {extras.map((item, index) => (
            <ExtraMenuItem
              key={`${index}-${item.name}`}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="bg-foreground grid grid-cols-1 gap-5 lg:grid-cols-2">
        {offers.map((offer, index) => (
          <Offer
            key={`${index}-${offer.title}`}
            title={offer.title}
            description={offer.description}
            price={offer.price}
            className={cn(index === 0 ? "lg:row-span-2" : "")}
            backgroundImage={offer.backgroundImage}
          />
        ))}
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 pt-20 pb-20">
        <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
          Delicious
        </h6>
        <h2 className="text-4xl font-bold text-black md:text-6xl">
          Sweets & Desserts
        </h2>
        <div className="border-muted-foreground h-12 border-r-3" />
        <div className="mt-10 grid w-full gap-5 px-5 text-black xl:grid-cols-2 xl:gap-x-20">
          {sweets.map((item, index) => (
            <ExtraMenuItem
              key={`${index}-${item.name}`}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
