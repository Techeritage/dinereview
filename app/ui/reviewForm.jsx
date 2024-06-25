"use client";
import { risque } from "@/app/ui/fonts";
import StarRating from "@/app/ui/starRating";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { addreview, getAllRestaurants } from "../lib/powerhouse";
import ReviewFormContext from "../providers/ReviewControl";

export default function ReviewForm({restaurants}) {
  const { data: session } = useSession();
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const { isReviewFormVisible, hideReviewForm } = useContext(ReviewFormContext);
  /*
  const [restaurants, setRestaurants] = useState();

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
  }, []); */

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const user = session?.user?.id;

    try {
      const result = await addreview(user, selectedRestaurant, rating, comment);
      if (result?.error) {
        setError("Error submitting review");
        console.error("Review submission error:", result.error);
      } else {
        setSelectedRestaurant("");
        setRating(0);
        setComment("");
        setError("");
        hideReviewForm();
        alert("thanks for your review");
      }
    } catch (error) {
      console.error("Review submission error:", error);
      setError("Error submitting review");
    }
  };

  if (!isReviewFormVisible) return null;

  return (
    <div className="fixed z-10 top-0 right-0 left-0 bottom-0 flex justify-center items-center px-[5%] py-9 bg-black/70">
      <div className="bg-white relative rounded-2xl w-[350px] h-fit p-7">
        <button
          onClick={hideReviewForm}
          className="w-fit p-1 bg-gray-100 rounded-full absolute right-5 top-3"
        >
          <XMarkIcon width={20} />
        </button>
        <div className="flex items-center justify-center gap-2">
          <h2 className={`${risque.className} text-3xl whitespace-nowrap`}>
            Hey {session?.user?.name.split(" ")[1]}
          </h2>
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
        <form onSubmit={handleFormSubmit}>
          <select
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            className="input-box w-full my-5"
          >
            <option value="" disabled>
              Choose a restaurant
            </option>
            {restaurants?.map((restaurant) => (
              <option key={restaurant._id} value={restaurant._id}>
                {restaurant.name}
              </option>
            ))}
          </select>

          <textarea
            className="resize-none input-box w-full"
            rows={5}
            placeholder="Write additional comments here ..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="my-3">
            <p className="font-medium text-center text-[#555555] text-sm">
              {rating === 0
                ? "Click a star to rate"
                : `You rated ${rating} out of 5 stars`}
            </p>
            <StarRating onRate={setRating} width={35} />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            className="w-full mt-2 p-3 rounded-lg bg-myGreen text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
