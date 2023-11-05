import {AiOutlineShoppingCart} from "react-icons/ai"
import "./CartButton.css"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const CartButton = () => {
  const { cartItens, isCartOpen, setIsCartOpen} = useContext(AppContext);
  const openOrCloseCart = () => setIsCartOpen(!isCartOpen);
  
  return (
    <button className="cart-btn" onClick={openOrCloseCart}>
        <AiOutlineShoppingCart/>
        {/*cartItens.length > 0 ? (<span className="notification">{cartItens.length}</span>) : (null)*/}  
        {cartItens.length > 0 && (<span className="notification">{cartItens.length}</span>)}  
    </button>
  )
}

export default CartButton