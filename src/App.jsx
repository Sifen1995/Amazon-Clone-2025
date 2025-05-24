import React from 'react';
import Home from './pages/home/Home';
import Carousele from './components/carousel/carousel';
import Category from './components/category/Category';
import Product from './components/product/Product';

export default function App() {
  return (
    <div>
       <Home/>
       <Carousele/>
        <Category/>
        <Product/>
    </div>
  )
}
