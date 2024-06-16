"use client";
import Link from "next/link";
import { risque } from "./fonts";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navLinks = [
  {
    linkName: "Dashboard",
    linkIcon: "/dashboard.svg",
    linkUrl: "/admin/dashboard",
  },
  {
    linkName: "Users",
    linkIcon: "/user.svg",
    linkUrl: "/admin/users",
  },
  {
    linkName: "Restaurants",
    linkIcon: "/cutlery.svg",
    linkUrl: "/admin/restaurants",
  },
  {
    linkName: "Reviews",
    linkIcon: "/review.svg",
    linkUrl: "/admin/reviews",
  },
  {
    linkName: "Analytics",
    linkIcon: "/analytics.svg",
    linkUrl: "/admin/analytics",
  },
  {
    linkName: "Settings",
    linkIcon: "/settings.svg",
    linkUrl: "/admin/setings",
  },
];

export default function Sidenav() {
  const pathname = usePathname();
  return (
    <nav className="relative bg-white w-full h-full">
      <h1
        className={`${risque.className} md:text-3xl md:text-center md:pt-[22px]`}
      >
        DineReview - Admin
      </h1>
      <div className=" mt-10 flex flex-col gap-5 items-center">
        {navLinks.map((link) => (
          <Link
            href={link.linkUrl}
            key={link.linkName}
            className={clsx(
              "w-[256px] h-[51px] flex gap-3 items-center rounded-md px-3",
              {
                "bg-[#efefef]": pathname === link.linkUrl,
              }
            )}
          >
            <Image
              src={link.linkIcon}
              width={25}
              height={25}
              alt={link.linkName}
              className="mt-2"
            />
            <p className="font-semibold">{link.linkName}</p>
          </Link>
        ))}
      </div>
      <div onClick={() => signOut()} className="absolute cursor-pointer bottom-10 left-7 w-[256px] h-[51px] flex gap-3 items-center rounded-md px-3">
        <Image
          src="/logout.svg"
          width={25}
          height={25}
          alt="logout icon"
          className="mt-2"
        />
        <p className="font-semibold">Logout</p>
      </div>
    </nav>
  );
}
