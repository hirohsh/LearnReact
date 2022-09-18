import React from 'react';
import { useState } from 'react';

const RadioButton = () => {
  const [fruit, setFruit] = useState('Apple');
  const onChange = (e) => setFruit(e.target.value);
  const fruits = ['Apple', 'Banana', 'Cherry', 'Grape'];
  return (
    <>
      {fruits.map((value) => {
        return (
          <label key={value}>
            <input type="radio" value={value} checked={fruit === value} onChange={onChange} />
            {value}
          </label>
        );
      })}
      <h3>私は{fruit}が食べたい</h3>
    </>
  );
};

export default RadioButton;
