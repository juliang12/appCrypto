import Footer from "@components/footer/Footer";
import Navbar from "@components/navbar/Navbar";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";

interface props {
  children: ReactNode | ReactNode[];
}

const Layout: FC<props> = ({ children }) => {
  return (
    <div>
      <div className="w-full bg-zinc-900 text-white uppercase">
        <Navbar />
      </div>

      <div className="min-h-screen bg-zinc-900 pt-10">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
