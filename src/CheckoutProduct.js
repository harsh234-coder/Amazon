import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const RemoveFromBasket = () => {
    //Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt="" />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={RemoveFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
