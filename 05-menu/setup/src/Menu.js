import React from "react";

const Menu = ({items}) => {
  return (
    <div class="section-center">
      {items.map((item) => (
        <article class="menu-item">
          <img
            src={item.img}
            alt={item.title}
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 class="price">{item.price}</h4>
            </header>
            <p class="item-text">
              {item.desc}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
