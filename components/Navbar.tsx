import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../assets/Menu.svg";
import Logo from "../assets/Logo+select.png";
import SearchIcon from "../assets/SearchIcon.svg";
import UserIcon from "../assets/UserIcon.svg";

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
  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo} width={203} height={30} alt="Logo" />
          </div>
          <div>
            <div className="md:flex hidden items-center lg:gap-[30px] md:gap-6">
              {NavigationItems.map((item, index) => {
                return (
                  <Link href={item.link} key={index} className="font-semibold">
                    {item.name}
                  </Link>
                );
              })}
              <button>
                <Image
                  src={SearchIcon}
                  width={18}
                  height={18}
                  alt="Search Icon"
                />
              </button>
              <button>
                <Image src={UserIcon} width={18} height={18} alt="User Icon" />
              </button>
            </div>
            <div className="md:hidden block">
              <Image src={Menu} width={24} height={24} alt="Mobile Menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
