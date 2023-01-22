import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Address from './addressPage/Address';
import CartFooter from './CartPage/CartFooter'
import CartNavbar from './CartPage/CartPageNav'
import PageCart from './CartPage/PageCart'
import { store } from '../Redux/store';

export default function Cart() {

  const cartData = useSelector((store) => store.CartReducer);
  console.log(store.getState())
  return (
    <div>
      <CartNavbar />
      <PageCart props={cartData} />



      <CartFooter />
    </div>
  )
}
