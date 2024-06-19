"use client";
import React from "react";
import { risque } from "./fonts";
import Image from "next/image";
import RatingStar from "./ratingStar";
import TimeAgo from "./timeAgo";

export default function RecentReviews({ reviews }) {
  return (
    <div className="my-3 mt-7 px-[5%]">
      <h2 className={`${risque.className} text-xl capitalize`}>
        recent reviews
      </h2>
      <div>
        {reviews?.map((review) => (
            <div key={review._id} className="border-b border-black/10 py-3">
              <div className="flex items-center gap-2 mb-2 pl-2">
                <Image
                  src={review?.restaurant?.profilePictureUrl}
                  width={20}
                  height={20}
                  alt={`${review.restaurant?.name} logo`}
                  className="rounded-full"
                />
                <p className="font-semibold text-[#333333] text-sm">{review.restaurant?.name}</p>
              </div>
              <div className="flex items-center gap-2 pl-2 mb-2">
                <Image
                  src={review?.user.profilePicture}
                  width={40}
                  height={40}
                  alt={`${review.restaurant?.name} logo`}
                  className="rounded-full h-[40px] object-cover"
                />
                <div>
                  <p className={`${risque.className} text-sm`}>{review.user.name}</p>
                  <div className="flex items-center gap-3">
                    <RatingStar rating={review.rating} />
                    <TimeAgo timestamp={review.updatedAt} />
                  </div>
                </div>
              </div>
              <p className="text-sm pl-2 font-normal text-[#333333]" key={review._id}>{review.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
