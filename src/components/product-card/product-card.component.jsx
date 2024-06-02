import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainerDiv,
  FooterDiv,
  NameSpan,
  PriceSpan,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainerDiv>
      <img src={imageUrl} alt={`${name}`} />
      <FooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </FooterDiv>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainerDiv>
  );
};

export default ProductCard;
