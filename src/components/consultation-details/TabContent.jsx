import React from 'react'

const TabContent = ({ content }) => {
  return (
    <div className="cd_tab_content">
      <div className="para_sec">
        <p>{content}</p>
      </div>
      <div className="banner_btn">
        <a href="#" className="site_btn">CONSULT NOW</a>
      </div>
    </div>
  )
}

export default TabContent