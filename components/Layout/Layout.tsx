import Navbar from "@components/navbar/Navbar";
import React, { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <div className="w-full bg-orange-500 uppercase">
        <Navbar />
      </div>

      <div>{children}</div>
    </>
  );
};

export default Layout;
