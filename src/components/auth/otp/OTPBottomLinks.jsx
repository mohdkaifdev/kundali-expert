import React from 'react'

const OTPBottomLinks = () => {
  return (
    <div className="para_sec">
      <p className="gray_clr">
        By using our services, You are agreeing to our{' '}
        <a href="#" className="text-decoration-underline">Terms and Conditions</a> and{' '}
        <a href="#" className="text-decoration-underline">Privacy Policy</a>.
      </p>
      <p className="mt-2">
        Already a user? <a href="/signin" className="mrn_clr fw-bold">Sign In</a>
      </p>
    </div>
  )
}

export default OTPBottomLinks