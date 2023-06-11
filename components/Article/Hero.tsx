import Image from "next/image";
import React from "react";
import Article from "../../assets/article.png";
import Layout from "../UI/Layout";

const Hero = () => {
  return (
    <main className="w-full mx-auto">
      <div className="h-screen relative">
        <Image src={Article} alt="Article" fill className="object-cover" />
      </div>
      <div className="bg-gradient-to-t from-black to-transparent h-1/2 w-full absolute z-50 bottom-0" />
    </main>
  );
};

export default Hero;
