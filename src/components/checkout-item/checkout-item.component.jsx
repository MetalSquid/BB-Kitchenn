import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.jsx";
import {
  ArrowDiv,
  CheckoutItemContainerDiv,
  ImageContainerDiv,
  NameSpan,
  QuantitySpan,
  RemoveButtonDiv,
  ValueSpan,
  PriceSpan,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainerDiv>
      <ImageContainerDiv>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainerDiv>
      <NameSpan> {name} </NameSpan>
      <QuantitySpan>
        <ArrowDiv onClick={removeItemHandler}>&#10094;</ArrowDiv>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowDiv onClick={addItemHandler}>&#10095;</ArrowDiv>
      </QuantitySpan>
      <PriceSpan> {price}</PriceSpan>
      <RemoveButtonDiv onClick={clearItemHandler}>&#10005;</RemoveButtonDiv>
    </CheckoutItemContainerDiv>
  );
};

export default CheckoutItem;
