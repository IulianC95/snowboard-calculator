// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export const NavigationBtns = ({
  currentSlide,
  totalSlides,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="flex justify-between w-11/12 mt-8">
      <button
        className="bg-gray-700 text-white py-2 w-4/12 px-6 rounded-md"
        onClick={handlePrev}
        disabled={currentSlide === 0}
        type="button"
      >
        Înapoi
      </button>

      <button
        className="bg-customPink text-white py-2 w-4/12 px-6 rounded-md"
        onClick={
          currentSlide === totalSlides - 1
            ? () => window.location.reload()
            : handleNext
        }
        type="button"
      >
        {currentSlide === totalSlides - 2
          ? 'Calculează'
          : currentSlide === totalSlides - 1
          ? 'Resetează'
          : 'Înainte'}
      </button>
    </div>
  );
};

NavigationBtns.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  isFinalStep: PropTypes.bool.isRequired,
};
