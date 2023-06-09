import Image from "next/image";
import React from "react";
import SliderImage from "../../assets/SliderImage.jpg";

const CollectionCard = () => {
  return (
    <article className="aspect-video max-w-[320px] md:max-w-[480px] md:h-[288px] md:max-h-full h-[260px] w-full flex relative">
      <div>
        <Image
          src={SliderImage}
          className="rounded-md overflow-hidden"
          fill
          alt="Card Image"
        />
      </div>
      <div className="pt-12 pb-4 px-4 flex z-20">
        <div className="flex flex-col justify-between">
          <div>
            <span className="uppercase text-xs">collection</span>
            <h2 className="text-3xl font-semibold leading-[30px] -tracking-wide">
              Le désert d’Agafay, le trésor caché
            </h2>
          </div>
          <div>
            <button className="text-sm font-semibold text-neutral-700 py-1.5 px-3 bg-white rounded-md">
              Voir les expériences
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-black/20 to-transparent z-10 absolute w-full h-full rounded-md" />
    </article>
  );
};

export default CollectionCard;
