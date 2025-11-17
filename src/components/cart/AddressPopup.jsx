// src/components/cart/AddressPopup.jsx
import React, { useState } from 'react'

const AddressPopup = ({ onAddAddress, onClose }) => {
  const [form, setForm] = useState({
    name: '', phone: '', address: '', city: '', state: '', pincode: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAddr = `${form.name}: ${form.address}, ${form.city}`
    onAddAddress(newAddr)
    onClose()
  }

  return (
    <div className="popup" style={{ display: 'flex' }}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h4 className="mrn_clr mb-4">Add New Address</h4>
        <form onSubmit={handleSubmit}>
          {['name', 'phone', 'address', 'city', 'state', 'pincode'].map(field => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={e => setForm({ ...form, [field]: e.target.value })}
              required
              style={{ width: '100%', marginBottom: '12px' }}
            />
          ))}
          <label className="default_label">
            <input type="checkbox" defaultChecked /> Set as default
          </label><br/><br/>
          <button type="submit" className="add-address-btn site_btn">
            Save Address
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddressPopup