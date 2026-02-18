import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SlotPickerModal.css'

const LoginPromptModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  if (!isOpen) return null
  return (
    <div className="spm_overlay" onClick={onClose}>
      <div className="spm_modal" onClick={(e) => e.stopPropagation()}>
        <div className="spm_header">
          <div className="spm_month_title">Please sign in</div>
          <button className="spm_close_x" onClick={onClose}>✕</button>
        </div>
        <div style={{padding:12}}>
          <p>You must be logged in to book a consultation.</p>
          <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}>
            <button className="spm_close" onClick={onClose}>Cancel</button>
            <button className="spm_nav" onClick={() => { onClose && onClose(); navigate('/login') }}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPromptModal
