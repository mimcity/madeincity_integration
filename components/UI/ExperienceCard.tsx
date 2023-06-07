import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Placeholder from "../../assets/placeholderExperience.jpg";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <div>
      <div className="relative h-[240px] md:h-[389px]">
        <Image fill src={Placeholder} alt="Experience" />
      </div>
      <div className="space-y-0.5">
        <div className="flex items-center space-x-0.5">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-rose-500" />
            <span className="text-sm text-neutral-700">4,67</span>
          </div>
          <span className="text-neutral-700 text-opacity-75">&#183;</span>
          <p className="text-neutral-700 text-opacity-75">
            Mandarin Oriental Marrakech
          </p>
        </div>

        <h2 className="text-xl font-semibold text-neutral-700 -tracking-wide">
          PicNic Daypass
        </h2>

        <span className="text-sm text-neutral-700 text-opacity-75">
          À partir de 280 MAD
        </span>

        <div className="flex items-center space-x-1">
          <div className="px-2 bg-neutral-700 rounded-sm">
            <span className="text-sm font-semibold">Club</span>
          </div>
          <p className="text-sm text-neutral-700">
            Cocktail de bienvenue offert
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
