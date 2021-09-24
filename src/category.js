import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <>
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      <a href="/cart">
       <i className="fa fa-shopping-cart"></i>
      </a>
    </div>
  </>
  );
};

export default Categories;