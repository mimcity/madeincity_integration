import { ArrowUpTrayIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center space-x-0.5 mt-2">
        <div className="flex items-center">
          <StarIcon className="w-5 h-5 text-rose-500" />
          <span className="text-sm text-neutral-700">4,7</span>
        </div>
        <span className="text-neutral-700 text-opacity-75 md:block hidden">
          &#183;
        </span>
        <p className="text-black underline">Selman Marrakech</p>
      </div>
      <div className="flex items-center justify-between">
        <h1>Brunch dominical d'exception</h1>
        <div className="flex space-x-2 items-center">
          <ArrowUpTrayIcon className="w-5 h-5" />
          <Link className="text-black font-semibold" href="/">
            Partager
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
