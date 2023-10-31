import React from 'react';
import '../CSS/style.css';
import '../../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header.js' 
import Footer from './Footer';
import Banner from './Banner';
import Discover from './Discover';
import ProductList from './ProductList';


function Main() {
  return (
    <div>
          <Header></Header>
          <Banner></Banner>
          <Discover></Discover>
          <ProductList></ProductList>
          <Footer></Footer>
    </div>
  )
}

export default Main
