import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  return (
    <section className="stories">
      <article className="story">
        <h4 className="title">On React and WordPress</h4>
        <p className="info">
          543 points by <span>firasd | </span> 201 comments
        </p>
        <div>
          <a
            href="https://ma.tt/2017/09/on-react-and-wordpress/"
            className="read-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
          <button className="remove-btn">remove</button>
        </div>
      </article>
    </section>
  );
};

export default Stories;
