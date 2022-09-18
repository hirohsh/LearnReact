import React from 'react';
import { useState } from 'react';

const PullDown = () => {
  const [selected, setSelected] = useState('Banana');

  const OPTIONS = ['Apple', 'Banana', 'Cherry'];

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTIONS.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default PullDown;
