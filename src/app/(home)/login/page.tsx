"use client";

import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { SetCookie } from "@/hooks/cookies";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "@/context/authContext";

export default function Page() {
  const router = useRouter();
  const [loginVal, setLoginVal] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, loginVal.email, loginVal.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          const data = { ...doc.data() };
          const { avatar, email, first_name, last_name, work_email } = data;
          SetCookie(
            "User",
            JSON.stringify({
              avatar,
              email,
              first_name,
              last_name,
              work_email,
            }),
            true
          );
          SetCookie("Token", JSON.stringify(user.uid), true);
          router.push("/dashboard");
        });
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }
  return (
    <section className="h-full grid">
      <div className="w-[min(92rem,100%)] mx-auto md:px-12 lg:px-32 md:py-10 grid md:content-center">
        <div className="bg-[#1e2b31] text-white py-10 px-4 md:p-20 grid md:rounded-sm items-center w-[min(48rem,100%)] mx-auto">
          <form onSubmit={handleLogin} className="grid">
            <p className="text-center text-2xl">Welcome Back</p>
            <p className="text-sm text-center mb-14 mt-1">
              Please login to your account
            </p>
            <div className="space-y-5 mb-14">
              <div className="space-y-1">
                <label className="text-lg" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
                  onChange={(e) =>
                    setLoginVal({ ...loginVal, email: e.target.value })
                  }
                  value={loginVal.email}
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-lg" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-[#e0e3e197] rounded-sm bg-transparent p-3 outline-none focus:border-white"
                  onChange={(e) =>
                    setLoginVal({ ...loginVal, password: e.target.value })
                  }
                  value={loginVal.password}
                  required
                />
              </div>
            </div>
            <button
              className="text-center bg-white text-gray-700 p-3 font-medium hover:bg-transparent border border-transparent hover:border-[#e0e3e197] hover:text-white disabled:60"
              disabled={
                Object.values(loginVal).some((val) => val.length < 1) ||
                isLoading
              }
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
