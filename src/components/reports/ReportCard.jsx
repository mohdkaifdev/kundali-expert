import React from 'react'
import { Link } from 'react-router-dom'
import secIcon from "../../assets/images/sec_icon.png";
const ReportCard = React.memo(({ key, title, link }) => {
  return (
    <div className="banner_col">
      <Link to={`/full-reports-details/${key}`}>
        <div className="banner_box position-relative">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
})

export default ReportCard