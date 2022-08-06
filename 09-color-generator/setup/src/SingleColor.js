import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, type }) => {
  return (
    <article
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: `${rgbToHex(...rgb)}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{rgbToHex(...rgb)}</p>
    </article>
  );
};

export default SingleColor;
