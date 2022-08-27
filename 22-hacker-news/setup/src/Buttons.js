import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  return (
    <div className="btn-container">
      <button>prev</button>
      <p>3 of 50</p>
      <button>next</button>
    </div>
  );
};

export default Buttons;
