import React, { useContext } from 'react'
import "./Products.css"
import { useEffect } from 'react'
import fetchProducts from "../api/fetchProducts";
import ProductCard from './ProductCard';
import Loading from './Loading';
import { AppContext } from '../context/AppContext';

const Products = () => {
    const {products, setProducts, loading, setLoading} = useContext(AppContext)

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false);
        }) 
    }, []);// Array vazio para a função executar apenas uma vez, se tiver uma variável ele vai executar toda vez que houver uma alteração nela

  return (
    (loading && <Loading />) || (
        <section className="products container">
            {products && products.map((product) => <ProductCard key={product.id} data={{ title: product.title, thumbnail: product.thumbnail, price: product.price, id: product.id }}/> )}
        </section>
    )
  )
}

export default Products