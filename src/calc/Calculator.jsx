import React, { useState } from 'react';
import { Slide } from './Slide';
import { SnowboarderPath } from './SnowboarderPath';

export const Calculator = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-center">
      <form className="pt-2 w-96 h-full lg:h-1/3 bg-form-bg bg-cover bg-center bg-no-repeat text-black">
        {/* Slide component with currentSlide */}
        <Slide
          currentSlide={currentSlide}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />

        {/* SnowboarderPath that shows the progress */}
        <SnowboarderPath currentStep={currentSlide} />
      </form>
    </div>
  );
};
