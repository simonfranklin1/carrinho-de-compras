const fetchProducts = async(busca) => {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`);
    const data = await res.json();

    return data.results;
}

export default fetchProducts;