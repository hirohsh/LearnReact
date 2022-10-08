import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const RedButton = styled.button`
  color: red;
  border-radius: 5px;
  background-color: green;
`;
const SecondButton = styled(RedButton)`
  color: blue;
`;

const ThirdButton = styled(SecondButton)`
  background-color: ${({ clicked }) => (clicked ? 'yellow' : 'red')};
`;

const StyleCssInJS = () => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <>
      <p>red</p>
      <RedButton>赤色ボタン</RedButton>
      <SecondButton>青色ボタン</SecondButton>
      <ThirdButton clicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        イベントボタン
      </ThirdButton>
    </>
  );
};

export default StyleCssInJS;
