import "./cart-item.styles.jsx";
import {
  CartItemContainerDiv,
  ItemDetailsDiv,
  NameSpan,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainerDiv>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetailsDiv>
        <NameSpan>{name}</NameSpan>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsDiv>
    </CartItemContainerDiv>
  );
};

export default CartItem;
