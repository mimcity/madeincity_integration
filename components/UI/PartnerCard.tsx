import Image from "next/image";
import React from "react";
import Hotel from "../../assets/otel.png";
import Logo from "../../assets/hotelogo.png";

const PartnerCard = () => {
  return (
    <div className="lg:h-[272px] h-[140px] w-full relative rounded-md overflow-hidden flex items-center justify-center">
      <Image src={Hotel} fill alt="Hotel" />
      <div className="lg:w-[142px] lg:h-[100px] w-[75px] h-[52px] overflow-hidden relative">
        <Image src={Logo} alt="Logo" fill />
      </div>
      <div className="bg-gradient-to-r from-black/20 to-transparent z-10 absolute w-full h-full rounded-md" />
    </div>
  );
};

export default PartnerCard;
