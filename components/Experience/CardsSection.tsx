import React from "react";
import { Description, DescriptionLink, Title } from "../UI/SectionElements";
import Layout from "../UI/Layout";
import ExperienceCard from "../UI/ExperienceCard";

const CardsSection = () => {
  return (
    <div className="lg:pt-28 pt-16">
      <Title>A découvrir également</Title>
      <div className="flex items-center justify-between md:py-4 py-2">
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
          congue platea vel.
        </Description>
        <DescriptionLink>Voir toutes les expériences</DescriptionLink>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 mt-2">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default CardsSection;
