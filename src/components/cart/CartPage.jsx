// src/components/cart/CartPage.jsx
import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import CartItem from './CartItem'
import AddressPopup from './AddressPopup'
import PaymentPopup from './PaymentPopup'
import { initialAddresses } from '../../data/cartData'

const CartPage = () => {
  const { cart, updateQty, removeItem, subtotal, discount, gst, total } = useCart()
  const [addresses, setAddresses] = useState(initialAddresses)
  const [selectedAddr, setSelectedAddr] = useState(0)
  const [showAddressPopup, setShowAddressPopup] = useState(false)
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)
  const [coupon, setCoupon] = useState('')

  const addAddress = (newAddr) => {
    setAddresses(prev => [...prev, newAddr])
  }

  return (
    <section>
      <div className="cd_inner_section space_sec b_space_top">
        <div className="container">
          <div className="heading_sec">
            <h3 className="mrn_clr">Your Cart</h3>
          </div>

          <div className="cart-container cart_block">
            {/* LEFT */}
            <div className="cart-left">
              <div id="product-list">
                {cart.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQty={updateQty}
                    onRemove={removeItem}
                  />
                ))}
              </div>

              <div className="apply-section">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                />
                <button className="site_btn">Apply Coupon</button>
              </div>

              <div className="wallet-section mt-0">
                <input type="checkbox" id="wallet" />
                <label htmlFor="wallet" className="gray_clr">Apply Wallet</label>
              </div>

              <div className="address-section mt-5">
                <div className="address-header">
                  <h4 className="mrn_clr">Delivery Address</h4>
                  <button
                    className="add-address-btn site_btn"
                    onClick={() => setShowAddressPopup(true)}
                  >
                    + Add Address
                  </button>
                </div>
                <div className="address-list">
                  {addresses.map((addr, i) => (
                    <div
                      key={i}
                      className={`address-card ${i === selectedAddr ? 'selected' : ''}`}
                      onClick={() => setSelectedAddr(i)}
                    >
                      {addr}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="cart-right">
              <h4 className="mrn_clr">Product Cost</h4>
              <div className="summary">
                <div><span>Price</span><span>₹{subtotal}</span></div>
                <div><span>Discount</span><span>- ₹{discount}</span></div>
                <div><span>GST (18%)</span><span>₹{gst}</span></div>
                <div className="total"><span>Total</span><span>₹{total}</span></div>
              </div>
              <button
                className="pay-btn site_btn"
                onClick={() => setShowPaymentPopup(true)}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POPUPS */}
      {showAddressPopup && (
        <AddressPopup
          onAddAddress={addAddress}
          onClose={() => setShowAddressPopup(false)}
        />
      )}
      {showPaymentPopup && (
        <PaymentPopup onClose={() => setShowPaymentPopup(false)} />
      )}
    </section>
  )
}

export default CartPage