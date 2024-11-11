// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

export const SnowboardCalculator = ({ height, gender, style, experience }) => {
  const calculateSize = () => {
    let baseLength = 0;

    if (gender === 'barbat') {
      baseLength = Math.min(Math.max(height, 165), 187);
    } else if (gender === 'femeie') {
      baseLength = Math.min(Math.max(height, 159), 171);
    } else if (gender === 'copil') {
      baseLength = Math.min(Math.max(height, 108), 162);
    }

    const levelAdjustment =
      {
        incepator: -3,
        intermediar: -1,
        avansat: 0,
        expert: 1,
      }[experience] || 0;

    const styleAdjustment =
      {
        'jib': -3,
        'freestyle': -1,
        'all-mountain': 0,
        'freeride': 3,
      }[style] || 0;

    const minLength = baseLength - 25 + levelAdjustment + styleAdjustment;
    const maxLength = baseLength - 17 + levelAdjustment + styleAdjustment;

    return `Marimea recomandata este intre ${minLength.toFixed(
      1,
    )} cm si ${maxLength.toFixed(1)} cm.`;
  };

  return (
    <div className="bg-white bg-opacity-75 p-4 rounded shadow-md mt-4 text-center">
      <h2 className="text-xl font-semibold">Rezultatul calculului:</h2>
      <p>{calculateSize()}</p>
    </div>
  );
};

SnowboardCalculator.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};
