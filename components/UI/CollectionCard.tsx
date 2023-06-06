import React from "react";

const CollectionCard = () => {
  return (
    <article className="aspect-video max-w-[320px] md:max-w-[480px] md:h-[288px] md:max-h-full h-[260px] w-full bg-blue-300 flex rounded-md">
      <div className="pt-12 pb-4 px-4 flex">
        <div className="flex flex-col justify-between">
          <div>
            <span>COLLECTION</span>
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
    </article>
  );
};

export default CollectionCard;
