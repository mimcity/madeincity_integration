import React from "react";
import Layout from "../UI/Layout";
import { Description, Title } from "../UI/SectionElements";
import PartnerCard from "../UI/PartnerCard";

const PartnersSection = () => {
  return (
    <Layout additional="lg:py-9 md:py-16 sm:py-8 pb-28 pt-8">
      <Title>Les lieux partenaires</Title>
      <div className="md:py-4 py-2">
        <Description>
          Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
          congue platea vel.
        </Description>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4 mt-2">
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
