import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import { useEffect, useState } from "react";
import listPuppies from "./data.json";

const cart = [
  {
    fileSizeBytes: 3195141,
    url: "https://random.dog/a5a74f22-889e-42d5-8994-c3c3e499a5ca.jpg",
  },
];

function App(props) {
  // aici tinem statul cu itemsCount
  const [items, itemsCount] = useState([]);
  const { puppies } = listPuppies;

  const onClickToCart = function (addedProduct) {
    console.log("Adopted = ", addedProduct);
    const existProduct = cart.find((cartProduct) => {
      return cartProduct.url === addedProduct.url;
    });
    if (existProduct) {
      itemsCount(
        items.map((x) =>
          cartProduct.url === addedProduct.url
            ? { ...existProduct, qty: existProduct.qty + 1 }
            : cartProduct
        )
      );
    } else {
      itemsCount([...items, { ...addedProduct, qty: 1 }]);
    }
  };

  const onClickToRemove = function (addedProduct) {
    console.log("Adopted = ", addedProduct);
    const existProduct = cart.find((cartProduct) => {
      cartProduct.url === addedProduct.url;
    });
    if (existProduct === 1) {
      itemsCount(
        items.filter((cartProduct) => cartProduct.url !== addedProduct.url)
      );
    } else {
      itemsCount(
        items.map((x) =>
          cartProduct.url === addedProduct.url
            ? { ...existProduct, qty: existProduct.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Layout itemsCount={items.length}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<div>Not Found!</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
