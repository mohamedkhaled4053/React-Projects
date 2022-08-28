import React, { useState } from 'react';
import { useGlobalContext } from './context';
import Modal from './Modal';

function Quiz(params) {
  // context and states
  let { quiz, setQuiz } = useGlobalContext();
  let [noOfCorrect, setNoOfCorrect] = useState(0);

  // variables
  let { questions, index } = quiz;
  let question = questions[index];

  // helper functions
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
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

  // handle functions
  function handleAnswer(e) {
    // check if answer is correct
    if (e.target.value === question.correct_answer) {
      setNoOfCorrect(noOfCorrect + 1);
    }
    // change questions or end quiz if we run of questions
    if (index === questions.length - 1) {
      setQuiz({ ...quiz, isEnd: true });
    } else {
      setQuiz({ ...quiz, index: index + 1 });
    }
  }

  function cancel() {
    setQuiz({...quiz, show:false})
  }

  // prepare answers array
  let answers = [...question.incorrect_answers, question.correct_answer];
  answers = shuffle(answers);
  return (
    <main>
      <Modal score={noOfCorrect} />
      <section className="quiz">
        <div className="header">
          <h1>question {index + 1}</h1>
          <p className="correct-answers">
            correct answers : {noOfCorrect}/{questions.length}
          </p>
        </div>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html: question.question}}></h2>
          <div className="btn-container">
            {answers.map((answer) => (
              <button
                key={answer}
                className="answer-btn"
                value={answer}
                onClick={handleAnswer}
                dangerouslySetInnerHTML={{__html: answer}}
              >
              </button>
            ))}
          </div>
        </article>
        <div className="buttons-container">
          <button className="close-btn" onClick={cancel}>
            cancel
          </button>
          <button className="next-question" onClick={handleAnswer}>
            next question
          </button>
        </div>
      </section>
    </main>
  );
}

export default Quiz;
