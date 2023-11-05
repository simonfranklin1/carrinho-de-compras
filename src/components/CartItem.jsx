import React, { useContext } from 'react';
import "./CartItem.css";
import {BsCartDashFill} from "react-icons/bs";
import {AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { formatCurrency, saveLocalStorage } from '../utilidades/format';
import { AppContext } from '../context/AppContext';

const CartItem = ({data}) => {
    const { id, thumbnail, title, price, quantity } = data;
    const { cartItens, setCartItens } = useContext(AppContext)
    const updatedItems = cartItens.filter((item) => item.id !== id);

    const handleRemoveItem = () => {
        setCartItens(updatedItems);
        saveLocalStorage("cart", updatedItems);
    }

    const incrementItem = () => {
        data.quantity += 1;
        setCartItens([...cartItens]);
        saveLocalStorage("cart", cartItens);   
    }

    const decrementItem = () => {
        if(data.quantity > 1) {
            data.quantity -= 1;
            setCartItens([...cartItens]);
            saveLocalStorage("cart", cartItens);   
        } else {
            handleRemoveItem();
        }   
    }
    
  return (
    <section className="cart-item">
        <img 
            src={thumbnail} 
            alt={"imagem do produto" + id} 
            className='cart-item-image' 
        />
        <div className='cart-item-info'>
            <h3 className='cart-item-title'>{title}</h3>
            <h3 className='cart-item-price'>{formatCurrency(price, 'BRL')}</h3>
            <button 
                type='button' 
                className="remove-item"
                onClick={handleRemoveItem}
            >
                <BsCartDashFill/>
            </button>
            
            <div className="quantity">
                <button className="btn-quantity" onClick={decrementItem}>
                    <AiOutlineMinus className='svg' />
                </button>

                {quantity}

                <button className="btn-quantity" onClick={incrementItem}>
                    <AiOutlinePlus className='svg' />
                </button>
            </div>
        </div>
    </section>
  )
}

export default CartItem