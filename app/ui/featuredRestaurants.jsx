import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { risque } from "./fonts";
import Image from "next/image";

export default function FeaturedRestaurants({ restaurants }) {
  return (
    <div className="my-3">
      <div className="px-[5%] py-3 flex items-center justify-between">
        <h2 className={`${risque.className} text-lg capitalize`}>
          featured restaurants
        </h2>
        <p className="capitalize text-sm flex items-center gap-1">
          see all{" "}
          <span>
            <ChevronRightIcon width={20} />
          </span>
        </p>
      </div>
      <div className="px-[5%] mt-2 flex gap-3 overflow-scroll no-scrollbar">
        {restaurants.map((rest) => (
          <div key={rest._id} className="min-w-[270px]">
            <Image src={rest.images[0]}  width={270} height={126} alt={`${rest.name} image`} className="h-[126px] object-cover rounded-xl"/>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center justify-center">
                <Image src={rest.profilePictureUrl} width={40} height={40} alt={`${rest.name} logo`} className="h-[40px] object-contain border rounded-full" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold max-w-[150px] truncate">{rest.name}</h3>
                  <p className="text-xs text-myGreen">Open</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#555555] max-w-[150px] truncate">{rest.address}</p>
                  <p className="text-xs text-[#555555]">1 Km</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
