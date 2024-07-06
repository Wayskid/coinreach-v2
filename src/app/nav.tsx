"use client";
import Link from "next/link";
import Image from "next/image";
import { PiX } from "react-icons/pi";
import { GrMenu } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/authContext";
import { RemoveCookie } from "@/hooks/cookies";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { token, setUserInfo, setToken } = useContext(AuthContext);
  const pathname = usePathname();
  function matchRoute(route: string) {
    if (route === pathname) {
      return true;
    } else {
      return false;
    }
  }
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="fixed z-40 top-0 bg-white w-full shadow-sm">
        <div className="flex items-center w-[min(92rem,100%)] mx-auto relative z-40 bg-white px-4 md:px-12 lg:px-32 py-3">
          <Link href="/" className="mr-auto">
            <Image
              src="https://res.cloudinary.com/diiohnshc/image/upload/v1719262909/CoinReach/coinreachlogo-removebg_gxox4d.png"
              width="40"
              height="40"
              alt="Picture of the author"
              className=""
            />
          </Link>
          <div className="md:flex lg:gap-8 md:gap-5 hidden">
            <Link
              href="/login"
              className={`px-3 py-2 ${
                matchRoute(token ? "/dashboard" : "/login") && "font-bold"
              }`}
            >
              {token ? "Account" : "Login"}
            </Link>
            <Link
              href="contact"
              className={`px-3 py-2 ${matchRoute("contact") && "font-bold"}`}
            >
              Contact
            </Link>
            <Link
              href="about"
              className={`px-3 py-2 ${matchRoute("/about") && "font-bold"}`}
            >
              About us
            </Link>
          </div>
          <Link
            href="join"
            className={`ml-5 lg:ml-8 hidden md:grid px-4 py-2 text-[15px] font-semibold bg-[#1e2b31] text-white`}
          >
            Join Us
          </Link>
          <button
            className="md:hidden text-4xl transition duration-1000"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <PiX className="transition duration-1000" />
            ) : (
              <GrMenu className="transition duration-1000" />
            )}
          </button>
        </div>
        <div
          className={`fixed bg-white top-0 w-full h-full md:hidden transition-opacity z-30 border-t-2 py-10 pt-[90px] ${
            showMobileMenu
              ? "translate-y-[0] opacity-100"
              : "opacity-0 -translate-y-full"
          }
        `}
        >
          <div className="grid h-full md:px-12 content-start gap-5">
            <div className="grid space-y-6 text-4xl">
              <Link
                href="join"
                className={`px-3 py-2 ${matchRoute("/join") && "font-bold"}`}
              >
                Join Us
              </Link>
              <Link
                href="contact"
                className={`px-3 py-2 ${matchRoute("/contact") && "font-bold"}`}
              >
                Contact
              </Link>
              <Link
                href="about"
                className={`px-3 py-2 ${matchRoute("/about") && "font-bold"}`}
              >
                About Us
              </Link>
            </div>
            <div className="grid space-y-1 text-Blue font-bold text-3xl">
              <Link
                href={token ? "/dashboard" : "/login"}
                className={`px-3 py-2 self-end ${
                  matchRoute(token ? "/dashboard" : "/login") && "font-bold"
                }`}
              >
                {token ? "Account" : "Login"}
              </Link>
              {token && (
                <button
                  className="px-3 py-2 mr-auto"
                  onClick={() => {
                    RemoveCookie("User");
                    RemoveCookie("Token");
                    setUserInfo((prev) => prev);
                    setToken("");
                    setShowMobileMenu(false);
                  }}
                >
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
