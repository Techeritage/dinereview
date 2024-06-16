import React from "react";
import { risque } from "./fonts";
import Link from "next/link";
import {
  ChevronRightIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";

const UserTable = ({ users }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = format(date, "dd MMM yyyy");
    const formattedTime = format(date, "HH:mm");
    return { formattedDate, formattedTime };
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className={`${risque.className} text-lg`}>New Users</h2>
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
            <th>User</th>
            <th>Registration Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            const { formattedDate, formattedTime } = formatDate(user.createdAt);
            return (
              <tr key={user.email}>
                <td>
                  <div className="user-info">
                    <img src={user.profilePicture} alt="Profile Picture" />
                    <div>
                      <h3 className={`${risque.className}`}>
                        {user.name}
                      </h3>
                      <p className="text-sm text-[#555555]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <p className="text-sm font-medium">{formattedDate}</p>
                    <p className="text-sm font-medium">{formattedTime}</p>
                  </div>
                </td>
                <td className="text-sm font-medium">{user?.status}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button className="w-[50px] h-[50px] bg-myGreen/15 flex items-center justify-center rounded-md">
                      <EyeIcon className="w-[25px] text-myGreen" />
                    </button>
                    <button className="w-[50px] h-[50px] bg-[#DB00FF]/15 flex items-center justify-center rounded-md">
                      <PencilSquareIcon className="w-[25px] text-[#DB00FF]" />
                    </button>
                    <button className="w-[50px] h-[50px] bg-[#FF0000]/15 flex items-center justify-center rounded-md">
                      <TrashIcon className="w-[25px] text-[#FF0000]" />
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

export default UserTable;
