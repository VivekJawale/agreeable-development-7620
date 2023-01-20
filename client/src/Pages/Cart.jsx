import React from 'react'
import CartFooter from './cartPage/CartFooter'
import CartNavbar from './cartPage/CartPageNav'
import PageCart from './cartPage/PageCart'

export default function Cart() {
  return (
    <div>
          <CartNavbar />
          <PageCart/>
          <CartFooter/>
    </div>
  )
}
