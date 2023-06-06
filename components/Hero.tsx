import Image from "next/image";
import React from "react";
import HeroImage from "../assets/HeroImage.png";
import SearchIcon from "../assets/SearchIcon.svg";
import Layout from "./UI/Layout";

const Hero = () => {
  return (
    <Layout fullWidth={true}>
      <div className="sm:h-screen relative flex sm:mt-0 mt-[104.5px]">
        <Image
          src={HeroImage}
          fill
          alt="Hero Image"
          className="sm:block hidden"
        />
        <div className="z-50 relative flex-1 flex flex-col justify-center">
          <div className="lg:px-15 sm:px-6 px-4">
            <h1 className="text-6xl font-semibold max-w-[623px] sm:block hidden">
              Découvrez des expériences uniques
            </h1>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
                  <Image
                    src={SearchIcon}
                    width={18}
                    height={18}
                    alt="Search Icon"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block lg:max-w-[520px] max-w-sm w-full rounded-md border-0 py-[14.5px] pl-10 pr-4 bg-red-500 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Recherchez un hébergement, un restaurant, un spa, une activité"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
