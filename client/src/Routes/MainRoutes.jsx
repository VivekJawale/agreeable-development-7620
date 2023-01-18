import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Admin from '../Pages/Admin/Admin';
import Cart from '../Pages/Cart';
import Protiens from '../Pages/Product-Pages/Protiens';
import Wishlist from '../Pages/Wishlist';
import SingleProduct from "../Pages/SingleProduct";
// import Home from '../Pages/Home'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/products/protiens' element={<Protiens />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
