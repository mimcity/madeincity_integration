import { BoltIcon, MoonIcon } from "@heroicons/react/24/outline";
import React from "react";

const Content = () => {
  return (
    <div className="flex justify-between gap-x-20 lg:py-12 md:py-8 py-6">
      <div>
        <div className="pb-8 border-b border-neutral-200">
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur. Sed eu sit eu neque. Morbi
            nibh metus eu nam justo vestibulum dui lectus id. Bibendum blandit
            lectus quis porta gravida condimentum amet congue. Sed pulvinar
            consectetur pellentesque ac imperdiet nisl a nulla. Vitae lectus
            quam sit aliquam tristique quam magna. <br /> <br /> Non tincidunt
            tellus non gravida pulvinar. Viverra gravida tellus curabitur eu
            molestie mattis. At nulla amet justo lectus pharetra.
          </p>
        </div>
        <div className="py-8 border-b border-neutral-200">
          <h1 className="text-black text-xl font-semibold -tracking-wide">
            Tarifs
          </h1>
          <p className="mt-1 text-black">
            1580 Dhs par personne, incluant une coupe de champagne.
          </p>
        </div>
        <div className="py-8 border-b border-neutral-200">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <MoonIcon className="w-10 h-10 text-black flex-shrink-0" />
              <div>
                <h1 className="text-xl font-semibold -tracking-wide text-black">
                  Expérience unique
                </h1>
                <p className="text-neutral-700/75">
                  A faire une fois dans sa vie
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MoonIcon className="w-10 h-10 text-black flex-shrink-0" />
              <div>
                <h1 className="text-xl font-semibold -tracking-wide text-black">
                  Exclusivité Made in City
                </h1>
                <p className="text-black/75">
                  Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in
                  neque congue platea vel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-black text-xl font-semibold -tracking-wide">
            Horaires
          </h1>
          <p className="mt-1 text-black">Tous les jours de 10h00 à 19h00</p>
        </div>
      </div>
      <div className="max-w-[365px] min-w-[300px] xl:flex-shrink-0 border border-neutral-100 px-[11px] py-[26px] self-start lg:block hidden">
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <p className="text-black">
                A partir de{" "}
                <span className="text-xl font-semibold -tracking-wide">
                  2800 MAD
                </span>
              </p>
            </div>
            <div className="flex gap-1 mt-2 items-center">
              <div className="w-[45px] h-5 flex items-center justify-center bg-neutral-700 rounded-sm ">
                <span className="text-sm font-semibold text-white">Club</span>
              </div>
              <p className="md:text-sm text-xs text-neutral-700 truncate">
                Cocktail de bienvenue offert
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8F8] py-3.5 px-4 rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-[#303133] font-semibold">Adultes</p>
              <p className="text-sm text-[#303133]">23 / 03 / 23</p>
            </div>
          </div>
          <div className="bg-[#F8F8F8] py-3.5 px-4 rounded-md">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="text-[#303133] font-semibold">Date</p>
                <div className="flex items-center gap-[30px]">
                  <button className="w-6 h-6 bg-[#3031330F] text-[#303133] inline-flex items-center justify-center rounded-md">
                    -
                  </button>
                  <p className="text-sm font-semibold text-[#303133]">1</p>
                  <button className="w-6 h-6 bg-[#3031330F] text-[#303133] inline-flex items-center justify-center rounded-md">
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#303133] font-semibold -mb-1">
                    Jusqu’à 12 ans
                  </p>
                  <span className="text-xs text-[#303133]">Enfants</span>
                </div>
                <div className="flex items-center gap-[30px]">
                  <button className="w-6 h-6 bg-[#3031330F] text-[#303133] inline-flex items-center justify-center rounded-md">
                    -
                  </button>
                  <p className="text-sm font-semibold text-[#303133]">0</p>
                  <button className="w-6 h-6 bg-[#3031330F] text-[#303133] inline-flex items-center justify-center rounded-md">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[17px]">
            <div className="p-2 border border-neutral-100">
              <span>
                <BoltIcon className="w-3 h-6 text-black" />
              </span>
              <p className="mt-2 text-sm text-[#303133] leading-[16px]">
                Réservation en ligne
              </p>
            </div>
            <div className="p-2 border border-neutral-100">
              <span>
                <BoltIcon className="w-3 h-6 text-black" />
              </span>
              <p className="mt-2 text-sm text-[#303133] leading-[16px]">
                Réservation en ligne
              </p>
            </div>
            <div className="p-2 border border-neutral-100">
              <span>
                <BoltIcon className="w-3 h-6 text-black" />
              </span>
              <p className="mt-2 text-sm text-[#303133] leading-[16px]">
                Réservation en ligne
              </p>
            </div>
          </div>
          <div>
            <button className="w-full py-3 bg-gradient-to-tr from-[#D30074] to-[#F90016] text-white font-semibold rounded-md">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
