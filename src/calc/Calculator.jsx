// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Slide } from './Slide';
import { SnowboarderPath } from './SnowboarderPath';
import { SnowboardCalculator } from './SnowboardCalculator';

export const Calculator = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // State pentru valorile introduse în formular
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [style, setStyle] = useState('');
  const [experience, setExperience] = useState('');

  const handleNext = () => {
    if (currentSlide < 5) {
      setCurrentSlide((prev) => prev + 1);
    } else {
      setShowResult(true); // Afișăm rezultatul la ultimul slide
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="flex flex-col items-center">
      <form className="pt-2 w-96 h-full lg:h-1/3 bg-form-bg bg-cover bg-center bg-no-repeat text-black">
        {!showResult ? (
          <Slide
            currentSlide={currentSlide}
            handleNext={handleNext}
            handlePrev={handlePrev}
            setGender={setGender}
            setHeight={setHeight}
            setWeight={setWeight}
            setStyle={setStyle}
            setExperience={setExperience}
          />
        ) : (
          <SnowboardCalculator
            height={parseFloat(height)}
            weight={parseFloat(weight)}
            gender={gender}
            style={style}
            experience={experience}
          />
        )}
        <SnowboarderPath currentStep={currentSlide} />
      </form>
    </div>
  );
};
