import React from 'react';

const Follower = ({ avatar_url: avatar, html_url: url, login: name }) => {
  return (
    <article className="card">
      <img src={avatar} alt={name} />
      <h4>{name}</h4>
      <a href={url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
