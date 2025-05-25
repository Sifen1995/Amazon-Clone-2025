import React from 'react';
import Home from './pages/home/Home';
import Signup from './pages/auth/Signup';
import Cart from './pages/cart/cart';
import Payment from './pages/payment/Payment';
import Orders from './pages/orders/Orders';
import Result from './pages/results/Result';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/auth' element={<Signup/>}/>
        <Route path='/orders' element={<Orders/>}/>
         <Route path='/category/:categoryName' element={<Result/>}/>
      </Routes>
    </Router>
  )
}
