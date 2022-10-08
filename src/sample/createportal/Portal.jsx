import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import './Portal.css';

const ModalPortal = ({ children }) => {
  const target = document.querySelector('.container.start');
  return createPortal(children, target);
};

const Modal = ({ handle }) => {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div>
          <p>モーダル</p>
          <button onClick={handle}>閉じる</button>
        </div>
      </div>
    </div>
  );
};

const Portal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="container start"></div>
      <button onClick={() => setIsOpen(true)} disabled={isOpen}>
        モーダル表示
      </button>
      {isOpen && (
        <ModalPortal>
          <Modal handle={() => setIsOpen(false)} />
        </ModalPortal>
      )}
    </div>
  );
};

export default Portal;
