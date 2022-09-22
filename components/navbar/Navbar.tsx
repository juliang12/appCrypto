import { useWeb3React } from "@web3-react/core";
import { connector } from "config/web3";
import React, { FC, ReactNode, useCallback, useEffect } from "react";

interface Props {
  children?: ReactNode | ReactNode[];
}

const Navbar: FC<Props> = () => {
  const { activate, active, deactivate, account } = useWeb3React();

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

  return (
    <nav className="w-full h-20 flex items-center justify-between bg-zinc-900 text-accents-6 leading-6 text-white max-w-7xl m-auto">
      <div className="logo">
        <h1 className="text-2xl font-bold text-pink-600">CyptoApp</h1>
      </div>
      <ul className="flex items-center text-white font-semibold  ">
        <li className="p-5">
          <a className="font-medium transition hover:text-slate-500" href="/">
            Home
          </a>
        </li>
        <li className="p-5">
          <a
            className="font-medium transition hover:text-slate-500"
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
