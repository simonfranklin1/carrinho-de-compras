import { useContext } from 'react';
import "./Cart.css";
import CartItem from './CartItem';
import { AppContext } from '../context/AppContext';
import { formatCurrency } from '../utilidades/format';

const Cart = () => {
  const { cartItens , isCartOpen } = useContext(AppContext);
  const totalPrice = cartItens.reduce((acc, item) => {
    return item.price * item.quantity + acc;
  }, 0);

  return (
    <section className={`cart ${ isCartOpen ? "cart-active" : ''}`}>
        <div className='cart-itens'>
            {cartItens && cartItens.map((item) => <CartItem key={item.id} data={item} ></CartItem>)}
        </div>
        <div className="cart-resume">
            {formatCurrency(totalPrice, 'BRL')}
        </div>
    </section>
  )
}

export default Cart