import { useWeb3React } from "@web3-react/core";
import { connector } from "config/web3";
import Image from "next/image";
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import Bars from "../../assets/icons/bars-solid.svg";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Navbar: FC<Props> = () => {
  const { activate, active, deactivate, account } = useWeb3React();
  const [hidde, setHidde] = useState(false);

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") {
      return connect();
    }
  }, [connect]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  const closeMovileMenu = () => {
    setHidde(false);
  };

  return (
    <nav className="navbar-container">
      <div className="logo">
        <h1 className="text-2xl font-bold text-pink-600">CyptoApp</h1>
      </div>
      <div className="icon" onClick={() => setHidde(!hidde)}>
        <Image className="icon-styles" src={Bars} width={35} height={35} />
      </div>
      <ul className={hidde ? "nav-ul active" : "nav-ul"}>
        <li className="p-5">
          <a
            className="font-medium transition hover:text-slate-500"
            onClick={() => closeMovileMenu}
            href="/"
          >
            Home
          </a>
        </li>
        <li className="p-5">
          <a
            className="font-medium transition hover:text-slate-500"
            onClick={() => closeMovileMenu}
            href="/new-coins"
          >
            New Coins
          </a>
        </li>
      </ul>
      {active ? (
        <>
          <button
            onClick={disconnect}
            className="bg-pink-600 hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-2 px-10 border border-zinc-800 hover:border-transparent rounded"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connect}
          className="bg-pink-600 hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-2 px-10 border border-zinc-800 hover:border-transparent rounded"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Navbar;
