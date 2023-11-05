import "./ProductCard.css";
import {BsFillCartPlusFill} from "react-icons/bs"
import { formatCurrency, saveLocalStorage } from '../utilidades/format';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProductCard = ({data}) => {
  const { title, thumbnail, price, id, quantity } = data;
  data.quantity = 1;

  const { cartItens, setCartItens } = useContext(AppContext);

  const handleAddItem = () => {
    const alreadyAdded = cartItens.find((item) => item.id === id);

    if(alreadyAdded) {
      alreadyAdded.quantity += 1;
      setCartItens([...cartItens]);
      saveLocalStorage("cart", [...cartItens]);
    } else {
      setCartItens([...cartItens, data]);
      saveLocalStorage("cart", [...cartItens, data]);
    } 
  } 

  return (
    <div className="product-card">
        <img 
            src={`${thumbnail.replace(/\w\.jpg/gi, "W.jpg")}`} //Qualquer letra que estiver seguida de um .jpg será trocada por W.jpg
            alt={"product-image-" + id} 
            className='card-image'
        />

        <div className="card-info">
            <h2 className='card-price'>{formatCurrency(price, 'BRL')}</h2>
            <h2 className="card-title">{title}</h2>
        </div>

        <button type="button" className='card-btn' onClick={handleAddItem}>
          <BsFillCartPlusFill/>
        </button>
    </div>
  )
}

export default ProductCard