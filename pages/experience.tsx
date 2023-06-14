import CardsSection from "@/components/Experience/CardsSection";
import Carousel from "@/components/Experience/Carousel";
import Content from "@/components/Experience/Content";
import Header from "@/components/Experience/Header";
import StickyDiv from "@/components/Experience/StickyDiv";
import Layout from "@/components/UI/Layout";
import React from "react";

const experience = () => {
  return (
    <>
      <Carousel />
      <Layout>
        <div className="lg:pt-40 lg:pb-24 md:py-32 sm:py-24 py-8 lg:px-28 md:px-20">
          <Header />
          <Content />
        </div>
        <CardsSection />
      </Layout>
      <StickyDiv />
    </>
  );
};

export default experience;
