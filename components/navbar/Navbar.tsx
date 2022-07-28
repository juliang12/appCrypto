import React from "react";

const Navbar: any = () => {
  return (
    <nav className="w-full h-14 flex items-center justify-between bg-orange-500 max-w-7xl m-auto">
      <div className="logo">
        <h1 className="font-semibold">CyptoApp</h1>
      </div>
      <ul className="flex items-center text-white ">
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
      <button className="bg-indigo-600 hover:bg-zinc-600 text-zinc-200 font-semibold hover:text-white py-2 px-10 border border-zinc-800 hover:border-transparent rounded">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
