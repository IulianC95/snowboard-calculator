// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { NavigationBtns } from './NavigationsBtns';

export const Slide = ({ currentSlide, handleNext, handlePrev }) => {
  // Stări separate pentru fiecare input
  const [gender, setGender] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [style, setStyle] = React.useState('');
  const [experience, setExperience] = React.useState('');

  // Funcție comună pentru selectarea unui buton și colorarea lui
  const handleSelect = (setValue, value) => {
    setValue(value); // Salvează valoarea selectată în state
  };

  // Slide-urile gestionate printr-un array de obiecte
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
                gender === 'barbat' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setGender, 'barbat')}
            >
              Barbat
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                gender === 'femeie' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setGender, 'femeie')}
            >
              Femeie
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                gender === 'copil' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setGender, 'copil')}
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
            onChange={(e) => setHeight(e.target.value)}
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
            onChange={(e) => setWeight(e.target.value)}
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
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setStyle, 'all-mountain')}
            >
              All-mountain
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                style === 'freestyle' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setStyle, 'freestyle')}
            >
              Freestyle
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                style === 'freeride' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setStyle, 'freeride')}
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
          <div className="w-full flex gap-6 mt-4">
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'incepator'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setExperience, 'incepator')}
            >
              Începător
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'intermediar'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setExperience, 'intermediar')}
            >
              Intermediar
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'avansat'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setExperience, 'avansat')}
            >
              Avansat
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${
                experience === 'expert'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleSelect(setExperience, 'expert')}
            >
              Expert
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container flex flex-col items-center w-full h-full">
      {/* Înveliș comun pentru fiecare slide */}
      <div className="w-11/12 flex flex-col items-center bg-white bg-opacity-50 p-4 rounded-xl shadow-md">
        {slides[currentSlide].content}
      </div>

      {/* Integrează componentele de navigare */}
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

// PropTypes validation
Slide.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};
