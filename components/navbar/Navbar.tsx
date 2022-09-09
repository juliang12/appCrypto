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
    <nav className="w-full h-14 flex items-center justify-between bg-slate-300 text-black max-w-7xl m-auto">
      <div className="logo">
        <h1 className="font-bold uppercase text-lg text-indigo-700">
          CyptoApp
        </h1>
      </div>
      <ul className="flex items-center text-black font-semibold ">
        <li className="p-5">
          <a className="hover:text-orange-300" href="">
            Home
          </a>
        </li>
        <li className="p-5">
          <a className="hover:text-orange-300" href="">
            Contact
          </a>
        </li>
        <li className="p-5">
          <a className="hover:text-orange-300" href="">
            Market
          </a>
        </li>
      </ul>

      {active ? (
        <>
          <button
            onClick={disconnect}
            className="bg-indigo-600 hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-2 px-10 border border-zinc-800 hover:border-transparent rounded"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={connect}
          className="bg-indigo-600 hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-2 px-10 border border-zinc-800 hover:border-transparent rounded"
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navbar;
