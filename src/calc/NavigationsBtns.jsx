// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export const NavigationBtns = ({
  currentSlide,
  totalSlides,
  handleNext,
  handlePrev,
  isFinalStep,
}) => {
  return (
    <div className="flex justify-between w-full mt-8">
      <button
        className="bg-gray-700 text-white py-2 px-6 rounded-md"
        onClick={handlePrev}
        disabled={currentSlide === 0}
        type="button"
      >
        Înapoi
      </button>

      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-md"
        onClick={handleNext}
        disabled={currentSlide === totalSlides - 1 && !isFinalStep}
        type="button"
      >
        {currentSlide === totalSlides - 1 ? 'Calculează' : 'Înainte'}
      </button>
    </div>
  );
};

// Adaugă validarea tipurilor de prop-uri
NavigationBtns.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  isFinalStep: PropTypes.bool.isRequired,
};
