import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainerDiv, CheckoutHeaderDiv, HeaderBlockDiv, TotalDiv } from './checkout.styles';


const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainerDiv>
      <CheckoutHeaderDiv>
        <HeaderBlockDiv>
          <span>Product</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Description</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Quantity</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Price</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Remove</span>
        </HeaderBlockDiv>
      </CheckoutHeaderDiv>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalDiv>TOTAL: ${cartTotal}</TotalDiv>
    </CheckoutContainerDiv>
  );
};

export default Checkout;
