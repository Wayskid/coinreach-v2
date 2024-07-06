import React, { ReactNode } from "react";
import Nav from "../nav";
import Footer from "../footer";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Nav />
      <div className="mt-[70px] h-[calc(100%-328px)] md:h-[calc(100%-220px)] grid">
        {children}
      </div>
      <Footer />
    </div>
  );
}
