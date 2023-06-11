import React from "react";
import TopElement from "../../assets/topelement.jpeg";
import Image from "next/image";

const TopElementCard = () => {
  return (
    <div className="w-full py-[72px] border-b first:border-t">
      <h2 className="text-3xl leading-[30px] font-semibold text-neutral-700">
        Mandarin Oriental Marrakech
      </h2>
      <div className="mt-6">
        <Image
          src={TopElement}
          alt="Yo"
          className="max-h-[480px] rounded-md overflow-hidden"
        />
      </div>
      <div className="mt-6">
        <p className="text-xl -tracking-wide text-neutral-700">
          Lorem ipsum dolor sit amet consectetur. Amet imperdiet egestas arcu
          in. Sollicitudin vitae proin suspendisse consequat accumsan nisl
          aliquam. Ut eleifend vulputate enim tortor phasellus at platea non
          condimentum. Tellus nunc ullamcorper felis vulputate ultricies
          consectetur. Et proin sapien morbi tristique urna ultrices.
        </p>
      </div>
    </div>
  );
};

export default TopElementCard;
