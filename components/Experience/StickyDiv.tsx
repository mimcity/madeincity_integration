import React from "react";

const StickyDiv = () => {
  return (
    <div className="py-[7px] pl-[17px] pr-4 w-full md:hidden block fixed bg-white bottom-0 z-[300]">
      <section className="flex items-center justify-between">
        <div>
          <p className="text-black/75 text-sm">A partir de</p>
          <p className="text-black">2800 MAD</p>
        </div>
        <button className="bg-gradient-to-tr from-[#D30074] to-[#F90016] text-white font-semibold py-3 px-12 rounded-md">
          Réserver
        </button>
      </section>
    </div>
  );
};

export default StickyDiv;
