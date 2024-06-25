"use client";
import {
  ChatBubbleBottomCenterTextIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { risque } from "./fonts";
import Image from "next/image";
import RestaurantStatus from "@/app/ui/restaurantStatus";
import Link from "next/link";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/16/solid";

export default function FeaturedRestaurants({ restaurants }) {
  /* const [restaurants, setRestaurants] = useState();

  async function fetchAllRestaurants() {
    try {
      const res = await getAllRestaurants();
      if (res) {
        setRestaurants(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllRestaurants();
  }, []);
*/
  return (
    <div className="mb-3 mt-7">
      <div className="px-[5%] py-3 flex items-center justify-between">
        <h2 className={`${risque.className} tracking-wide text-xl capitalize`}>
          featured restaurants
        </h2>
        <Link
          href="/user/restaurant"
          className="capitalize text-sm flex items-center gap-1"
        >
          see all{" "}
          <span>
            <ChevronRightIcon width={20} />
          </span>
        </Link>
      </div>
      <div className="px-[5%] pb-10 mt-2 flex gap-3 overflow-scroll no-scrollbar">
        {restaurants?.map((rest) => (
          <div key={rest._id} className="min-w-[270px] shadow-lg rounded-lg">
            <div>
              <Image
                src={rest.images[0]}
                width={270}
                height={120}
                alt={`${rest.name} image`}
                className="h-[120px] w-full object-cover rounded-ss-lg rounded-tr-lg"
              />
            </div>
            <div>
              <h3 className="font-semibold p-2 pb-0 max-w-[150px] truncate">
                {rest.name}
              </h3>

              <div className="flex px-2 items-center justify-between">
                <p className="text-sm text-[#555555] max-w-[150px] truncate">
                  {rest.address}
                </p>
                <div className="bg-myGreen gap-1 flex items-center font-medium text-white px-1 rounded-full">
                  <StarIcon width={20} color="#FFA500" />
                  <div>
                    <span className="text-sm">4.5</span>/
                    <span className="text-xs">5</span>
                  </div>
                </div>
              </div>
              <div className="p-2 border-b flex items-center justify-between">
                <RestaurantStatus operatingHours={rest.operatingHours} />
                <div className="flex items-center">
                  <ChatBubbleBottomCenterTextIcon
                    width={15}
                    className="text-[#555555]"
                  />
                  <span className="texttext-[#555555] text-sm">100</span>
                </div>
              </div>
            </div>
            <div className="px-2 py-3 flex flex-wrap items-center gap-2">
              <div className="w-fit rounded-md border bg-gray-100 p-1 px-2 text-sm text-[#333333]">
                Ewa Agboyin
              </div>
              <div className="w-fit rounded-md border bg-gray-100 p-1 px-2 text-sm text-[#333333]">
                African
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
