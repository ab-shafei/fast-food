import { Offer } from "@/components/offer";
import { cn } from "@/lib/utils";

const offers = [
  {
    id: "1",
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    id: "2",
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    id: "3",
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    id: "4",
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    id: "5",
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    id: "6",
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    id: "7",
    title: "Deal Of The Day",
    description: "Quinoa & Black Bean Burger",
    price: 17,
    backgroundImage: "/images/bg-05-free-img.jpg",
  },
  {
    id: "8",
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    id: "9",
    title: "Wedges Day",
    description: "Crispy Garlic Baked Potato Wedges",
    price: 15,
    backgroundImage: "/images/bg-06-free-img.jpg",
  },
  {
    id: "10",
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
  {
    id: "11",
    title: "The Burger of The Month",
    description: "The Farmhouse Burger",
    price: 13,
    backgroundImage: "/images/bg-07-free-img.jpg",
  },
];

export default function Offers() {
  return (
    <div>
      <div className="bg-primary flex flex-col items-center gap-5 pt-52 pb-44">
        <h4 className="pt-16 text-2xl font-bold lg:text-3xl">
          Checkout out our
        </h4>
        <h1 className="text-5xl font-bold lg:text-9xl">Offers</h1>
      </div>
      <div className="bg-foreground grid grid-cols-1 gap-5 lg:grid-cols-2">
        {offers.map((offer, index) => (
          <Offer
            key={`${index}-${offer.id}-${offer.title}`}
            id={offer.id}
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
    </div>
  );
}
