import React from 'react';
import { useGlobalContext } from './context';

function Quiz(params) {
  let { quiz } = useGlobalContext();
  let question = quiz.questions[quiz.index];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  let answers = [...question.incorrect_answers, question.correct_answer];
  answers = shuffle(answers);

  return (
    <main>
      <section className="quiz">
        <p className="correct-answers">correct answers : 0/0</p>
        <article className="container">
          <h2>{question.question}</h2>
          <div className="btn-container">
            {answers.map((answer) => (
              <button className="answer-btn">{answer}</button>
            ))}
          </div>
        </article>
        <button className="next-question">next question</button>
      </section>
    </main>
  );
}

export default Quiz;
