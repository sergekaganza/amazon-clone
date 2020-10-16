import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();

  console.log();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2020/FASHION/EDITORIAL/SAVAGEXFENTY/ENG/FENY_WebHeroBanner_UK3000x600.jpg"
        alt=""
      />
        <div className="checkout__show">
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket.To buy one or more items, click
                on "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping Basket</h2>
              {/* List out all the Checkout products */}
              {basket?.map((item) => {
                console.log(item);
                return (
                  <CheckoutProduct
                    style={{ width: "10%" }}
                    className="checkout__image"
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <h1>Subtotal</h1>
            <Subtotal />
          </div>
        )}
      </div>
  );
}

export default Checkout;
