// src/components/cart/CartItem.jsx
import React from 'react'

const CartItem = ({ item, onUpdateQty, onRemove }) => {
  return (
    <div className="product-item">
      <img src={item.image} alt={item.name} />
      <div className="product-details">
        <h5 className="product-name mt-0">{item.name}</h5>
        <p className="gray_clr">₹{item.price}</p>
      </div>
      <div className="product-actions">
        <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>-</button>
        <span className="qty gray_clr fs-5">{item.qty}</span>
        <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
        <button className="remove-btn fs-5" onClick={() => onRemove(item.id)}>✖</button>
      </div>
    </div>
  )
}

export default CartItem