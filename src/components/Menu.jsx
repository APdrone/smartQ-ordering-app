import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ appData, selectedCategory }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { menu, extras } = appData;

  const category = extras.categories[selectedCategory];

  const filteredItems = menu.filter((m) => m.category === selectedCategory);

  return (
    <div>
      <div className="menu-container">
        <div className="main-header">
          <h1 className="menu-heading">{selectedCategory}</h1>
          <img
            src={category.bannerImage}
            alt="main course"
            className="main-course-img"
          />
        </div>
        {filteredItems.map((item) => (
          <MenuItem handleForm={handleSubmit} menu={item} key={item.foodid} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
