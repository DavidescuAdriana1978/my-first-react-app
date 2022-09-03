import "./HomePage.css";
import { useEffect, useState } from "react";
import puppiesList from "../../data.json";
import { useCart } from "react-use-cart";

const HomePage = (props) => {
  const [productList, setProductList] = useState([]);
  const { puppy, onClickToCart } = props;

  useEffect(() => {}, []); // doar odata se executa

  return (
    <>
      <div className="product-list ">
        {puppiesList.map((puppy) => {
          return (
            <div className="product">
              <h1>{puppy.fileSizeBytes}</h1>
              <img src={puppy.url}></img>
              <div>
                <button
                  className="add btn btn-success"
                  onClick={(_event) => onClickToCart(puppy)}
                >
                  Add to Adopt
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
