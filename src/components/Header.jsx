"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="sticky top-0 z-30 border-b bg-slate-50 p-3 shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/*Desktop logo */}
        <Link href={"/"} className="hidden lg:inline-flex">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="insta"
          ></Image>
        </Link>
        {/* Mobile logo */}
        <Link href={"/"} className="lg:hidden">
          <Image
            src="/800px-Instagram_logo_2016.webp"
            width={40}
            height={40}
            alt="insta"
          ></Image>
        </Link>

        {/* search  */}
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-[12rem] rounded border border-gray-200 bg-gray-50 px-4 py-2 text-sm"
        />
        {/* menu */}
        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-10 w-10 cursor-pointer rounded-full"
            onClick={signOut}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}
