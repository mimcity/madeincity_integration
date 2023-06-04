import React from "react";
import { Description, DescriptionLink, Title } from "./UI/SectionElements";

const ExperiencesSection = () => {
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
    </div>
  );
};

export default ExperiencesSection;
