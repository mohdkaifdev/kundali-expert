import React, { useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true)
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export default function PaymentButton({ payload }) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handlePay = async () => {
    setLoading(true)
    const ok = await loadRazorpayScript()
    if (!ok) {
      alert('Unable to load payment SDK')
      setLoading(false)
      return
    }

    try {
      const res = await api.post('/v1/userConsultationMapper/create', payload)
      const data = res?.data?.data
      if (!data) throw new Error('Invalid order response')

      const order = data
      const amountInPaise = Math.round((order.amount || 0) * 100)

      const options = {
        key: order.secretId, // key_id returned by server
        amount: amountInPaise,
        currency: order.currency || 'INR',
        name: order.name || 'Kundali Expert',
        description: order.description || '',
        image: order.image || undefined,
        order_id: order.razorpayOrderId,
        handler: async function (response) {
          try {
            const verifyPayload = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingPayload: payload,
            }
            const verifyRes = await api.post('/v1/payments/verify-and-complete', verifyPayload)
            if (verifyRes?.data?.response?.responseCode === '200') {
              alert('Payment successful and booking completed')
              // optional: navigate to orders or booking page
              navigate('/')
            } else {
              alert('Payment verification failed on server')
            }
          } catch (err) {
            console.error('verification error', err)
            alert('Verification request failed')
          }
        },
        prefill: {
          name: order.userName || '',
          email: order.email || '',
          contact: order.phoneNumber || '',
        },
        notes: {
          calendarDate: payload.calendarDate,
          consultationSessionId: payload.consultationSessionId,
          subUserId: payload.subUserId,
        },
        theme: {
          color: order.color || '#3D021F',
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error(err)
      alert('Unable to start payment. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button className="site_btn" type="button" onClick={handlePay} disabled={loading}>
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  )
}
