import React from 'react';
import { useGlobalContext } from './context';

const Modal = ({score}) => {
  let {quiz} = useGlobalContext()

  let percentage = Math.round((score/quiz.questions.length) * 100)
  return (
    <div className={`modal-container ${quiz.isEnd && 'isOpen'}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {percentage}% of questions correctly</p>
        <button className="close-btn">play again</button>
      </div>
    </div>
  );
};

export default Modal;
