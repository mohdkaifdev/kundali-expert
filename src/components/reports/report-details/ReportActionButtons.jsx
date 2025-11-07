import React from 'react'
import { Link } from 'react-router-dom'

const ReportActionButtons = ({ sample, view, download }) => {
  return (
    <div className="cd_btns ps-lg-3">
      <ul>
        <li>
          <a href={download} className="site_btn red_bg w-100">
            DOWNLOAD REPORT
          </a>
        </li>
        <li>
          <a href={view} className="site_btn yellow_bg w-100">
            VIEW REPORT
          </a>
        </li>
        <li>
          <a href={sample} className="site_btn purple_bg w-100">
            DOWNLOAD SAMPLE REPORT
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ReportActionButtons