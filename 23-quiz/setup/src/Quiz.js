import React from 'react';
import { useGlobalContext } from './context';

function Quiz(params) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <h2>congrats!</h2>
          <p>You answered 0% of questions correctly</p>
          <button className="close-btn">play again</button>
        </div>
      </div>
      <section className="quiz">
        <p className="correct-answers">correct answers : 0/0</p>
        <article className="container">
          <h2>Who did Steven Gerrard win the Champions League with?</h2>
          <div className="btn-container">
            <button className="answer-btn">Real Madrid</button>
            <button className="answer-btn">Liverpool</button>
            <button className="answer-btn">Man City</button>
            <button className="answer-btn">Chelsea</button>
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </>
  );
}

export default Quiz;
