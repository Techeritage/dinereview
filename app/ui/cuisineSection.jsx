"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { risque } from "./fonts";
import Image from "next/image";
import RestaurantStatus from "@/app/ui/restaurantStatus";
import Link from "next/link";

const cuisines = [
  {
    name: "African",
    bkColor: "blue",
    image: "/african.jpg",
  },
  {
    name: "Italian",
    bkColor: "blue",
    image: "/italian.webp",
  },
  {
    name: "Chinese",
    bkColor: "blue",
    image: "/chinese.jpg",
  },
  {
    name: "Indian",
    bkColor: "blue",
    image: "/indian.jpeg",
  },
]

export default function CuisineSection() {
  return (
    <div className="my-3 mt-7">
      <div className="px-[5%] py-3 flex items-center justify-between">
        <h2 className={`${risque.className} tracking-wide text-xl capitalize`}>
          Explore by Cuisine
        </h2>
      </div>
      <div className="px-[5%] mt-2 grid gap-5 grid-cols-2 md:grid-cols-4">
        {cuisines?.map((rest) => (
          <div key={rest.name} className="relative overflow-hidden h-[100px] rounded-lg w-full">
            <h2 className="text-base font-semibold z-10 text-white absolute top-2 left-2">{rest.name}</h2>
            <Image
              src={rest.image}
              width={200}
              height={150}
              alt={`${rest.name} image`}
              className="h-full w-full object-cover"
            />
            
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-br from-black/80 to-black/30"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
