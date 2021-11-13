
import React, { useEffect } from 'react';

const useProducts = () => {
    const [cartProduct,setCartProduct] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    useEffect(()=>{
        fetch('https://glacial-depths-55113.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return {products,cartProduct,setCartProduct};
};

export default useProducts;