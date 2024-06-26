"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { risque } from "./fonts";
import Image from "next/image";
import RestaurantStatus from "@/app/ui/restaurantStatus";
import Link from "next/link";

const cuisines = [
  {
    name: "African",
    image: "/african.jpg",
  },
  {
    name: "Italian",
    image: "/italian.webp",
  },
  {
    name: "Chinese",
    image: "/chinese.jpg",
  },
  {
    name: "Indian",
    image: "/indian.jpeg",
  },
  {
    name: "American",
    image: "/american.webp",
  },
  {
    name: "Lebanese",
    image: "/lebanese.jpg",
  },
];

export default function CuisineSection() {
  return (
    <div className="mt-7 py-10">
      <div className="px-[5%] pb-3 flex items-center justify-between">
        <h2 className={`${risque.className} tracking-wide text-xl capitalize`}>
          Explore by Cuisine
        </h2>
      </div>
      <div className="px-[5%] mt-4 grid gap-5 grid-cols-2 md:grid-cols-4">
        {cuisines?.map((rest) => (
          <div
            key={rest.name}
            className="relative overflow-hidden h-[100px] rounded-lg w-full"
          >
            <h2 className="text-base font-semibold z-10 text-white absolute top-2 left-2">
              {rest.name}
            </h2>
            <Image
              src={rest.image}
              width={200}
              height={150}
              alt={`${rest.name} image`}
              className="h-full w-full object-cover"
            />

            <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-br from-black/80 to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
