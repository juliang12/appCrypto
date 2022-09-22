import React from "react";

export default function Footer() {
  return (
    <footer className="w-full  h-20 bg-black text-white m-auto text-center flex items-center justify-center text-sm text-primary-2 font-bold mt-auto">
      © {new Date().getFullYear()} JG
    </footer>
  );
}
