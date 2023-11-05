import "./Header.css"
import SearchBar from "./SearchBar"
import CartButton from "./CartButton"

const Header = () => {

  return (
    <header className='header'>
        <div className="container">
            <SearchBar /> 
            <CartButton /> 
        </div>
    </header>
  )
}

export default Header