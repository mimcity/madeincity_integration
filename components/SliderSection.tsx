import React from "react";
import { Description, DescriptionLink, Title } from "./UI/SectionElements";
import CollectionCard from "./UI/CollectionCard";
import Layout from "./UI/Layout";

const SliderSection = () => {
  return (
    <Layout fullWidth additional="md:py-[115px] py-8 md:pl-15 pl-4">
      <div className="md:pr-0 pr-4">
        <Title>Nos collections, selectionnées pour vous</Title>
        <div className="flex items-center justify-between md:pr-[51px] md:mt-4 mt-2">
          <Description>
            Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in neque
            congue platea vel.
          </Description>
          <DescriptionLink>Voir toutes nos collections</DescriptionLink>
        </div>
      </div>
      <div className="mt-5 flex md:gap-6 gap-4 overflow-x-auto">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </Layout>
  );
};

export default SliderSection;
