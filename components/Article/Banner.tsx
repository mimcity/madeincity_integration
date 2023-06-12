import React, { ForwardedRef } from "react";

interface BannerProps {}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  return (
    <div ref={ref} className="bg-black">
      <div className="md:pt-[72px] pt-8 md:pb-[84px] pb-14 max-w-3xl mx-auto">
        <p className="lg:text-xl text-lg font-medium -tracking-wide text-white lg:px-0 px-4">
          GOOD NEWS ! Ce 1er mai, la ville ocre a été désignée Capitale de la
          Culture dans le monde islamique pour l'année 2024. Des manifestations
          artistiques et culturelles se tiendront aux quatre coins de la ville
          ocre.
        </p>
      </div>
    </div>
  );
});

Banner.displayName = "Banner";
export default Banner;
