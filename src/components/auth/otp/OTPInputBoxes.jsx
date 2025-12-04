import React, { useState, useRef, useEffect } from 'react'

const OTPInputBoxes = ({ onComplete }) => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputsRef = useRef([])

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 3) {
      inputsRef.current[index + 1].focus()
    }

    if (newOtp.every(digit => digit !== '')) {
      onComplete?.(newOtp.join(''))
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4)
    const newOtp = paste.padEnd(4, '').split('')
    setOtp(newOtp)
    inputsRef.current[Math.min(paste.length, 3)].focus()
    if (paste.length === 4) onComplete?.(paste)
  }

  return (
    <div className="form-group mb-4 d-flex justify-content-center gap-3">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          type="text"
          className="otp_box"
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          maxLength="1"
          ref={(el) => (inputsRef.current[index] = el)}
        />
      ))}
    </div>
  )
}

export default OTPInputBoxes