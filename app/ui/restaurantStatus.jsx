import React from "react";

const RestaurantStatus = ({ operatingHours }) => {
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const currentTime = new Date().toTimeString().split(" ")[0].substring(0, 5);

  const todayHours = operatingHours.find((day) => day.day === currentDay);

  if (!todayHours || !todayHours.isOpen) {
    return <p className="text-sm text-red-500">Closed</p>;
  }

  const { open, close } = todayHours;
  const isOpen = currentTime >= open && currentTime <= close;

  return (
    <>
      {isOpen ? <p className="text-sm text-myGreen">Open</p> : <p className="text-sm text-red-500">Closed</p>}{" "}
    </>
  );
};

export default RestaurantStatus;
