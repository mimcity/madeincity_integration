import Image from "next/image";
import React from "react";
import Mobile from "../assets/mobile.png";

const MobileSection = () => {
  return (
    <div className="relative w-full h-[313px] md:block hidden">
      <Image src={Mobile} alt="mobile" fill />
    </div>
  );
};

export default MobileSection;
