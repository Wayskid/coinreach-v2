"use client";

import { AuthContext } from "@/context/authContext";
import { auth } from "@/firebase/firebase";
import { RemoveCookie } from "@/hooks/cookies";
import { signOut } from "firebase/auth";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { userInfo, setUserInfo, setToken } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const [showAside, setShowAside] = useState(false);
  function matchRoute(route: string) {
    if (route === pathname) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    userInfo.first_name &&
    loaded && (
      <div className="bg-[#1e2b31] grid md:grid-cols-[auto,1fr] h-full md:p-5 gap-5">
        <div
          className={`bg-white rounded-sm p-5 flex-col absolute z-10 w-full h-full md:h-[unset] md:[position:unset] transition-opacity ${
            showAside
              ? "opacity-100 flex translate-y-0"
              : "opacity-0 md:opacity-100  translate-y-full md:translate-y-0 hidden md:flex"
          }`}
        >
          <div className="border-b pb-5 pt-0 md:pb-8 md:pt-3 flex justify-between items-center">
            <CgClose
              className="text-3xl md:hidden cursor-pointer"
              onClick={() => setShowAside(false)}
            />
            <Link href="/" className="md:mx-auto">
              <Image
                src="https://res.cloudinary.com/diiohnshc/image/upload/v1719262909/CoinReach/coinreachlogo-removebg_gxox4d.png"
                width="40"
                height="40"
                alt="CoinReach Logo"
                className="rounded-sm"
              />
            </Link>
          </div>
          <div className="py-8 *:p-3 *:!pr-20 *:text-lg grid *:transition">
            <Link
              href="/dashboard"
              className={`${
                matchRoute("/dashboard") && "font-medium bg-[#1e2b3135]"
              } rounded-sm`}
            >
              Overview
            </Link>
            <Link
              href="/dashboard/add_task"
              className={`${
                matchRoute("/dashboard/add_task") &&
                "font-medium bg-[#1e2b3135]"
              } rounded-sm`}
            >
              Add Task
            </Link>
            <Link
              href="/dashboard/tasks"
              className={`${
                matchRoute("/dashboard/tasks") && "font-medium bg-[#1e2b3135]"
              } rounded-sm`}
            >
              Tasks List
            </Link>
          </div>
          <div className="grid gap-1 mt-auto border-t pt-5 pb-0 md:py-8">
            {userInfo.avatar ? (
              <Image
                src="https://res.cloudinary.com/diiohnshc/image/upload/v1719262909/CoinReach/coinreachlogo-removebg_gxox4d.png"
                width="30"
                height="30"
                alt="CoinReach Logo"
                className="rounded-sm mx-auto"
              />
            ) : (
              <p className="text-white w-[35px] h-[35px] font-semibold rounded-sm grid place-content-center mx-auto bg-slate-800">
                {userInfo.first_name.slice(0, 1)}
              </p>
            )}
            <p className="text-center font-semibold">
              {userInfo.first_name} {userInfo.last_name}
            </p>
            <p className="text-center text-sm">{userInfo.work_email}</p>
          </div>
        </div>
        <div className="grid md:gap-5 h-screen md:h-[calc(100vh-40px)] md:overflow-auto grid-rows-[auto,1fr]">
          <div className="bg-white p-5 md:rounded-sm flex justify-between items-center border-b md:border-none self-start">
            <p className="hidden md:block">
              {moment(Date.now()).format("MMMM Do, YYYY")}
            </p>
            <BiMenu
              className="text-4xl cursor-pointer md:hidden"
              onClick={() => setShowAside(true)}
            />
            <div className="flex gap-2 items-center cursor-pointer">
              <button
                onClick={() =>
                  signOut(auth).then(() => {
                    RemoveCookie("User");
                    RemoveCookie("Token");
                    setUserInfo((prev) => prev);
                    setToken("");
                    // router.push("/");
                  })
                }
                className="text-center font-medium"
              >
                Log out
              </button>
              {userInfo.avatar ? (
                <Image
                  src="https://res.cloudinary.com/diiohnshc/image/upload/v1719262909/CoinReach/coinreachlogo-removebg_gxox4d.png"
                  width="30"
                  height="30"
                  alt="CoinReach Logo"
                  className="rounded-sm mx-auto"
                />
              ) : (
                <p className="text-white w-[35px] h-[35px] font-semibold rounded-sm grid place-content-center mx-auto bg-slate-800">
                  {userInfo.first_name.slice(0, 1)}
                </p>
              )}
            </div>
          </div>
          <div className="bg-white md:rounded-sm p-5 h-[calc(100vh-76.95px] md:h-[calc(100vh-94.6833px] overflow-auto">
            {children}
          </div>
        </div>
      </div>
    )
  );
}
