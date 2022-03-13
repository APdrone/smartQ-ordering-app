import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const history = useHistory();

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

  const handleUserDetails = () => {};

  return (
    <div className="pay-container">
      <h1 className="pay-header col-pri">Order Details</h1>
      <div className="pay-children">
        <div className="pay-user-details">
          <h3>Event Details</h3>
          {/* <UserDetails /> */}
          <div className="event-details">
            <form onSubmit={handleUserDetails}>
              <div className="event-details-inp">
                <label htmlFor="name">Name</label>
                <input type="text" name="name " id="name" />
              </div>
              <div className="event-details-inp">
                <label htmlFor="num">Contact Number</label>
                <input type="number" name="num" id="num" />
              </div>
              <div className="event-details-inp">
                <label htmlFor="num">Event Name</label>
                <input type="number" name="num" id="num" />
              </div>
              <div className="event-details-inp">
                <label htmlFor="num">Event Location</label>
                <input type="number" name="num" id="num" />
              </div>
              <div className="event-details-inp">
                <label htmlFor="num">Event Date</label>
                <input type="number" name="num" id="num" />
              </div>
              <div className="event-details-inp">
                <label htmlFor="num">Delivery Location</label>
                <select
                  name="session"
                  id="session"
                  placeholder="Select delivery Mode"
                  className="custom-inp"
                >
                  <option value="BREAKFAST">Delivery</option>
                  <option value="LUNCH">Later</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div className="pay-sidebar">
          <h3 className="col-pri">Select Payment method</h3>
          <div>
            <div className="pay-sidebar-options">
              <input type="checkbox" id="net" name="net" value="net" />
              <label htmlFor="vehicle1"> Net Banking</label>
              <br />
            </div>
            <div>
              <input type="checkbox" id="card" name="card" value="card" />
              <label htmlFor="card"> Credit card/Debit card</label>
              <br />
            </div>
          </div>

          <div className="total-cart">
            <h4>Sub total :$ {combine}</h4>
            <NavLink to="/payment">
              <button className="btn-primary proceed">Make Payment</button>
            </NavLink>
          </div>
        </div>
        <div className="pay-cart-summary">
          <h3 className="col-pri">Cart Summary</h3>
          <div className="pay-cart-container">
            <button className="edit-order-btn" onClick={() => history.goBack()}>
              Edit
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
