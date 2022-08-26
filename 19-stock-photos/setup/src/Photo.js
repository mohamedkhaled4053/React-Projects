import React from 'react';

const Photo = ({
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  urls: { regular: img },
  likes,
  alt_description,
}) => {
  return (
    <article className="photo">
      <img src={img} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium || null} alt="" className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
