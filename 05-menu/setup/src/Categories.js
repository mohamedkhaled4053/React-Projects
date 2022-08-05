import React from "react";

const Categories = ({ items, setShowen }) => {
  // get categories then get unique categories
  let Categories = items.map((item) => item.category);
  Categories = ['all',...new Set(Categories)];

  return (
    <div className="btn-container">
      {Categories.map((category) => (
        <button
          key={category}
          type="button"
          className="filter-btn"
          onClick={() => setShowen(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
