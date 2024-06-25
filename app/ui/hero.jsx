"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { risque } from "../ui/fonts";
import Image from "next/image";
import { useContext } from "react";
import ReviewFormContext from "../providers/ReviewControl";
import Header from "./header";
import Link from "next/link";

export default function Hero() {
  const { showReviewForm } = useContext(ReviewFormContext);
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="https://ik.imagekit.io/krr3p3joi/tr:w-500,h-600/top-view-table-full-delicious-food-composition%20(1).jpg?updatedAt=1719179275435"
        width={500}
        height={600}
        className="w-full md:hidden h-[600px] object-cover"
      />
      <Image
        src="https://ik.imagekit.io/krr3p3joi/top-view-table-full-delicious-food-composition.jpg?updatedAt=1719180396207"
        width={2000}
        height={1000}
        className="w-full h-[600px] hidden md:block object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60">
        <Header />
        {/*<video autoPlay muted loop className="w-full h-full object-cover">
        <source src="https://ik.imagekit.io/krr3p3joi/5101338-uhd_3840_2160_25fps.mp4?updatedAt=1718580469736" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
        <div className="flex bk-image-content w-full h-[500px] lg:h-[500px] flex-col items-center justify-evenly px-[5%] lg:px-[10%]">
          <h1
            className={`${risque.className} tracking-wide text-white leading-10 text-4xl lg:text-5xl text-center`}
          >
            Discover the Best <br></br> Dining Experiences
          </h1>
          <div className="flex gap-3 items-center w-full border-2 rounded-xl p-3 border-[#d5d5d5]">
            <MagnifyingGlassIcon width={25} className="text-white" />
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or reviews..."
              className="truncate border-none outline-none bg-transparent text-white w-full placeholder:text-white/80 placeholder:text-sm lg:placeholder:text-base"
            />
          </div>
          <div className="relative w-[320px] h-[75px] lg:h-[85px] lg:w-[450px]">
            <button className="absolute top-0 whitespace-nowrap w-[150px] lg:w-[200px] lg:py-4 py-4 rounded-xl bg-myGreen text-white text-sm lg:text-base text-center font-semibold">
              <Link href="/user/restaurants">Explore Restaurants</Link>
            </button>
            <button
              onClick={showReviewForm}
              className="absolute bottom-0 right-0 whitespace-nowrap w-[150px] py-4 lg:w-[200px] lg:py-4 rounded-xl bg-white text-black lg:text-base text-center text-sm font-semibold"
            >
              Write A Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
