import React from 'react'
import CartFooter from './CartPage/CartFooter'
import CartNavbar from './CartPage/CartPageNav'
import PageCart from './CartPage/PageCart'

export default function Cart() {
  return (
    <div>
          <CartNavbar />
          <PageCart/>
          <CartFooter/>
    </div>
  )
}
