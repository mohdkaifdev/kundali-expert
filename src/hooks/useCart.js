// src/hooks/useCart.js
import { useState } from 'react'
import { initialCart } from '../data/cartData'

export const useCart = () => {
  const [cart, setCart] = useState(initialCart)

  const updateQty = (id, change) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + change
            return newQty > 0 ? { ...item, qty: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const discount = 100
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal - discount + gst

  return { cart, updateQty, removeItem, subtotal, discount, gst, total }
}