import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, type }) => {
  let [isClicked, setIsClicked] = useState(false);

  function handleClick(e) {
    setIsClicked(true);
    let value = rgbToHex(...rgb);
    navigator.clipboard.writeText(value);
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
      style={{ backgroundColor: `${rgbToHex(...rgb)}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>

      {isClicked && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
