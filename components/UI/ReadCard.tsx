import React from "react";
import CardImage from "../../assets/readcard.png";
import Image from "next/image";
const ReadCard = () => {
  return (
    <article className="max-w-[424px]">
      <div>
        <div>
          <Image
            src={CardImage}
            alt="Reading Card"
            className="rounded-md overflow-hidden"
          />
        </div>
        <div className="-mt-4 ml-4">
          <span className="uppercase text-xs font-medium bg-gradient-to-tr from-[#D30074] to-[#F90016] p-[6px] rounded-sm">
            New
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-neutral-700 text-xl -tracking-wide font-semibold">
            Top 5 des nouvelles adresses à découvrir à Marrakech
          </h3>
          <p className="text-neutral-700 text-sm mt-2">
            La cité ocre fait le plein de nouveautés ! De nouvelles adresses ont
            vu le jour aux quatre coins de la ville : adresses gourmandes,
            chill, logements...
          </p>
        </div>
      </div>
    </article>
  );
};

export default ReadCard;
