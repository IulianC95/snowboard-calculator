// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import snowboarderImage from '../assets/snowboarder.png';
import flagImage from '../assets/flag.png';

export const SnowboarderPath = ({ currentStep }) => {
  const totalSteps = 6;

  const [flagPositions, setFlagPositions] = useState([]);

  useEffect(() => {
    const positions = [];
    for (let i = 0; i < totalSteps; i++) {
      const topPosition = `${(i + 1) * 13}%`;
      const leftPosition = `${Math.random() * 60 + 20}%`;
      positions.push({ top: topPosition, left: leftPosition });
    }
    setFlagPositions(positions);
  }, []);

  return (
    <div
      className="relative w-full h-[600px] px-8 mx-auto"
      style={{ maxWidth: '500px' }}
    >
      {flagPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
        >
          <div className="w-24 h-18">
            <img
              src={flagImage}
              alt="Flag"
              className={`w-full h-full ${
                currentStep >= index ? 'filter-none' : 'filter grayscale'
              }`}
            />
          </div>
        </div>
      ))}

      {flagPositions.length > 0 && (
        <img
          src={snowboarderImage}
          alt="Snowboarder"
          className="absolute transition-all duration-1000"
          style={{
            top: `calc(${flagPositions[currentStep].top} - 2rem)`,
            left: `calc(${flagPositions[currentStep].left} - 4rem)`,
            width: '96px',
            height: '96px',
          }}
        />
      )}
    </div>
  );
};

SnowboarderPath.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
