import React, { useEffect, useState } from "react";
import consultationDetail from "../../data/consultationDetails";
import ConsultationDetailBanner from "../../components/consultation-details/ConsultationDetailBanner";
import ConsultationDetailTabs from "../../components/consultation-details/ConsultationDetailTabs";
import ReviewModal from "../../components/consultation-details/ReviewModal";
import { Helmet } from "react-helmet";
import api from "../../services/api";
import { useParams } from "react-router-dom";
const ConsultationDetailPage = () => {
  const { title, price, rating, totalReviews } = consultationDetail;
  const [data, setdata] = useState({});
  const { id } = useParams();

  const getdetail = async () => {
    const payload = {
      subUserId: 0,
    };
    const res = await api.post(`/consultationSession/get/${id}`, payload);

    if (res.status == 200) {
      setdata(res?.data);
    }
    console.log(res?.data?.consultationName);
  };

  useEffect(() => {
    getdetail();
  }, []);

  return (
    <>
      <Helmet>
        <title> by KM Sinha | Kundali Expert</title>
        <meta
          name="description"
          content={`Get ${title} with 20% OFF. Only @${price} + GST. Rated ${rating} by ${totalReviews} happy customers.`}
        />
        <meta property="og:title" content={`${title} - 20% OFF`} />
        <meta
          property="og:image"
          content="https://yoursite.com/images/cd_img.png"
        />
        <link
          rel="canonical"
          href="https://yoursite.com/consultation/full-analysis"
        />
      </Helmet>

      <ConsultationDetailBanner data={data} />

      <section>
        <div className="cd_inner_section space_sec pt-0">
          <div className="container">
            <div className="heading_sec">
              <h3 className="mrn_clr">{data?.consultationName}</h3>
              <div className="cd_inner d-flex align-items-end">
                <h5 className="mrn_clr mb-0">
                  <b>@{data?.planPrice}</b> + GST Only
                </h5>
                <div className="star d-flex align-items-center ms-3">
                  <span>
                    {(() => {
                      const rating = Number(data?.overallReview?.average || 0);
                      const rounded = Math.round(rating * 2) / 2; // round to nearest 0.5
                      const stars = [];

                      for (let i = 1; i <= 5; i++) {
                        if (i <= rounded) {
                          stars.push(
                            <i key={i} className="fa-solid fa-star"></i>,
                          );
                        } else if (i - 0.5 === rounded) {
                          stars.push(
                            <i
                              key={i}
                              className="fa-solid fa-star-half-stroke"
                            ></i>,
                          );
                        } else {
                          stars.push(
                            <i key={i} className="fa-regular fa-star"></i>,
                          );
                        }
                      }

                      return stars;
                    })()}
                  </span>
                  <h6 className="ms-1 me-2">
                    <span className="badge bg-success">
                      {data?.overallReview?.average.toFixed(1)}
                    </span>
                  </h6>
                </div>
                <a href="#" className="review">
                  <u>{data?.reviews?.length} reviews</u>
                </a>
              </div>
            </div>

            <ConsultationDetailTabs data={data}/>
            <ReviewModal/>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultationDetailPage;
