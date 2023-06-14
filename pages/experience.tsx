import Content from "@/components/Experience/Content";
import Header from "@/components/Experience/Header";
import Layout from "@/components/UI/Layout";
import React from "react";

const experience = () => {
  return (
    <Layout>
      <div className="py-40 lg:px-28 md:px-20">
        <Header />
        <Content />
      </div>
    </Layout>
  );
};

export default experience;
