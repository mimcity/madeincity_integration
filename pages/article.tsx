import Banner from "@/components/Article/Banner";
import Content from "@/components/Article/Content";
import Hero from "@/components/Article/Hero";
import ReadingList from "@/components/Article/ReadingList";
import React from "react";

const article = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Content />
      <ReadingList />
    </>
  );
};

export default article;
