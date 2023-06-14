import React, { useEffect, useState } from "react";
import Layout from "../UI/Layout";
import { Description, DescriptionLink, Title } from "../UI/SectionElements";
import CollectionCard from "../UI/CollectionCard";

const SliderSection = () => {
  const [marginLeft, setMarginLeft] = useState("auto");

  useEffect(() => {
    const updateMargin = () => {
      const centeredElement = document.getElementById("centered");
      if (centeredElement !== null) {
        const computedStyle = window.getComputedStyle(centeredElement);
        setMarginLeft(computedStyle.marginLeft);
      }
    };

    window.addEventListener("resize", updateMargin);

    updateMargin();

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl mx-auto w-full" id="centered">
        <span className="sr-only">SR only</span>
      </div>
      <div style={{ marginLeft }}>
        <Layout
          fullWidth
          additional="lg:py-[115px] md:py-16 py-8 lg:pl-15 md:pl-8 pl-4"
        >
          <div className="md:pr-0 pr-4">
            <Title>Nos collections, selectionnées pour vous</Title>
            <div className="flex items-center justify-between md:pr-[51px] md:mt-4 mt-2">
              <Description>
                Lorem ipsum dolor sit amet consectetur. Nulla turpis nam in
                neque congue platea vel.
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
      </div>
    </>
  );
};

export default SliderSection;
