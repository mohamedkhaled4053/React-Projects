import React from "react";

function Refresh({ getData }) {
  return (
    <div className="title">
      <h2>no tours left</h2>
      <button className="btn" onClick={() => getData()}>
        refresh
      </button>
    </div>
  );
}

export default Refresh;
