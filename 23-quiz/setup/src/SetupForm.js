import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>setup quiz</h2>
        <div className="form-control">
          <label for="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min="1"
            max="50"
            value="10"
          />
        </div>
        <div className="form-control">
          <label for="category">category</label>
          <select name="category" id="category" className="form-input">
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className="form-control">
          <label for="difficulty">select difficulty</label>
          <select name="difficulty" id="difficulty" className="form-input">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          start
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
