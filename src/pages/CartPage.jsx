// src/pages/CartPage.jsx
import React from 'react'
import { Helmet } from 'react-helmet';
import CartPage from '../components/cart/CartPage'

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Your Cart - Kundali Expert</title>
        <meta name="description" content="Review your cart, apply coupon, choose address and pay securely." />
      </Helmet>
      <CartPage />
    </>
  )
}

export default Cart