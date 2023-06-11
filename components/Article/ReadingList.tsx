import React from "react";
import Layout from "../UI/Layout";
import ReadCard from "../UI/ReadCard";

const ReadingList = () => {
  return (
    <Layout>
      <div className="pb-20">
        <h2 className="text-3xl font-semibold text-neutral-700 -tracking-wide">
          A lire aussi
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
          <ReadCard />
          <ReadCard />
          <ReadCard />
          <ReadCard />
          <ReadCard />
          <ReadCard />
        </div>
      </div>
    </Layout>
  );
};

export default ReadingList;
