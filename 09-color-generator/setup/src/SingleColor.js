import React, { useEffect, useState } from "react";

const SingleColor = ({ weight, type, hex }) => {
  let [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    setIsClicked(true);
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <article
      onClick={handleClick}
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: `${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>

      {isClicked && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
