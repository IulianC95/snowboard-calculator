import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import snowboarderImage from '../assets/snowboarder.png'; // Ensure the path is correct
import flagImage from '../assets/flag.png'; // Ensure the path is correct

export const SnowboarderPath = ({ currentStep }) => {
  const totalSteps = 6;

  // State to store random horizontal positions for flags
  const [flagPositions, setFlagPositions] = useState([]);

  // Generate random horizontal positions for the flags
  useEffect(() => {
    const positions = [];
    for (let i = 0; i < totalSteps; i++) {
      const topPosition = `${(i + 1) * 13}%`; // Vertical positioning (spaced equally)
      const leftPosition = `${Math.random() * 80 + 1}%`; // Random horizontal positioning (10% - 90%)
      positions.push({ top: topPosition, left: leftPosition });
    }
    console.log('Generated flag positions: ', positions); // Debugging log
    setFlagPositions(positions);
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      {/* Render the flags only */}
      {flagPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
        >
          {/* Debugging borders around the flag */}
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

      {/* Snowboarder */}
      {flagPositions.length > 0 && (
        <img
          src={snowboarderImage}
          alt="Snowboarder"
          className="absolute transition-all duration-1000"
          style={{
            top: `calc(${flagPositions[currentStep].top} - 2rem)`, // Adjusting position slightly
            left: `calc(${flagPositions[currentStep].left} - 4rem)`, // Adjusting for larger image
            width: '96px', // Doubling the snowboarder image size
            height: '96px', // Keeping aspect ratio in sync
          }}
        />
      )}
    </div>
  );
};

// PropTypes validation for SnowboarderPath
SnowboarderPath.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
