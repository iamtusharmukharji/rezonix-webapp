import React from 'react';
import Header from './header';
import ProductCarousel from './ProductCarousel';
import Testimonial from './testimonial';
import Content from './content';
import Footer from './footer';


function Index() {
  return (
    <>
      <Header/>
        <ProductCarousel />
        <Content />
        <Testimonial/>
      <Footer />
    </>   
  );
}

export default Index