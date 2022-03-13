import React from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const appData = useSelector((state) => state.userActions.appdata);
  const location = useLocation();

  let cat = location.pathname.split("/")[1];
  cat = cat[0].toUpperCase() + cat.slice(1);

  return (
    <div className="dash-container">
      <h1 className="dash-header">Build Your Menu</h1>
      <div className="dash-children">
        <div className="dash-sidebar">
          <Sidebar />
        </div>
        <div className="dash-menu">
          <Menu appData={appData} selectedCategory={cat} />
        </div>
        <div className="dash-cart">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
