import React from 'react';
import { useState } from 'react';

const animals = ['Dog', 'Cat', 'Rat', null];

const MapFilter = () => {
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
      <ul>
        {animals
          .filter((animal) => {
            const animalstr = animal ?? '';
            const isMatch = animalstr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>
              {animal ?? 'nullまたはundefined'}
              {animal === 'Dog' && '★'}
            </li>
          ))}
      </ul>
    </>
  );
};

export default MapFilter;
