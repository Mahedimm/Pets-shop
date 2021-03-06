import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import FooterBanner from '../FooterBanner/FooterBanner';
import ProductsTab from '../ProductsTab/ProductsTab/ProductsTab';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider/Slider';

const Home = () => {
    return (
        <div>
        <Navigation/>
        <Slider/>
        <ProductsTab/>
        <Reviews/>
        <FooterBanner/>
        <Footer/>
        </div>
    );
};

export default Home;