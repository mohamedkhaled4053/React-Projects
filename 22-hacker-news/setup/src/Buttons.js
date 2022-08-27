import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  let {page, dispatch, totalPages} = useGlobalContext()

  function handleClick(e) {
    dispatch({type: 'HANDLE_PAGE', payload: e.target.textContent})
  }

  return (
    <div className="btn-container">
      <button onClick={handleClick}>prev</button>
      <p>{page + 1} of {totalPages}</p>
      <button onClick ={handleClick}>next</button>
    </div>
  );
};

export default Buttons;
