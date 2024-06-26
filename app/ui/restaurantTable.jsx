"use client";
import { risque } from "./fonts";
import Link from "next/link";
import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllRestaurants } from "../lib/powerhouse";

const RestaurantTable = () => {
  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "dd MMM yyyy");
    const formattedTime = format(date, "HH:mm");
    return { formattedDate, formattedTime };
  };

  const [toggledRow, setToggledRow] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  // Step 2: Create a function to handle the toggle
  const handleToggle = (rowId) => {
    // Toggle the row if it's already toggled, otherwise set it as toggled
    setToggledRow((prevRow) => (prevRow === rowId ? null : rowId));
  };

  const handleApprove = async (id) => {
    try {
      await axios.post(`/api/admin/restaurant/${id}/approve`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/api/admin/restaurant/${id}/reject`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/restaurant/${id}/delete`);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const res = await getAllRestaurants();
      if (res.status === 200) {
        setRestaurants(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className={`${risque.className} text-lg`}>New Restaurants</h2>
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
            <th>Restaurant</th>
            <th>Address</th>
            <th className="whitespace-nowrap">Cuisine Type</th>
            <th>Added Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants?.map((user) => {
            const { formattedDate, formattedTime } = formatDate(user.createdAt);
            return (
              <tr key={user.email}>
                <td>
                  <div className="user-info">
                    <img src={user?.profilePictureUrl} alt="Profile Picture" />
                    <div>
                      <h3 className={`${risque.className}`}>{user.name}</h3>
                      <p className="text-sm text-[#555555]">{user.email}</p>
                      <p className="text-sm text-[#555555]">{user.phone}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-sm font-medium">{user?.address}</p>
                </td>
                <td>
                  <p className="text-sm font-medium">{user?.cuisineType}</p>
                </td>
                <td>
                  <div>
                    <p className="text-sm font-medium">{formattedDate}</p>
                    <p className="text-sm font-medium">{formattedTime}</p>
                  </div>
                </td>
                <td className="text-sm font-medium">{user?.status}</td>
                <td>
                  <div className="flex items-center gap-2 relative">
                    {toggledRow === user._id && (
                      <div className="p-2 absolute right-5 top-[-110px] bg-white border rounded-md">
                        <button
                          onClick={() => handleApprove(user._id)}
                          className="border-b mb-1 p-1 pr-7 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(user._id)}
                          className="border-b mb-1 p-1 pr-7 cursor-pointer"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
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
                      onClick={() => handleToggle(user._id)}
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

export default RestaurantTable;
