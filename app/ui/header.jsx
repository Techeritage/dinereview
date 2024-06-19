"use client";
import { risque } from "@/app/ui/fonts";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="px-[10%] py-2 flex items-center justify-between">
      <h1 className={`${risque.className} text-xl tracking-wider`}>DineReview</h1>
      <Image
        src={session?.user?.profilePicture}
        width={50}
        height={50}
        alt="profile pics"
        className="rounded-full h-[50px] object-cover object-top"
      />
    </nav>
  );
}
