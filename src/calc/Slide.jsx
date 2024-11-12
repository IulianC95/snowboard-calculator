// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavigationBtns } from './NavigationsBtns';

export const Slide = ({ currentSlide, handleNext, handlePrev }) => {
  const [gender, setGenderLocal] = useState('');
  const [height, setHeightLocal] = useState('');
  const [weight, setWeightLocal] = useState('');
  const [style, setStyleLocal] = useState('');
  const [experience, setExperienceLocal] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (currentSlide === 5) {
      calculateSize();
    }
  }, [currentSlide]);

  const handleSelect = (setValue, value) => {
    setValue(value);
  };

  const calculateSize = () => {
    const heightVal = parseFloat(height);
    let baseLength = 0;

    if (gender === 'barbat') {
      baseLength = Math.min(Math.max(heightVal, 165), 187);
    } else if (gender === 'femeie') {
      baseLength = Math.min(Math.max(heightVal, 159), 171);
    } else if (gender === 'copil') {
      baseLength = Math.min(Math.max(heightVal, 108), 162);
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

    setResult(
      `Dimensiunea recomandată este între ${minLength.toFixed(
        1,
      )} cm și ${maxLength.toFixed(1)} cm.`,
    );
  };

  const slides = [
    {
      id: 1,
      content: (
        <>
          <label htmlFor="gender" className="text-xl mb-4">
            Placa pentru:
          </label>
          <div className="flex gap-6 mt-4">
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                gender === 'barbat' ? 'bg-customPink text-white' : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setGenderLocal, 'barbat')}
            >
              Barbat
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                gender === 'femeie' ? 'bg-customPink text-white' : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setGenderLocal, 'femeie')}
            >
              Femeie
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                gender === 'copil' ? 'bg-customPink text-white' : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setGenderLocal, 'copil')}
            >
              Copil
            </button>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <label htmlFor="height" className="text-xl">
            Ce înălțime ai?
          </label>
          <input
            type="text"
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeightLocal(e.target.value)}
            placeholder="Introdu înălțimea ta în cm"
            className="border rounded-md p-2 mt-4"
          />
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <label htmlFor="weight" className="text-xl">
            Ce greutate ai?
          </label>
          <input
            type="text"
            name="weight"
            id="weight"
            value={weight}
            onChange={(e) => setWeightLocal(e.target.value)}
            placeholder="Introdu greutatea ta în kg"
            className="border rounded-md p-2 mt-4"
          />
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <label htmlFor="style" className="text-xl">
            Riding Style
          </label>
          <div className="flex gap-6 mt-4">
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                style === 'all-mountain'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setStyleLocal, 'all-mountain')}
            >
              Hybrid
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                style === 'freestyle'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setStyleLocal, 'freestyle')}
            >
              Freestyle
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                style === 'freeride'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setStyleLocal, 'freeride')}
            >
              Freeride
            </button>
          </div>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <label htmlFor="experience" className="text-xl">
            Câtă experiență ai?
          </label>
          <div className="w-12/12 grid grid-cols-2 gap-4 mt-4">
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'incepator'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setExperienceLocal, 'incepator')}
            >
              Începător
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'intermediar'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setExperienceLocal, 'intermediar')}
            >
              Intermediar
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'avansat'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setExperienceLocal, 'avansat')}
            >
              Avansat
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'expert'
                  ? 'bg-customPink text-white'
                  : 'bg-gray-300'
              }`}
              onClick={() => handleSelect(setExperienceLocal, 'expert')}
            >
              Expert
            </button>
          </div>
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <h3 className="text-2xl mb-4">Rezultatul calculului</h3>
          <p className="text-lg text-center">{result}</p>
        </>
      ),
    },
  ];

  return (
    <div className="container flex flex-col items-center w-full h-full">
      <div className="w-11/12 h-44 flex flex-col items-center justify-center bg-white bg-opacity-50 p-4 rounded-xl shadow-md">
        {slides[currentSlide].content}
      </div>

      <NavigationBtns
        currentSlide={currentSlide}
        totalSlides={slides.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isFinalStep={currentSlide === slides.length - 1}
      />
    </div>
  );
};

Slide.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};
