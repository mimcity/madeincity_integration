import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Image1 from "../../assets/HeroImage.png";
import Image2 from "../../assets/article.png";
import Image3 from "../../assets/articlecontent.png";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [Image1, Image2, Image3];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleNext = () => {
    setCurrentImage((prevCurrentImage) =>
      prevCurrentImage === images.length - 1 ? 0 : prevCurrentImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevCurrentImage) =>
      prevCurrentImage === 0 ? images.length - 1 : prevCurrentImage - 1
    );
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && startPosition - e.clientX > 50) {
      handleNext();
      setIsDragging(false);
    } else if (isDragging && e.clientX - startPosition > 50) {
      handlePrev();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerElement = containerRef.current;
      containerElement.addEventListener("mousedown", handleMouseDown);
      containerElement.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        containerElement.removeEventListener("mousedown", handleMouseDown);
        containerElement.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startPosition]);
  return (
    <div
      className="relative w-full h-[500px] md:hidden block"
      ref={containerRef}
    >
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
            idx === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button onClick={handlePrev} className="absolute top-1/2 left-5">
        <ChevronLeftIcon className="w-5 h-5 text-white" />
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-5 ">
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </button>
      <div className="absolute bottom-0 w-full flex justify-center space-x-2 p-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentImage
                ? "bg-white"
                : "bg-transparent border border-neutral-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
