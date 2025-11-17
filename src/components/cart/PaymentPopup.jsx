// src/components/cart/PaymentPopup.jsx
import React, { useState } from 'react'

const PaymentPopup = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('cod')

  return (
    <div className="pay-popup" style={{ display: 'flex' }}>
      <div className="pay-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h4 className="mrn_clr">Select Payment Method</h4>

        <div className="tab-container mt-4">
          <ul>
            <li>
              <img src="/images/pay_icon.png" alt="icon" className="img-fluid" />
              <div
                className={`tab ${activeTab === 'razorpay' ? 'active' : ''}`}
                onClick={() => setActiveTab('razorpay')}
              >
                Pay by Razorpay
              </div>
            </li>
            <li>
              <img src="/images/cod_logo.png" alt="icon" className="img-fluid" />
              <div
                className={`tab ${activeTab === 'cod' ? 'active' : ''}`}
                onClick={() => setActiveTab('cod')}
              >
                Pay by COD
              </div>
            </li>
          </ul>
        </div>

        <div className="tab-content" style={{ display: activeTab === 'cod' ? 'block' : 'none' }}>
          Cash on Delivery selected.
        </div>
        <div className="tab-content" style={{ display: activeTab === 'razorpay' ? 'block' : 'none' }}>
          Proceeding to Razorpay checkout...
        </div>

        <button className="checkout-btn site_btn" onClick={() => alert('Checkout successful!')}>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default PaymentPopup