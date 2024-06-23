"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <nav className="px-[5%] lg:px-[10%] bk-image-content py-5 flex items-center justify-between">
      {/*<h1 className={`${risque.className} text-xl tracking-wider`}>DineReview</h1>*/}

      <Image
        src="/logo.svg"
        width={180}
        height={100}
        alt="logo"
        className="w-[150px] md:w-[180px]"
      />
      {status === "authenticated" ? (
        <Image
          src={session?.user?.profilePicture}
          width={50}
          height={50}
          alt="profile pics"
          className="rounded-full border-white border-4 h-[50px] object-cover"
        />
      ) : (
        <button className="whitespace-nowrap px-7 md:px-10 py-3 rounded-xl border-2 border-white text-white text-sm lg:text-base text-center font-semibold">
          <Link href="/">Login</Link>
        </button>
      )}
    </nav>
  );
}
