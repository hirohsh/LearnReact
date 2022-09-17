import React from 'react';
import { useState } from 'react';

const TestUseState = () => {
  // let [displayVal, setDisplayVal] = useState();
  // return (
  //   <>
  //     <input type="text" onChange={(e) => setDisplayVal(e.target.value)} /> = {displayVal}
  //   </>
  // );
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [toggle, setToggle] = useState(true);
  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <button onClick={changeToggle}>toggle</button>
      {toggle ? <CountA countA={countA} setCountA={setCountA} /> : <CountB countB={countB} setCountB={setCountB} />}
    </>
  );
};

const CountA = ({ countA, setCountA }) => {
  const countUp = () => {
    setCountA((countA) => countA + 1);
  };
  const countDown = () => {
    setCountA((countA) => countA - 1);
  };
  return (
    <>
      <h3>countA:{countA}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

const CountB = ({ countB, setCountB }) => {
  const countUp = () => {
    setCountB((countB) => countB + 1);
  };
  const countDown = () => {
    setCountB((countB) => countB - 1);
  };
  return (
    <>
      <h3>countB:{countB}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default TestUseState;
