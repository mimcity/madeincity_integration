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

const FooterLinks = [
  {
    name: "Nos sites",
    items: [
      "Made in Marrakech",
      "Made in Barcelona",
      " Made in Ibiza",
      "Made in Dubaï",
      "Voir tous les sites",
    ],
  },
  {
    name: "Experiences",
    items: ["Restaurants", "Bars & Clubs", "Hôtels", "Spas", "Activités"],
  },
  {
    name: "Professionnels",
    items: ["Accès Pro", "Inscrivez-vous", "FAQ", "Link4", "Link5"],
  },
  {
    name: "A propos",
    items: [
      "Qui sommes-nous ?",
      "L’équipe",
      "Espace Presse",
      "Blog",
      "Travailler avec nous",
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <Layout>
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between ld:pt-20 pt-16 lg:pb-12 pb-11 gap-x-10 md:gap-y-24 gap-y-16">
          <div className="md:flex xl:gap-[72px] md:gap-12 gap-y-[60px] gap-x-11 grid grid-cols-2 w-full max-w-[626px]">
            {FooterLinks.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-[15px] w-full sm:items-center lg:items-start"
                  key={index}
                >
                  <h1 className="text-neutral-700 font-semibold text-sm">
                    {item.name}
                  </h1>
                  {item.items.map((single, index) => (
                    <Link
                      href="/"
                      className="text-sm text-neutral-700 hover:underline flex-shrink-0 whitespace-nowrap"
                      key={index}
                    >
                      {single}
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="max-w-[398px] xl:mr-[70px] xl:pr-8">
            <h1 className="text-neutral-700 text-2xl -tracking-wide">
              Recevez les meilleures offres direct dans votre boite mail
            </h1>
            <p className="mt-2 text-neutral-700/75 text-xs">
              By clicking Subscribe, you have agreed to our{" "}
              <span className="underline">Terms & Conditions</span>
              and Policies
            </p>
            <div className="mt-4 flex">
              <input
                type="text"
                placeholder="Votre email"
                className="py-2.5 px-4 text-sm placeholder:text-sm placeholder:text-neutral-400 border border-neutral-300 w-full"
              />
              <button className="text-white text-sm bg-black py-2.5 pl-6 pr-4">
                S’inscrire
              </button>
            </div>
          </div>
        </div>
      </Layout>
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
