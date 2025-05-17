import { Clock, Hamburger, MapPin, TruckElectric } from "lucide-react";
import Image from "next/image";

const outlets = [
  {
    id: 1,
    address: "762 Fulton St San Francisco, California(CA), 94102",
    phoneNumber: "(415) 834-5089",
    image: "/images/outlet-01-free-img.jpg",
  },
  {
    id: 2,
    address: "66 Ceres St San Francisco, California(CA), 94124",
    phoneNumber: "(415) 931-1698",
    image: "/images/outlet-02-free-img.jpg",
  },
  {
    id: 3,
    address: "766 Sutter St San Francisco, California(CA), 94109",
    phoneNumber: "(415) 647-1210",
    image: "/images/outlet-03-free-img.jpg",
  },
];

export default function About() {
  return (
    <div>
      <div className="bg-primary flex flex-col items-center gap-5 pt-52 pb-44">
        <h4 className="pt-16 text-2xl font-bold lg:text-3xl">A few words</h4>
        <h1 className="text-5xl font-bold lg:text-9xl">About us</h1>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/bg-11-free-img.jpg)` }}
      >
        <div className="flex h-full flex-col items-start justify-between bg-black/40 px-10 pb-24 xl:px-24">
          <div className="flex max-w-[1440px] flex-col justify-center gap-5 py-16 text-center xl:mx-40 xl:px-20">
            <div className="mx-auto h-12 border-r-3 border-white" />
            <h2 className="mt-4 mb-14 text-4xl font-extrabold lg:text-6xl">
              We’re passionate about our food
            </h2>
            <h4 className="text-lg font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h4>
            <p className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary pb-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-16 lg:flex-row">
          <div className="mb-8 flex flex-col items-center gap-3 lg:max-w-2xs">
            <span className="-mt-12">
              <TruckElectric
                className="h-24 w-24 rounded-full bg-white p-6"
                color="#c10b0b"
              />
            </span>
            <h5 className="mt-10 text-xl font-bold">
              Free Ship ping on First Order
            </h5>
            <p className="text-center font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-3 lg:max-w-2xs">
            <span className="lg:-mt-12">
              <Hamburger
                className="h-24 w-24 rounded-full bg-white p-6"
                color="#c10b0b"
              />
            </span>
            <h5 className="mt-10 text-xl font-bold">Variety of Dishes</h5>
            <p className="text-center font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="mb-8 flex flex-col items-center gap-3 lg:max-w-2xs">
            <span className="lg:-mt-12">
              <Clock
                className="h-24 w-24 rounded-full bg-white p-6"
                color="#c10b0b"
              />
            </span>
            <h5 className="mt-10 text-xl font-bold">
              Thir ty Minutes Delivery
            </h5>
            <p className="text-center font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 pt-16 pb-14">
        <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
          History
        </h6>
        <h2 className="text-center text-4xl font-bold text-black md:text-6xl">
          Our journey starts way back in 1975
        </h2>
        <div className="border-muted-foreground h-12 border-r-3" />
        <div className="mt-8 grid grid-cols-1 gap-5 text-center text-[#3b3b3b] lg:grid-cols-2 lg:divide-x-2 lg:text-start">
          <div className="flex flex-col gap-5 py-10 lg:p-12">
            <h3 className="text-primary text-4xl font-bold">Origins</h3>
            <p className="font-bold">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
          </div>
          <div className="flex flex-col gap-5 py-10 lg:p-12">
            <h3 className="text-primary text-4xl font-bold">Story</h3>
            <p className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 pt-16 pb-14">
        <h6 className="text-secondary text-base font-bold tracking-widest uppercase">
          Our outlets
        </h6>
        <h2 className="text-center text-4xl font-bold text-black md:text-6xl">
          Find an Outlet Near You
        </h2>
        <div className="border-muted-foreground h-12 border-r-3" />

        <div className="mt-20 flex flex-col items-center justify-center gap-20 lg:flex-row">
          {outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="flex flex-col items-center justify-center gap-5 text-black"
            >
              <Image
                width={370}
                height={440}
                src={outlet.image}
                className="rounded-lg shadow-2xl"
                alt="Burger Food"
                sizes="(max-width: 370px) 100vw, 370px"
              />
              <div className="flex flex-col items-center justify-center gap-5 text-center">
                <MapPin color="#faab34" className="mt-4" />
                <h5 className="text-xl font-bold">{outlet.address}</h5>
                <h6 className="text-primary font-bold">{outlet.phoneNumber}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
