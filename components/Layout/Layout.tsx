import Navbar from "@components/navbar/Navbar";
import React, { FC, ReactNode } from "react";

interface props {
  children: ReactNode | ReactNode[];
}

const Layout: FC<props> = ({ children }) => {
  return (
    <>
      <div className="w-full bg-slate-300 text-black uppercase">
        <Navbar />
      </div>

      <div>{children}</div>
    </>
  );
};

export default Layout;
