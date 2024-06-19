import React, { useEffect, useState } from "react";

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimeAgo = () => {
      const updatedAtDate = new Date(timestamp);
      const now = new Date();

      const timeDifference = now.getTime() - updatedAtDate.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      let ago;

      if (days > 0) {
        ago = `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (hours > 0) {
        ago = `${hours} hr${hours > 1 ? "s" : ""} ago`;
      } else if (minutes > 0) {
        ago = `${minutes} min${minutes > 1 ? "s" : ""} ago`;
      } else {
        ago = `${seconds} sec${seconds > 1 ? "s" : ""} ago`;
      }

      setTimeAgo(ago);
    };

    updateTimeAgo();

    // Refresh time ago every minute
    const interval = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return <span className="font-medium italic text-xs text-[#555555]">{timeAgo}</span>;
};

export default TimeAgo;
