import React from 'react'
import secIcon from '../../../assets/images/sec_icon.png';
import { Link } from 'react-router-dom'

const ReportCard = React.memo(({ title, link }) => {
  return (
    <div className="banner_col">
      <Link to={link}>
        <div className="banner_box position-relative">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>{title}</h5>
          </div>
          <div className="offer_box offer_box_light d-inline-flex align-items-center">
            <p>FREE SERVICE</p>
          </div>
        </div>
      </Link>
    </div>
  )
})

export default ReportCard