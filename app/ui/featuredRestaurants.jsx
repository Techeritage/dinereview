"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { risque } from "./fonts";
import Image from "next/image";
import RestaurantStatus from "@/app/ui/restaurantStatus";
import Link from "next/link";
import { useEffect, useState } from "react";

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
          <div key={rest._id} className="w-[270px] shadow-lg rounded-lg">
            <div>
              <Image
                src={rest.images[0]}
                width={270}
                height={120}
                alt={`${rest.name} image`}
                className="h-[120px] object-cover rounded-ss-lg rounded-tr-lg"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold max-w-[150px] truncate">
                {rest.name}
              </h3>
              <RestaurantStatus operatingHours={rest.operatingHours} />
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#555555] max-w-[150px] truncate">
                  {rest.address}
                </p>
                <div className="bg-myGreen font-medium text-white px-1 rounded-full">
                  <span>4.5</span>/
                  <span className="text-sm">5</span>
                </div>
              </div>
            </div>
            <div>
              <div>African</div>
              <div>Ewa Agboyin</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
