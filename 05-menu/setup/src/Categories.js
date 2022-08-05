import React from "react";

const Categories = ({ items }) => {
  // get categories then get unique categories
  let Categories = items.map((item) => item.category);
  Categories = [...new Set(Categories)];

  return (
    <div className="btn-container">
      <button type="button" className="filter-btn">
        all
      </button>
      {Categories.map((category) => (
        <button key={category} type="button" className="filter-btn">
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
