import Image from "next/image";
import React from "react";
import HeroImage from "../assets/HeroImage.png";
import Layout from "./UI/Layout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <Layout fullWidth={true}>
      <div className="sm:h-screen relative flex sm:mt-0 mt-[87px]">
        <Image
          src={HeroImage}
          fill
          alt="Hero Image"
          className="sm:block hidden object-cover"
        />
        <div className="z-50 relative flex-1 flex flex-col justify-center">
          <div className="lg:px-15 sm:px-6 px-4 flex flex-col justify-between flex-1 sm:pb-9">
            <div></div>
            <div>
              <h1 className="text-6xl leading-[60px] -tracking-wide font-semibold max-w-[623px] sm:block hidden">
                Découvrez des expériences uniques
              </h1>
              <div className="sm:mt-6 mt-0">
                <div className="relative rounded-md shadow-sm max-w-[520px] mx-auto sm:mx-0 w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-neutral-700"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-[14.5px] pl-10 pr-4 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Recherchez un hébergement, un restaurant, un spa, une activité"
                  />
                </div>
              </div>
            </div>
            <div className="sm:block hidden">
              <h2 className="text-lg font-medium text-white">Palais Ronsard</h2>
              <p className="text-xs">Boutique Hôtel - Palmeraie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 h-full absolute inset-0 z-40 bg-gradient-to-r from-black/40 to-transparent md:block hidden" />
      <div className="bg-black opacity-20 w-full h-full absolute inset-0 z-40 md:block hidden" />
    </Layout>
  );
};

export default Hero;
