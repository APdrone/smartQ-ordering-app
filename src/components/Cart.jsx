import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.userActions.userCart);
  const [combine, setCombine] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const orderValue = cartItems
        .map((item) => item.total)
        .reduce((acc, val) => acc + val);
      setCombine(orderValue);
    }
  }, [cartItems]);

  return (
    <div className="cart-container">
      <h3 className="cart-header">Cart Summary</h3>

      {cartItems.map((item, i) => (
        <div key={i}>
          <div className="cart-menu-items">
            <div>
              <h4>Item</h4>
              <h3>{item.name}</h3>
            </div>
            <div>
              <h4>Qty</h4>
              <h3>{item.quantity}</h3>
            </div>
            <div>
              <h4>Sub total</h4>
              <h3>$ {item.total}</h3>
            </div>
          </div>
          {item.notes && (
            <div>
              <h4>Note to kitchen</h4>
              <h3>{item.notes}</h3>
            </div>
          )}
        </div>
      ))}

      {cartItems.length === 0 && (
        <div className="cart-summary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-cart"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="cart-empty">Your cart is empty</h3>
        </div>
      )}

      <div className="total-cart">
        <h4>Sub total :$ {combine}</h4>
        <NavLink to="/payment">
          <button className="btn-primary proceed">Proceed</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
