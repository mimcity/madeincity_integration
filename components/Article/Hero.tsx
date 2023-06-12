import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Article from "../../assets/article.png";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Banner from "./Banner";

const Hero = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight);
    }
  }, []);

  if (bannerHeight === 0) return null;
  return (
    <div className="">
      <main className="w-full mx-auto relative">
        <div
          className={`lg:h-screen relative h-[calc(100vh-${bannerHeight}px)]`}
        >
          <Image src={Article} alt="Article" fill className="object-cover" />
          <div className="flex flex-col z-[100] relative justify-end h-full">
            <div className="max-w-3xl mx-auto w-full py-4 md:px-0 px-4">
              <p className="text-sm text-white text-center w-full uppercase md:block hidden">
                Culture
              </p>
              <h1 className="mt-4 lg:text-6xl md:text-4xl text-3xl font-bold lg:leading-[60px] -tracking-wide">
                Marrakech désignée capitale de la culture en 2024
              </h1>
              <div className="lg:mt-6 md:mt-5 mt-4">
                <p className="text-white font-normal">26 Novembre 2023</p>
                <span className="text-white/[64%] text-xs">
                  Par Anaïs Robin
                </span>
              </div>
              <div className="mt-4 md:flex items-center justify-center hidden">
                <ChevronDownIcon className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-black to-transparent h-1/2 w-full absolute z-50 bottom-0" />
      </main>
      <Banner ref={bannerRef} />
    </div>
  );
};

export default Hero;
