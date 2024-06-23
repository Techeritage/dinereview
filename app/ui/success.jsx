"use client";
import { risque } from "@/app/ui/fonts";
import StarRating from "@/app/ui/starRating";
import Image from "next/image";
import { useState } from "react";

export default function ReviewForm() {
  const { showSuccess, setShowSuccess } = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center px-[5%] py-9 bg-black/70">
      <div className="bg-white relative rounded-2xl w-[350px] h-fit p-7">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/wavinghand.png"
            width={40}
            height={40}
            alt="waving hand emoji"
          />
        </div>
        <p className="my-2 font-medium text-center text-[#555555] text-sm">
          Would you like to rate your experience?
        </p>
      </div>
    </div>
  );
}
