import "./CartPage.css";
import puppiesList from "../../data.json";
import { Offcanvas, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

function CartPage(props) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
  } = useCart();

  const { puppy, onClickToCart, onClickToRemove } = props;

  return (
    <article>
      <h2>Adoption Cart</h2>
      {puppiesList.length === 0 && <div>Adoption cart is empty</div>}
      {puppiesList.map((puppy) => (
        <div className="cart_box" key={puppy.fileSizeBytes}>
          <div className="cart_img">
            <img src={puppy.url} style={{ height: "3rem" }} />
          </div>
          <div>
            <button onClick={() => onClickToCart(puppy, 1)}>+</button>

            <button onClick={() => onClickToCart(puppy, -1)}>-</button>
          </div>
          <div>
            <button onClick={() => onClickToRemove(puppy.fileSizeBytes)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Pets in your Cart({totalItems}) </span>
      </div>
    </article>
  );
}

export default CartPage;
