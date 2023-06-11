import Image from "next/image";
import React from "react";
import Article from "../../assets/articlecontent.png";
import TopElementCard from "../UI/TopElementCard";
import Badge from "../UI/Badge";

const Content = () => {
  return (
    <main className="max-w-[1200px] mx-auto text-black w-full">
      <div className="pt-20 pb-[200px] w-full">
        <p className="text-xl text-neutral-700 leading-[30px] max-w-3xl mx-auto">
          Après Rabat, c’est au tour de Marrakech de devenir la capitale
          culturelle du monde islamique ! Le ministre de la Jeunesse, de la
          Culture et de la Communication, Mohamed Mehdi Bensaïd, a annoncé cette
          excellente nouvelle lors de la cérémonie de clôture des festivités de
          «Rabat, capitale de la culture dans le monde islamique 2022».Cet
          événement est porté par l’Organisation du monde islamique pour
          l’éducation, les sciences et la culture (ISESCO).
        </p>
        <h2 className="mt-12 text-3xl leading-[30px] font-semibold text-neutral-700 max-w-3xl mx-auto">
          Patrimoine mondial de l’UNESCO
        </h2>
        <p className="mt-6 text-xl text-neutral-700 leading-[30px] max-w-3xl mx-auto">
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
          <div className="mt-6 w-full text-center">
            <span className="text-sm text-neutral-700">
              Crédit photos : Malick Welli et Nour Eddine El Ghoumari
            </span>
          </div>
        </div>
        <h2 className="mt-[72px] text-3xl leading-[30px] font-semibold text-neutral-700 max-w-3xl mx-auto">
          Des expos “by night”
        </h2>
        <h3 className="mt-12 text-neutral-700 text-2xl leading-[30px] -tracking-wide max-w-3xl mx-auto">
          Au programme
        </h3>
        <p className="mt-4 text-xl text-neutral-700 leading-[30px] max-w-3xl mx-auto">
          20 espaces d’art provenant de différents pays dont la France, la Côte
          d’Ivoire, le Sénégal, l’Afrique du Sud ou encore l'Allemagne seront
          représentés et exposeront les œuvres de plus d’une soixantaine
          d’artistes pour le plus grand bonheur des collectionneurs et des
          amateurs d’art. Le Royaume sera représenté par cinq galeries d’art,
          dont 3 établissements se trouvant à Casablanca.
        </p>
        <h3 className="mt-12 text-neutral-700 text-2xl leading-[30px] -tracking-wide max-w-3xl mx-auto">
          Le Centre culturel
        </h3>
        <p className="mt-4 text-xl text-neutral-700 leading-[30px] max-w-3xl mx-auto">
          Situé au cœur de M Avenue, sera partenaire actif de la Foire. Tous les
          jours, la salle de théâtre diffusera le film retraçant les 10 ans de
          "1-54", à Paris, Londres, New York et Marrakech. En parallèle, il
          exposera les œuvres de deux grands photographes : Malick Welli et Nour
          Eddine El Ghoumari. À ne pas louper : la Nuit des galeries qui aura
          lieu le jeudi 9 février. Le public pourra découvrir des expos “by
          night” dont le solo show de Yasmina Alaoui au comptoir des Mines et
          l’ouverture de l’exposition “La saveur des couleurs” à la Galerie 38.
        </p>
        <div className="max-w-3xl mx-auto py-[72px]">
          <TopElementCard />
          <TopElementCard />
        </div>
        <div className="flex items-center justify-between max-w-3xl mx-auto">
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
