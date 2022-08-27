import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  return (
    <section class="stories">
      <article class="story">
        <h4 class="title">On React and WordPress</h4>
        <p class="info">
          543 points by <span>firasd | </span> 201 comments
        </p>
        <div>
          <a
            href="https://ma.tt/2017/09/on-react-and-wordpress/"
            class="read-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            read more
          </a>
          <button class="remove-btn">remove</button>
        </div>
      </article>
    </section>
  );
};

export default Stories;
