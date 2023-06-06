import React from "react";
import { Description, DescriptionLink, Title } from "./UI/SectionElements";
import Layout from "./UI/Layout";

const ExperiencesSection = () => {
  return (
    <Layout additional="py-9">
      <Title>Nos collections, selectionnées pour vous</Title>
      <div className="flex items-center justify-between">
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
          congue platea vel.
        </Description>
        <DescriptionLink>Voir toutes nos collections</DescriptionLink>
      </div>
    </Layout>
  );
};

export default ExperiencesSection;
