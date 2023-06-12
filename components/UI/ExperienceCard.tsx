import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Placeholder from "../../assets/placeholderExperience.jpg";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <div>
      <div className="relative">
        <Image src={Placeholder} alt="Experience" />
      </div>
      <div className="space-y-0.5">
        <div className="flex md:flex-row flex-col md:items-center space-x-0.5 md:mt-0 mt-2">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-rose-500" />
            <span className="text-sm text-neutral-700">4,67</span>
          </div>
          <span className="text-neutral-700 text-opacity-75 md:block hidden">
            &#183;
          </span>
          <p className="text-neutral-700 text-opacity-75 md:text-base text-xs">
            Mandarin Oriental Marrakech
          </p>
        </div>

        <h2 className="lg:text-xl md:text-lg text-base font-semibold text-neutral-700 -tracking-wide">
          PicNic Daypass
        </h2>

        <span className="md:text-sm text-xs text-neutral-700 text-opacity-75">
          À partir de 280 MAD
        </span>

        <div className="flex md:items-center gap-1 md:flex-row flex-col-reverse">
          <div className="px-2 bg-neutral-700 rounded-sm max-w-max">
            <span className="text-sm font-semibold">Club</span>
          </div>
          <p className="md:text-sm text-xs text-neutral-700">
            Cocktail de bienvenue offert
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
