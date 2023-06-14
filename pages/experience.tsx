import CardsSection from "@/components/Experience/CardsSection";
import Content from "@/components/Experience/Content";
import Header from "@/components/Experience/Header";
import Layout from "@/components/UI/Layout";
import React from "react";

const experience = () => {
  return (
    <Layout>
      <div className="lg:pt-40 lg:pb-24 md:py-32 py-24 lg:px-28 md:px-20">
        <Header />
        <Content />
        <CardsSection />
      </div>
    </Layout>
  );
};

export default experience;
