import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function Carousel({ children: slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide(
      (currentSlide) =>
        (currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
    );
  
  const next = () =>
    setCurrentSlide(
      (currentSlide) =>
        (currentSlide === slides.length - 1  ? 0 : currentSlide + 1)
    );

  return (
    <div className="overflow-hidden relative">
      <div className="mt-8 flex transition-transform ease-out duration-500
      " style={{transform: `translateX(-${currentSlide * 100}%)`}}>{slides}</div>
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
