"use client";
import React, { useEffect, useState } from "react";
import { risque } from "./fonts";
import Image from "next/image";
import RatingStar from "./ratingStar";
import TimeAgo from "./timeAgo";
import { fetchReviews } from "@/app/lib/powerhouse";

export default function RecentReviews({ reviews }) {
  /* const [reviews, setReviews] = useState();

  async function fetchAllReviews() {
    try {
      const res = await fetchReviews();
      if (res) {
        setReviews(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllReviews();
  }, []); */
  return (
    <div className="my-3 mt-7 px-[5%] py-10 bg-gray-50">
      <h2 className={`${risque.className} tracking-wide text-xl capitalize`}>
        recent reviews
      </h2>
      <div className="mt-3">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="mt-2 shadow-sm py-3 px-1 bg-white rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2 pl-2">
              <Image
                src={review?.restaurant?.profilePictureUrl}
                width={20}
                height={20}
                alt={`${review.restaurant?.name} logo`}
                className="rounded-full"
              />
              <p className="font-semibold text-[#333333] text-sm">
                {review.restaurant?.name}
              </p>
            </div>
            <div className="flex items-center gap-2 pl-2 mb-2">
              <Image
                src={review?.user?.profilePicture}
                width={40}
                height={40}
                alt={`${review.restaurant?.name} logo`}
                className="rounded-full h-[40px] object-cover"
              />
              <div>
                <p className={`${risque.className} text-sm tracking-wide`}>
                  {review.user?.name}
                </p>
                <div className="flex items-center gap-3">
                  <RatingStar rating={review.rating} />
                  <TimeAgo timestamp={review.updatedAt} />
                </div>
              </div>
            </div>
            <p
              className="text-sm pl-2 font-normal text-[#333333]"
              key={review._id}
            >
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
