import React, { lazy } from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  let {page, dispatch, totalPages, loading} = useGlobalContext()

  function handleClick(e) {
    dispatch({type: 'HANDLE_PAGE', payload: e.target.textContent})
  }

  return (
    <div className="btn-container">
      <button onClick={handleClick} disabled={loading}>prev</button>
      <p>{page + 1} of {totalPages}</p>
      <button onClick ={handleClick} disabled={loading}>next</button>
    </div>
  );
};

export default Buttons;
