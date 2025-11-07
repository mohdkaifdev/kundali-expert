import React from "react";
import consultationDetail from "../../data/consultationDetails";
import ConsultationDetailBanner from "../../components/consultation/ConsultationDetailBanner";
import ConsultationDetailTabs from "../../components/consultation/ConsultationDetailTabs";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const ConsultationDetails = () =>{
   const { title, price, rating, reviews } = consultationDetail
    return(
        <>
        <Helmet>
            <title>{title} by KM Sinha | Kundali Expert</title>
            <meta name="description" content={`Get ${title} with 20% OFF. Only @${price} + GST. Rated ${rating} by ${reviews} happy customers.`} />
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
                                        <i key={i} classNameName="fa-solid fa-star"></i>
                                    ))}
                                </span>
                                <h6 className="ms-1 me-2"><span className="badge bg-success">{rating}</span></h6>
                            </div>
                            <Link to="#" className="review"><u>{reviews} reviews</u></Link>
                        </div>
                    </div>
                    <ConsultationDetailTabs/>
                </div>
            </div>
        </section>

        </>
    );
}
export default ConsultationDetails;