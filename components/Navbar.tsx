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
import { useRouter } from "next/router";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [scrolledOnce, setScrolledOnce] = useState(false);

  const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
  const listenScrollEvent = () => {
    if (window.scrollY > navbarHeight) {
      setScrolledOnce(true);
      setBgColor("bg-white");
      setTextColor("text-black");
      setLogo(LogoBlack);
    } else {
      setBgColor("bg-transparent");
      setTextColor("text-white");
      setLogo(Logo);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 645);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={classNames(
        "md:py-6 pt-6 pb-2.5 fixed top-0 w-full z-[200] transition-all transform duration-300 ease-in-out",
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
            <Image
              src={
                router.pathname.startsWith("/article") &&
                isSmallScreen &&
                !scrolledOnce
                  ? Logo
                  : logo
              }
              width={180}
              height={25}
              alt="Logo"
            />
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
                className={classNames(
                  "w-5 h-5",
                  router.pathname.startsWith("/article") &&
                    isSmallScreen &&
                    window.scrollY < navbarHeight
                    ? "text-white"
                    : "text-black"
                )}
              />
            </div>
          </div>
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
