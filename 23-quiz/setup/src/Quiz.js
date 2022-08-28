import React, { useState } from 'react';
import { useGlobalContext } from './context';

function Quiz(params) {
  let { quiz, setQuiz } = useGlobalContext();
  let [noOfCorrect, setNoOfCorrect] = useState(0)

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
  
  function handleAnswer(e) {
    if (e.target.value === question.correct_answer) {
      setNoOfCorrect(noOfCorrect + 1)
    }
    setQuiz({...quiz, index: quiz.index + 1})
  }

  let answers = [...question.incorrect_answers, question.correct_answer];
  answers = shuffle(answers);

  return (
    <main>
      <section className="quiz">
        <div className='header'>
        <h1>question {quiz.index + 1}</h1>
        <p className="correct-answers">correct answers : {noOfCorrect}/{quiz.questions.length}</p>
        </div>
        <article className="container">
          <h2>{question.question}</h2>
          <div className="btn-container">
            {answers.map((answer) => (
              <button className="answer-btn" value={answer} onClick={handleAnswer}>{answer}</button>
            ))}
          </div>
        </article>
        <button className="next-question" onClick={handleAnswer}>next question</button>
      </section>
    </main>
  );
}

export default Quiz;
