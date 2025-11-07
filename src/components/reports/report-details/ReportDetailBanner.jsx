import React from 'react'
import reportDetail from '../../../data/fullReportDetails'
import secIcon from "../../../assets/images/check_icon.png";
import cdImg from "../../../assets/images/cd_img.png";
const ReportDetailBanner = () => {
  const { title, offer, features, shortDescription } = reportDetail

  return (
    <section>
      <div className="banner_inner_section banner_space cd_section">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-8">
              <div className="cd_content">
                <div className="offer_box d-inline-flex align-items-center">
                  <span className="badge bg-success">{offer}</span>
                  <b>Avail Offer</b>
                  <div className="block"></div>
                </div>

                <div className="banner_heading d-flex align-items-center">
                  <h2>{title}</h2>
                </div>

                <div className="banner_listing d-flex">
                  <ul>
                    {features.map((feat, i) => (
                      <li key={i}>
                        <img src={secIcon} alt="icon" className="img-fluid" />
                        {feat} {i < features.length - 1 && "|"}
                      </li>
                    ))}
                  </ul>
                  <div className="para_sec">
                    <p>{shortDescription}</p>
                  </div>
                </div>

                <div className="banner_btn">
                  <a href="#" className="site_btn">CONSULT NOW</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cd_img">
                <img src={cdImg} alt={title} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportDetailBanner