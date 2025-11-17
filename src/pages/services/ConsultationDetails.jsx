import React from "react";
import consultationDetail from "../../data/consultationDetails";
import ConsultationDetailBanner from "../../components/consultation-details/ConsultationDetailBanner";
import ConsultationDetailTabs from "../../components/consultation-details/ConsultationDetailTabs";
import ReviewModal from "../../components/consultation-details/ReviewModal"
import { Helmet } from "react-helmet";

const ConsultationDetailPage = () => {
  const { title, price, rating, totalReviews } = consultationDetail

  return (
    <>
      <Helmet>
        <title>{title} by KM Sinha | Kundali Expert</title>
        <meta name="description" content={`Get ${title} with 20% OFF. Only @${price} + GST. Rated ${rating} by ${totalReviews} happy customers.`} />
        <meta property="og:title" content={`${title} - 20% OFF`} />
        <meta property="og:image" content="https://yoursite.com/images/cd_img.png" />
        <link rel="canonical" href="https://yoursite.com/consultation/full-analysis" />
      </Helmet>

      <ConsultationDetailBanner />

      <section>
        <div className="cd_inner_section space_sec pt-0">
          <div className="container">
            <div className="heading_sec">
              <h3 className="mrn_clr">{title}</h3>
              <div className="cd_inner d-flex align-items-end">
                <h5 className="mrn_clr mb-0"><b>@{price}</b> + GST Only</h5>
                <div className="star d-flex align-items-center ms-3">
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </span>
                  <h6 className="ms-1 me-2">
                    <span className="badge bg-success">{rating}</span>
                  </h6>
                </div>
                <a href="#" className="review"><u>{totalReviews} reviews</u></a>
              </div>
            </div>

            <ConsultationDetailTabs />
            <ReviewModal />
          </div>
        </div>
      </section>
    </>
  )
}

export default ConsultationDetailPage