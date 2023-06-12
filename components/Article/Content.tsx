import Image from "next/image";
import React from "react";
import Article from "../../assets/articlecontent.png";
import TopElementCard from "../UI/TopElementCard";
import Badge from "../UI/Badge";

const Content = () => {
  return (
    <main className="max-w-[1200px] mx-auto text-black w-full">
      <div className="lg:pt-20 md:pt-16 pt-12 lg:pb-[200px] mb:pb-32 pb-[52px] w-full">
        <p className="lg:text-xl md:text-lg text-base text-neutral-700 leading-[30px] max-w-3xl mx-auto md:px-0 px-4">
          Après Rabat, c’est au tour de Marrakech de devenir la capitale
          culturelle du monde islamique ! Le ministre de la Jeunesse, de la
          Culture et de la Communication, Mohamed Mehdi Bensaïd, a annoncé cette
          excellente nouvelle lors de la cérémonie de clôture des festivités de
          «Rabat, capitale de la culture dans le monde islamique 2022».Cet
          événement est porté par l’Organisation du monde islamique pour
          l’éducation, les sciences et la culture (ISESCO).
        </p>
        <h2 className="mt-12 lg:text-3xl text-2xl leading-[30px] font-semibold text-neutral-700 max-w-3xl mx-auto md:px-0 px-4">
          Patrimoine mondial de l’UNESCO
        </h2>
        <p className="lg:mt-6 md:mt-5 mt-4 lg:text-xl md:text-lg text-base text-neutral-700 leading-[30px] max-w-3xl mx-auto md:px-0 px-4">
          Après Rabat, c’est au tour de Marrakech de devenir la capitale
          culturelle du monde islamique ! Le ministre de la Jeunesse, de la
          Culture et de la Communication, Mohamed Mehdi Bensaïd, a annoncé cette
          excellente nouvelle lors de la cérémonie de clôture des festivités de
          «Rabat, capitale de la culture dans le monde islamique 2022».Cet
          événement est porté par l’Organisation du monde islamique pour
          l’éducation, les sciences et la culture (ISESCO).
        </p>
        <div>
          <div className="relative aspect-[12/6.3] w-full mt-[72px]">
            <Image src={Article} fill alt="Content" />
          </div>
          <div className="mt-6 w-full text-center md:px-0 px-4">
            <span className="text-sm text-neutral-700">
              Crédit photos : Malick Welli et Nour Eddine El Ghoumari
            </span>
          </div>
        </div>
        <h2 className="lg:mt-[72px] md:mt-16 mt-14 lg:text-3xl text-2xl leading-[30px] font-semibold text-neutral-700 max-w-3xl mx-auto md:px-0 px-4">
          Des expos “by night”
        </h2>
        <h3 className="lg:mt-12 md:mt-8 mt-[22px] text-neutral-700 lg:text-2xl text-xl leading-[30px] -tracking-wide max-w-3xl mx-auto md:px-0 px-4 font-semibold">
          Au programme
        </h3>
        <p className="md:mt-4 mt-3 lg:text-xl md:text-lg text-base text-neutral-700 leading-[30px] max-w-3xl mx-auto md:px-0 px-4">
          20 espaces d’art provenant de différents pays dont la France, la Côte
          d’Ivoire, le Sénégal, l’Afrique du Sud ou encore l'Allemagne seront
          représentés et exposeront les œuvres de plus d’une soixantaine
          d’artistes pour le plus grand bonheur des collectionneurs et des
          amateurs d’art. Le Royaume sera représenté par cinq galeries d’art,
          dont 3 établissements se trouvant à Casablanca.
        </p>
        <h3 className="mt-12 text-neutral-700 lg:text-2xl text-xl leading-[30px] -tracking-wide max-w-3xl mx-auto md:px-0 px-4 font-semibold">
          Le Centre culturel
        </h3>
        <p className="md:mt-4 mt-3 lg:text-xl md:text-lg text-base text-neutral-700 leading-[30px] max-w-3xl mx-auto md:px-0 px-4">
          Situé au cœur de M Avenue, sera partenaire actif de la Foire. Tous les
          jours, la salle de théâtre diffusera le film retraçant les 10 ans de
          "1-54", à Paris, Londres, New York et Marrakech. En parallèle, il
          exposera les œuvres de deux grands photographes : Malick Welli et Nour
          Eddine El Ghoumari. À ne pas louper : la Nuit des galeries qui aura
          lieu le jeudi 9 février. Le public pourra découvrir des expos “by
          night” dont le solo show de Yasmina Alaoui au comptoir des Mines et
          l’ouverture de l’exposition “La saveur des couleurs” à la Galerie 38.
        </p>
        <div className="max-w-3xl mx-auto lg:py-[72px] pt-[72px] pb-12 lg:px-0 px-4">
          <TopElementCard />
          <TopElementCard />
        </div>
        <div className="flex md:flex-row flex-col md:items-center justify-between max-w-3xl mx-auto md:px-0 px-4 md:gap-y-0 gap-y-4">
          <div>
            <p className="text-neutral-700 font-normal">26 Novembre 2023</p>
            <span className="text-neutral-500 text-xs">Par Anaïs Robin</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge />
            <Badge />
            <Badge />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
