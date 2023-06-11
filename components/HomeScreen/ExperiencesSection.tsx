import React from "react";
import { Description, DescriptionLink, Title } from "../UI/SectionElements";
import Layout from "../UI/Layout";
import ExperienceCard from "../UI/ExperienceCard";

const ExperiencesSection = () => {
  return (
    <Layout additional="lg:py-9 md:pt-0 md:pb-16 py-10">
      <Title>Expériences les plus populaires</Title>
      <div className="flex items-center justify-between py-2">
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
          congue platea vel.
        </Description>
        <DescriptionLink>Voir toutes nos collections</DescriptionLink>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </Layout>
  );
};

export default ExperiencesSection;
