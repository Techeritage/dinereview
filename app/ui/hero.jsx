import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { risque } from "../ui/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[432px]">
      <Image src='/hero.jpg' width={400} height={432} alt="hero backgrouynd image" className="w-full h-full object-cover" />
      {/*<video autoPlay muted loop className="w-full h-full object-cover">
        <source src="https://ik.imagekit.io/krr3p3joi/5101338-uhd_3840_2160_25fps.mp4?updatedAt=1718580469736" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
      <div className="flex flex-col items-center justify-evenly absolute bg-black/45 top-0 bottom-0 left-0 right-0 px-[5%]">
        <h1 className={`${risque.className} text-white leading-10 text-4xl text-center`}>
          Discover the Best <br></br> Dining Experiences
        </h1>
        <div className="flex gap-3 items-center w-full border-2 rounded-xl p-3 border-[#d5d5d5]">
          <MagnifyingGlassIcon width={25} className="text-white" />
          <input
            type="text"
            placeholder="Explore reviews for your favorite restaurants..."
            className="truncate border-none outline-none bg-transparent text-white w-full placeholder:text-white placeholder:text-sm"
          />
        </div>
        <div className="relative w-[320px] h-[75px]">
          <button className="absolute top-0 whitespace-nowrap w-[150px] py-4 rounded-xl bg-myGreen text-white text-sm text-center font-semibold">
            Explore Restaurants
          </button>
          <button className="absolute bottom-0 right-0 whitespace-nowrap w-[150px] py-4 rounded-xl bg-[#d5d5d5] text-[#333333] text-center text-sm font-semibold">
            Write A Review
          </button>
        </div>
      </div>
    </div>
  );
}
