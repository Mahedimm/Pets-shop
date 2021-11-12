
import React, { useEffect } from 'react';

const useProducts = () => {
    const [cartProduct,setCartProduct] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return {products,cartProduct,setCartProduct};
};

export default useProducts;