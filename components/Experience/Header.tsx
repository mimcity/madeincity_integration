import { ArrowUpTrayIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-0.5 mt-2">
        <div className="flex items-center">
          <StarIcon className="w-5 h-5 text-rose-500" />
          <span className="text-sm text-neutral-700">4,7</span>
        </div>
        <span className="text-neutral-700 text-opacity-75 md:block hidden">
          &#183;
        </span>
        <p className="text-black/75 underline">Selman Marrakech</p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between md:mt-2 mt-6">
        <h1 className="text-neutral-900 md:text-5xl text-4xl font-bold md:leading-[48px] -tracking-wide">
          Brunch dominical d'exception
        </h1>
        <div className="md:hidden flex gap-1 mt-2 items-center">
          <div className="w-[45px] h-5 flex items-center justify-center bg-neutral-700 rounded-sm ">
            <span className="text-sm font-semibold text-white">Club</span>
          </div>
          <p className="md:text-sm text-xs text-neutral-700 truncate">
            Cocktail de bienvenue offert
          </p>
        </div>
        <div className="md:flex hidden space-x-2 items-center">
          <ArrowUpTrayIcon className="w-5 h-5 text-black" />
          <Link className="text-black font-semibold" href="/">
            Partager
          </Link>
        </div>
      </div>
      <div className="h-[360px] bg-red-200 my-8"></div>
    </div>
  );
};

export default Header;
