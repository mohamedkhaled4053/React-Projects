import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  let { table, query, setQuery, setLoading } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              min="1"
              max="50"
              value={query.amount}
              onChange={(e) => setQuery({ ...query, amount: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={query.category}
              onChange={(e) => setQuery({ ...query, category: e.target.value })}
            >
              {Object.keys(table).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={query.difficulty}
              onChange={(e) =>
                setQuery({ ...query, difficulty: e.target.value })
              }
            >
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
    </main>
  );
};

export default SetupForm;
