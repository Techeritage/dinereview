import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { risque } from "../ui/fonts";

export default function Hero() {
  return (
    <div className="relative w-full h-[432px]">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-evenly absolute bg-black/45 top-0 bottom-0 left-0 right-0 px-[5%]">
        <h1 className={`${risque.className} text-white text-4xl text-center`}>
          Discover the Best Dining Experiences
        </h1>
        <div className="flex gap-3 items-center w-full border-2 rounded-xl p-3 border-[#d5d5d5]">
          <MagnifyingGlassIcon width={30} className="text-white stroke-2" />
          <input
            type="text"
            placeholder="Explore reviews for your favorite restaurants..."
            className="truncate border-none outline-none bg-transparent text-white w-full placeholder:text-white placeholder:text-xs"
          />
        </div>
        <div className="relative w-[290px] h-[64px]">
          <button className="absolute top-0 whitespace-nowrap w-[135px] py-4 rounded-xl bg-myGreen text-white text-xs text-center font-semibold">
            Explore Restaurants
          </button>
          <button className="absolute bottom-0 right-0 whitespace-nowrap w-[135px] py-4 rounded-xl bg-[#d5d5d5] text-[#333333] text-center text-xs font-semibold">
            Write A Review
          </button>
        </div>
      </div>
    </div>
  );
}
