import React from "react";
import { Description, DescriptionLink, Title } from "./UI/SectionElements";
import Layout from "./UI/Layout";
import PartnerCard from "./UI/PartnerCard";

const PartnersSection = () => {
  return (
    <Layout additional="lg:py-9 md:py-16 py-8">
      <Title>Les lieux partenaires</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque congue
        platea vel.
      </Description>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </Layout>
  );
};

export default PartnersSection;
