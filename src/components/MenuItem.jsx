import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/dataSlice";

const MenuItem = ({ menu }) => {
  const { imageurl, foodname, fooddescription, price, sessionlist } = menu;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    setTotal(price * quantity);
  }, [quantity, price]);

  const handleForm = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      dispatch(add({ quantity, total, notes, name: foodname }));
    }
  };

  return (
    <div>
      <div className="menu-card-items">
        <div className="menu-items">
          <div className="menu-details">
            <div className="menu-details-img">
              <img src={imageurl} alt="" className="food-img" />
            </div>
            <div className="food-details">
              <h3>{foodname}</h3>
              <h5>{fooddescription}</h5>
              <button className="btn-primary">Add ons</button>
            </div>
            <h2 className="col-pri">${price}</h2>
          </div>

          <div className="menu-order-detail">
            <form onSubmit={handleForm}>
              <div className="input-section-1">
                <div>
                  <label htmlFor="quantity">Quantity</label>
                  <br />
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Qty"
                    className="custom-inp"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e)}
                  />
                </div>
                <div>
                  <label htmlFor="session">Session</label>
                  <br />
                  <select
                    name="session"
                    id="session"
                    placeholder="Select Session"
                    className="custom-inp"
                  >
                    {sessionlist.map((session) => (
                      <option key={session} value={session}>
                        {session}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="subtotal">SubTotal</label>
                  <br />
                  <input
                    type="number"
                    name="subtotal"
                    id="subtotal"
                    disabled
                    placeholder="$0.00"
                    className="custom-inp"
                    value={total}
                  />
                </div>
              </div>
              <div className="input-section-2">
                <div className="note-section">
                  <label htmlFor="note">Note to the kitchen</label>
                  <br />
                  <input
                    type="text"
                    name="note"
                    id="note"
                    className=" custom-inp user-notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn-primary btn-addtoCart">
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
