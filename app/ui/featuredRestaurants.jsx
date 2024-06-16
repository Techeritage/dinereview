import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { risque } from "./fonts";

export default function FeaturedRestaurants() {
  return (
    <div className="mt-3">
      <div className="px-[5%] py-3 flex items-center justify-between">
        <h2 className={`${risque.className} text-lg capitalize`}>featured restaurants</h2>
        <p className="capitalize text-sm flex items-center gap-1">see all <span><ChevronRightIcon width={20} /></span></p>
      </div>
    </div>
  )
}
