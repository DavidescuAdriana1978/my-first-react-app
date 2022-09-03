import "./Layout.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout(props) {
  const { items, itemsCount, onClickToCart } = props;
  const [productList, setProductList] = useState([]);

  return (
    <div className="layout">
      <header>
        <h1>My Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home {() => onClickToCart(puppies)}
                {props.puppies}
              </Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link to="/cart">
                Cart ({() => onClickToCart(productList)}
                {props.itemsCount})
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="app-main-content">{props.children}</main>
    </div>
  );
}
export default Layout;
