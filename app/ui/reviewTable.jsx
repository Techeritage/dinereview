"use client";
import { useEffect, useState } from "react";
import { risque } from "./fonts";
import Link from "next/link";
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import axios from "axios";
import RatingStar from "./ratingStar";
import { fetchReviews } from "../lib/powerhouse";

const ReviewTable = () => {
  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "dd MMM yyyy");
    const formattedTime = format(date, "HH:mm");
    return { formattedDate, formattedTime };
  };

  // Step 1: State to track which row is toggled
  const [toggledRow, setToggledRow] = useState(null);
  const [reviews, setReviews] = useState(null);

  // Step 2: Create a function to handle the toggle for each row
  const handleToggle = (rowId) => {
    // Toggle the row if it's already toggled, otherwise set it as toggled
    setToggledRow((prevRow) => (prevRow === rowId ? null : rowId));
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`/api/admin/review/${id}/approve`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/api/admin/review/${id}/reject`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/review/${id}/delete`);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchAllReview() {
    const res = await fetchReviews();
    if (res.status === 200) {
      setReviews(res?.data);
    }
  }

  useEffect(() => {
    fetchAllReview();
  }, []);
  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className={`${risque.className} text-lg`}>New Reviews</h2>
        <Link href="/view-all" className="flex items-center">
          <span className="text-black text-sm mr-1">View All</span>
          <span>
            <ChevronRightIcon className="text-black w-5" />
          </span>
        </Link>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th className="whitespace-nowrap">Restaurant Name</th>
            <th className="whitespace-nowrap">Reviewer Name</th>
            <th className="whitespace-nowrap">Rating</th>
            <th className="whitespace-nowrap">Review Date</th>
            <th className="whitespace-nowrap">Review Text</th>
            <th className="whitespace-nowrap">Status</th>
            <th className="whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review) => {
            const { formattedDate, formattedTime } = formatDate(
              review.createdAt
            );
            return (
              <tr key={review._id}>
                <td>
                  <h3 className={`${risque.className}`}>
                    {review.restaurant?.name}
                  </h3>
                </td>
                <td>
                  <h3 className={`${risque.className}`}>{review.user?.name}</h3>
                </td>
                <td>
                  <RatingStar rating={review.rating} />
                </td>
                <td>
                  <p className="text-sm font-medium">{formattedDate}</p>
                  <p className="text-sm font-medium">{formattedTime}</p>
                </td>
                <td>
                  <p className="text-sm font-medium truncated max-w-[150px] h-14">
                    {review.comment}
                  </p>
                </td>
                <td className="text-sm font-medium">{review.status}</td>
                <td>
                  <div className="flex items-center gap-2 relative">
                    {/* Step 3: Conditional rendering based on toggledRow */}
                    {toggledRow === review._id && (
                      <div className="p-2 absolute right-5 top-[-110px] bg-white border rounded-md">
                        <button
                          onClick={() => handleApprove(review._id)}
                          className="border-b mb-1 p-1 pr-7 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(review._id)}
                          className="border-b mb-1 p-1 pr-7 cursor-pointer"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="p-1 pr-7 mb-1 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    )}

                    {/* Step 4: Handle toggle button click */}
                    <button className="w-[50px] h-[50px] bg-myGreen/15 flex items-center justify-center rounded-md">
                      <EyeIcon className="w-[25px] text-myGreen" />
                    </button>
                    <button className="w-[50px] h-[50px] bg-[#DB00FF]/15 flex items-center justify-center rounded-md">
                      <PencilSquareIcon className="w-[25px] text-[#DB00FF]" />
                    </button>
                    <button
                      className="w-[50px] h-[50px] bg-[#d5d5d5]/15 flex items-center justify-center rounded-md"
                      onClick={() => handleToggle(review._id)}
                    >
                      <EllipsisHorizontalIcon className="w-[25px] text-black" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
