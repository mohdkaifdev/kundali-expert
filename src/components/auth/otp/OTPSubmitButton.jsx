import React from 'react'

const OTPSubmitButton = ({ loading, isValid }) => {
  return (
    <div className="login_btn">
      <button
        type="submit"
        className="site_btn purple_bg w-100"
        disabled={loading || !isValid}
      >
        {loading ? 'Verifying...' : 'VERIFY'}
      </button>
    </div>
  )
}

export default OTPSubmitButton