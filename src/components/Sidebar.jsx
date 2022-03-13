import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
          <NavLink to="/pizza" className="navlink">
            <img
              src="https://img.icons8.com/nolan/64/kawaii-rice.png"
              alt="main course"
            />
            <h3>All Pizza </h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/consumables" className="navlink">
            <img
              src="https://img.icons8.com/nolan/64/kawaii-pizza.png"
              alt="main course"
            />
            <h3>Consumables</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/decorations" className="navlink">
            <img
              src="https://img.icons8.com/nolan/64/kawaii-taco.png"
              alt="special meals"
            />
            <h3>Decorations</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/pizza" className="navlink">
            <img
              src="https://img.icons8.com/nolan/64/kawaii-ice-cream.png"
              alt="Desserts"
            />
            <h3>Desserts</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/pizza" className="navlink">
            <img
              src="https://img.icons8.com/nolan/64/kawaii-soda.png"
              alt="Beverages"
            />
            <h3>Beverages</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
