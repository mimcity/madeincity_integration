import Image from "next/image";
import React from "react";
import Hotel from "../../assets/otel.png";
import Logo from "../../assets/hotelogo.png";

const PartnerCard = () => {
  return (
    <div className="w-full relative rounded-md overflow-hidden flex items-center justify-center">
      <Image src={Hotel} alt="Hotel" />
      <div className="lg:max-w-[142px] lg:max-h-[100px] max-w-[75px] max-h-[52px] overflow-hidden absolute z-[100]">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="bg-gradient-to-r from-black/20 to-transparent z-10 absolute w-full h-full rounded-md" />
    </div>
  );
};

export default PartnerCard;
