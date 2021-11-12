
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';
import ProductDetailsCard from './ProductDetailsCard';
const ProductDetails = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <Navigation/>
            <ProductDetailsCard product={product}/>
        </div>
    );
};

export default ProductDetails;