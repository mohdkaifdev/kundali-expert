import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import ConsultationDetailBanner from "../components/pujadetail/ConsultationDetailBanner";
import ConsultationDetailTabs from "../components/pujadetail/ConsultationDetailTabs";
import ReviewModal from "../components/pujadetail/ReviewModal";

import api from "../services/api";

const Puja = () => {
  const { id } = useParams();

  // ✅ FIX: should be object, not array
  const [pulicationdata, setpoojadata] = useState(null);

  // Static fallback data (SEO + rating)
  const consultationDetail = {
    title: "Full Analysis",
    price: "6018",
    rating: 4.9,
    totalReviews: 12,
  };

  const { title, price, rating, totalReviews } = consultationDetail;

  // ✅ API CALL
  const getlist = async () => {
    try {
      const res = await api.get(`/pooja/get/${id}`);
      console.log("API RESPONSE:", res.data);

      // adjust if API response structure differs
      setpoojadata(res.data?.data || res.data);
    } catch (error) {
      console.error("API ERROR:", error);
    }
  };

  // ✅ FIX: add id dependency
  useEffect(() => {
    if (id) {
      getlist();
    }
  }, [id]);

  // ✅ Prevent render before data load
  if (!pulicationdata) {
    return (
      <div className="text-center py-5">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{pulicationdata?.poojaName || title} | Kundali Expert</title>
        <meta
          name="description"
          content={`Get ${pulicationdata?.poojaName || title} @ ₹${pulicationdata?.planPrice || price} + GST. Rated ${rating} by ${totalReviews} users.`}
        />
        <meta
          property="og:title"
          content={pulicationdata?.poojaName || title}
        />
        <meta
          property="og:image"
          content={
            pulicationdata?.imageLink?.[0]
              ? `https://api.kundaliexpert.com/kmAstroapp/api/v1/${pulicationdata.imageLink[0]}`
              : ""
          }
        />
      </Helmet>

      {/* Banner */}
      <ConsultationDetailBanner data={pulicationdata?.imageLink} />

      <section>
        <div className="cd_inner_section space_sec pt-0">
          <div className="container">
            {/* Heading */}
            <div className="heading_sec">
              <h3 className="mrn_clr">{pulicationdata?.poojaName}</h3>

              <div className="cd_inner d-flex align-items-end flex-wrap">
                <h5 className="mrn_clr mb-0">
                  <b>@{pulicationdata?.planPrice}</b> + GST Only
                </h5>

                <div className="star d-flex align-items-center ms-3">
                  <span>
                    {[...Array(pulicationdata?.overallReview?.average)].map(
                      (_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ),
                    )}
                  </span>
                  <h6 className="ms-1 me-2">
                    <span className="badge bg-success">
                      {pulicationdata?.overallReview?.average > 0 && (
                        <span className="badge bg-success">
                          {pulicationdata.overallReview.average}
                        </span>
                      )}
                    </span>
                  </h6>
                </div>

                {pulicationdata?.reviews?.length > 0 && (
  <a href="#reviews" className="review">
    <u>{pulicationdata.reviews.length} reviews</u>
  </a>
)}
              </div>
            </div>

            {/* Tabs */}
            <ConsultationDetailTabs data={pulicationdata} />
            {/* Review Modal */}
            <ReviewModal />
          </div>
        </div>
      </section>
    </>
  );
};

export default Puja;
