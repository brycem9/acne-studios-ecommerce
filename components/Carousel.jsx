import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide(
      (currentSlide) =>
        (currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    );

  const next = () =>
    setCurrentSlide((currentSlide) => {
      let nextSlide = currentSlide + 1;

      while (nextSlide < images.length && !images[nextSlide]) {
        nextSlide++;
      }

      if (nextSlide >= images.length) {
        nextSlide = 0;
      }

      return nextSlide;
    });

  return (
    <div className="overflow-hidden relative">
      <div
        className="mt-8 flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev}>
          <ChevronLeftIcon className="w-8" />
        </button>
        <button onClick={next}>
          <ChevronRightIcon className="w-8" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
