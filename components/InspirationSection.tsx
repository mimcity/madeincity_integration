import React from "react";

const InspirationSection = () => {
  return (
    <div className="bg-blue-300 h-[584px] w-full flex">
      <div className="flex items-center pl-28 flex-1">
        <div className="pt-10 pb-7 pl-[30px] pr-[22px] max-w-[369px] bg-white rounded-md">
          <span className="uppercase text-sm text-neutral-700">
            Inspiration
          </span>
          <h1 className="text-3xl font-semibold leading-[30px] tracking-[-2%] text-neutral-700 mt-2">
            Top 5 des nouvelles adresses à découvrir à Marrakech
          </h1>
          <p className="text-neutral-700 text-sm mt-4">
            La cité ocre fait le plein de nouveautés ! De nouvelles adresses ont
            vu le jour aux quatre coins de la ville : adresses gourmandes,
            chill, logements... Découvrez notre sélection des établissements à
            découvrir sans attendre à Marrakech.
          </p>
          <div className="mt-10">
            <button className="bg-gradient-to-tr from-[#D30074] to-[#F90016] text-sm text-white py-1.5 px-4 rounded-md">
              Lire la suite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;
