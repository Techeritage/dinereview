"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="px-[5%] lg:px-[10%] bk-image-content py-3 flex items-center justify-between">
      {/*<h1 className={`${risque.className} text-xl tracking-wider`}>DineReview</h1>*/}

      <Image
        src="/logo.svg"
        width={180}
        height={100}
        alt="logo"
        className="w-[150px] md:w-[180px]"
      />
      {session && (
        <Image
          src={session?.user?.profilePicture}
          width={50}
          height={50}
          alt="profile pics"
          className="rounded-full border-white border-4 h-[50px] object-cover"
        />
      )}
    </nav>
  );
}
