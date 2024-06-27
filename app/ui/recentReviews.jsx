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
    <div className="px-[5%] pb-5">
      <h2 className={`${risque.className} tracking-wide text-xl capitalize`}>
        recent reviews
      </h2>
      <div className="mt-3">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="mt-4 min-h-[180px] p-3 pl-0 border-b border-[#d5d5d5]/30"
          >
            <div className="flex items-center gap-2 mb-4 pl-2">
              <Image
                src={review?.restaurant?.profilePictureUrl}
                width={20}
                height={20}
                alt={`${review.restaurant?.name} logo`}
                className="rounded-full"
              />
              <p className="font-semibold text-[#333333]">
                {review.restaurant?.name}
              </p>
            </div>
            <div className="flex items-center gap-2 pl-2 mb-4">
              <Image
                src={review?.user?.profilePicture}
                width={50}
                height={50}
                alt={`${review.restaurant?.name} logo`}
                className="rounded-full h-[50px] object-cover"
              />
              <div className="flex h-[45px] items-center flex-col justify-between">
                <p className={`${risque.className} tracking-wide`}>
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
