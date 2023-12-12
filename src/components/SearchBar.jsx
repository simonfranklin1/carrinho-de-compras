import { BsSearch } from "react-icons/bs";
import './SearchBar.css';
import { useContext, useState } from 'react';
import fetchProducts from "../api/fetchProducts";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
    const [ search, setSearch ] = useState();
    const { setProducts, setLoading } = useContext(AppContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);

        const products = await fetchProducts(search);
        setProducts(products);
        setLoading(false);
        setSearch('');
    }

    return (
        <form className='search-bar' onSubmit={handleSearch} >
            <input 
                type="search" 
                placeholder='Buscar produto'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='search-input'
                required 
            />
            <button type="submit" className='search-btn'>
                <BsSearch />
            </button>
        </form>
    )
}

export default SearchBar