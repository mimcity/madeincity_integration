import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./UI/Icons";
import Layout from "./UI/Layout";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#2C2C2C] md:pt-10 pt-[53px] pb-10 md:pb-6 md:px-0 px-16">
        <Layout>
          <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="flex items-center md:gap-12 md:flex-row flex-col">
              <Image src={Logo} alt="Logo" className="max-w-[203px]" />
              <div className="md:hidden items-center gap-8 flex md:mt-0 mt-8">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YoutubeIcon />
              </div>
              <div className="flex flex-col gap-4 items-center md:items-start md:mt-0 mt-12">
                <p className="text-sm text-white">&#169; Copyright</p>
                <div className="flex items-center gap-x-[18px] gap-y-4 text-sm text-white flex-wrap justify-center">
                  <Link href="/">CGU</Link>
                  <Link href="/">Accessibilité</Link>
                  <Link href="/">Sitemap</Link>
                  <Link href="/">Confidentialité</Link>
                  <Link href="/">Mentions légales</Link>
                </div>
              </div>
            </div>
            <div className="md:flex items-center gap-8 hidden">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YoutubeIcon />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Footer;
