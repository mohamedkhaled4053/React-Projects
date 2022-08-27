import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  let { loading, articles } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {articles.map(({title, url, author, points, num_comments}) => (
        <article className="story">
          <h4 className="title">{title}</h4>
          <p className="info">
            {points} points by <span>{author} | </span> {num_comments} comments
          </p>
          <div>
            <a
              href={url}
              className="read-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              read more
            </a>
            <button className="remove-btn">remove</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Stories;
