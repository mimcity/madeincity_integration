import React from "react";
import { Description, DescriptionLink, Title } from "./UI/SectionElements";
import CollectionCard from "./UI/CollectionCard";

const SliderSection = () => {
  return (
    <div className="mt-[115px] mb-[150px]">
      <Title>Nos collections, selectionnées pour vous</Title>
      <div className="flex items-center justify-between">
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
          congue platea vel.
        </Description>
        <DescriptionLink>Voir toutes nos collections</DescriptionLink>
      </div>
      <div className="md:pl-16 pl-4 mt-5 flex gap-6 overflow-x-auto">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
};

export default SliderSection;
