import React from "react";
import Layout from "../UI/Layout";
import { Description, DescriptionLink, Title } from "../UI/SectionElements";
import CollectionCard from "../UI/CollectionCard";

const SliderSection = () => {
  return (
    <Layout
      fullWidth
      additional="lg:py-[115px] md:py-16 py-8 lg:pl-15 md:pl-8 pl-4 max-w-screen-2xl"
    >
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
      <div className="mt-5 flex md:gap-6 gap-4 overflow-x-auto sliderScrollbar">
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
