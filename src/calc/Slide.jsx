// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavigationBtns } from './NavigationsBtns';

export const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Stări separate pentru fiecare input
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [style, setStyle] = useState('');
  const [experience, setExperience] = useState('');

  const handleNext = (event) => {
    event.preventDefault();
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      console.log('Finalizarea formularului');
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Slide-urile gestionate printr-un array de obiecte
  const slides = [
    {
      id: 1,
      content: (
        <>
          <label htmlFor="gender" className="text-xl">
            Placa pentru:
          </label>
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                id="barbat"
                value="barbat"
                checked={gender === 'barbat'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="barbat" className="text-lg">
                Barbat
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                id="femeie"
                value="femeie"
                checked={gender === 'femeie'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="femeie" className="text-lg">
                Femeie
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                id="copil"
                value="copil"
                checked={gender === 'copil'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="copil" className="text-lg">
                Copil
              </label>
            </div>
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
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="style"
                id="all-mountain"
                value="all-mountain"
                checked={style === 'all-mountain'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="all-mountain" className="text-lg">
                All-mountain
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="style"
                id="freestyle"
                value="freestyle"
                checked={style === 'freestyle'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="freestyle" className="text-lg">
                Freestyle
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="style"
                id="freeride"
                value="freeride"
                checked={style === 'freeride'}
                onChange={(e) => setStyle(e.target.value)}
              />
              <label htmlFor="freeride" className="text-lg">
                Freeride
              </label>
            </div>
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
          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="experience"
                id="incepator"
                value="incepator"
                checked={experience === 'incepator'}
                onChange={(e) => setExperience(e.target.value)}
              />
              <label htmlFor="incepator" className="text-lg">
                Începător
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="experience"
                id="intermediar"
                value="intermediar"
                checked={experience === 'intermediar'}
                onChange={(e) => setExperience(e.target.value)}
              />
              <label htmlFor="intermediar" className="text-lg">
                Intermediar
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="experience"
                id="avansat"
                value="avansat"
                checked={experience === 'avansat'}
                onChange={(e) => setExperience(e.target.value)}
              />
              <label htmlFor="avansat" className="text-lg">
                Avansat
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="experience"
                id="expert"
                value="expert"
                checked={experience === 'expert'}
                onChange={(e) => setExperience(e.target.value)}
              />
              <label htmlFor="expert" className="text-lg">
                Expert
              </label>
            </div>
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
