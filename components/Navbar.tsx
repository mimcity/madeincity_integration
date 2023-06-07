import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import LogoBlack from "../assets/LogoBlack.png";
import classNames from "classnames";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Layout from "./UI/Layout";

const NavigationItems = [
  {
    name: "Expériences",
    link: "/",
  },
  {
    name: "Collections",
    link: "/",
  },
  {
    name: "Inspiration",
    link: "/",
  },
  {
    name: "Membres",
    link: "/",
  },
];

const Navbar = () => {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [burgerColor, setBurgerColor] = useState("text-white");
  const [logo, setLogo] = useState(Logo);
  const navbarRef = useRef<HTMLDivElement>(null);

  const listenScrollEvent = () => {
    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
    window.scrollY > navbarHeight
      ? setBgColor("bg-white")
      : setBgColor("bg-transparent");
    window.scrollY > navbarHeight
      ? setTextColor("text-black")
      : setTextColor("text-white");
    window.scrollY > navbarHeight ? setLogo(LogoBlack) : setLogo(Logo);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <nav
      className={classNames(
        "md:py-6 pt-6 pb-2.5 fixed top-0 w-full z-[100] transition-all transform duration-300 ease-in-out",
        bgColor
      )}
      ref={navbarRef}
    >
      <Layout>
        <div className="flex items-center justify-between">
          <div className="sm:block hidden">
            <Image src={logo} width={203} height={30} alt="Logo" />
          </div>
          <div className="sm:hidden block">
            <Image src={LogoBlack} width={203} height={30} alt="Logo" />
          </div>
          <div>
            <div className="md:flex hidden items-center lg:gap-[30px] md:gap-6">
              {NavigationItems.map((item, index) => {
                return (
                  <Link
                    href={item.link}
                    key={index}
                    className={classNames("font-semibold", textColor)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button>
                <MagnifyingGlassIcon
                  className={classNames("w-5 h-5", textColor)}
                />
              </button>
              <button>
                <UserCircleIcon className={classNames("w-5 h-5", textColor)} />
              </button>
            </div>
            <div className="md:hidden block">
              <Bars3BottomLeftIcon
                className={classNames("w-5 h-5 text-black")}
              />
            </div>
          </div>
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
