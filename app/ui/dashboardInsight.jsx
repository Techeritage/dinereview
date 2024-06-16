"use client";
import { risque } from "@/app/ui/fonts";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DashboardInsight({ userData, restaurants }) {
  const { data: session } = useSession();
  return (
    <section className="h-[300px] rounded-lg p-5 bg-myGreen mt-3 mr-3 flex flex-col justify-between">
      <div className="flex justify-between">
        <h1 className={`${risque.className} text-4xl text-white/90`}>
          Welcome <br /> Back {session?.user?.name?.split(" ")[1]}!
        </h1>
        <div className="relative w-[120px] h-[60px] bg-white rounded-md">
          <Image
            src="/notification.svg"
            width={50}
            height={32.83}
            alt="bell icon"
            className="ml-2"
          />
          <Image
            src="/profile.jpg"
            width={50}
            height={70}
            alt="profile pics"
            className="absolute bottom-1 right-1 rounded-md h-[50px] object-cover"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[190px] h-[100px] bg-white rounded-lg p-2 shadow-lg">
          <p className="text-center text-black/65">Total Users</p>
          <h1
            className={`${risque.className} mt-1 text-4xl text-center text-black/90`}
          >
            {userData?.length}
          </h1>
        </div>
        <div className="w-[190px] h-[100px] bg-white rounded-lg p-2 shadow-lg">
          <p className="text-center text-black/65">Total Reviews</p>
          <h1
            className={`${risque.className} mt-1 text-4xl text-center text-black/90`}
          >
            500
          </h1>
        </div>
        <div className="w-[190px] h-[100px] bg-white rounded-lg p-2 shadow-lg">
          <p className="text-center text-black/65">Total Restaurants</p>
          <h1
            className={`${risque.className} mt-1 text-4xl text-center text-black/90`}
          >
            {restaurants?.length}
          </h1>
        </div>
      </div>
    </section>
  );
}
