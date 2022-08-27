import React from 'react';
import moment from 'moment';
const Article = ({ title, date, length, snippet }) => {
  return (
    <article class="post">
      <h2>{title}</h2>
      <div class="post-info">
        <span>{date}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
