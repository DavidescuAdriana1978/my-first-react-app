import "./CartPage.css";
import puppiesList from "../../data.json";
import { Offcanvas, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

function CartPage() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
  } = useCart();

  return (
    <article>
      <h2>
        Adoption Cart
        {/* ({totalUniqueItems}) total item:({totalItems}) */}
      </h2>

      {puppiesList.map((puppy) => (
        <div className="cart_box" key={puppy.fileSizeBytes}>
          <div className="cart_img">
            <img src={puppy.url} style={{ height: "3rem" }} />
          </div>
          <div>
            <button onClick={() => handleChange(puppy, 1)}>+</button>

            <button onClick={() => handleChange(puppy, -1)}>-</button>
          </div>
          <div>
            <button onClick={() => handleRemove(puppy.fileSizeBytes)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Pets in your Cart(cartTotal) </span>
      </div>
    </article>
  );
}

export default CartPage;
