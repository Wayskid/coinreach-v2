"use client";
import { assessmentStore } from "@/zustand/store/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const { protocol } = assessmentStore((state) => state);
  const [layoutWidth, setLayoutWidth] = useState(17);

  useEffect(() => {
    setLayoutWidth(
      protocol.your_info && protocol.assessment && protocol.success
        ? 100
        : protocol.your_info && protocol.assessment && !protocol.success
        ? 50
        : 17
    );
  }, [protocol]);

  return (
    <section className="pt-5 h-full">
      <div className="w-[min(92rem,100%)] mx-auto px-4 md:px-12 lg:px-32 grid">
        <div className="grid relative self-start">
          <div className="grid grid-cols-3 text-center *:pb-5 *:after:w-[0.65rem] *:after:h-[0.65rem] *:after:rounded-full *:grid *:relative  z-[2]">
            <Link
              className={`${
                protocol.your_info
                  ? "after:bg-[#F9CC0B] font-medium"
                  : "after:bg-[#f3f3f3] opacity-60"
              } after:absolute after:-bottom-[5.5px] after:justify-self-center`}
              href="/join"
            >
              Your info
            </Link>
            <Link
              className={`${
                protocol.assessment
                  ? "after:bg-[#F9CC0B] font-medium"
                  : "after:bg-[#f3f3f3] opacity-60"
              } after:absolute after:-bottom-[5.5px] after:justify-self-center`}
              href="/join/short_assessment"
            >
              Assessment
            </Link>
            <Link
              className={`${
                protocol.success
                  ? "after:bg-[#F9CC0B] font-medium"
                  : "after:bg-[#f3f3f3] opacity-60"
              } after:absolute after:-bottom-[5.5px] after:justify-self-center`}
              href="/join/form_success"
            >
              Success
            </Link>
          </div>
          <div
            style={{ width: layoutWidth + "%" }}
            className="absolute -bottom-[1.4px] border-b-2 left-0 right-0 border-b-[#F9CC0B] z-[2]"
          ></div>
          <div className="absolute -bottom-[1.4px] border-b-2 left-0 right-0 border-b-[#f3f3f3bc] z-[1] w-full"></div>
        </div>
        <div className="py-10 grid">{children}</div>
      </div>
    </section>
  );
}
