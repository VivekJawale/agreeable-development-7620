import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Address from './addressPage/Address';
import CartFooter from './CartPage/CartFooter'
import CartNavbar from './CartPage/CartPageNav'
import PageCart from './CartPage/PageCart'

export default function Cart() {
  const { onCart, onAdd } = useSelector((b) => { return { onCart: b.cartReducer.onCart, onAdd: b.cartReducer.onAdd } }, shallowEqual);
  return (
    <div>
      <CartNavbar />
      {onCart ? <Address/>:<PageCart />}
          {/* <PageCart/> */}
          <CartFooter/>
    </div>
  )
}
