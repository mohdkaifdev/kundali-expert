import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import call_icon from "../../assets/images/call_icon_white.png";
import chat_icon from "../../assets/images/chat_icon.png";
import api from "../../services/api";

export default function Astrologers() {
  const [call, setCall] = useState(true);
  const [astrologers, setAstrologers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAstrologers = async () => {
    setLoading(true);
    try {
      const response = await api.get("/astrologers/list");
      const data = response.data.data || [];
      console.log("API response is", data);
      setAstrologers(data);
    } catch (error) {
      console.error("Astrologer API error", error);
      toast.error("Failed to load astrologers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAstrologers();
  }, []);

  // Sirf 4 astrologers show karne ke liye slice kar do
  const displayedAstrologers = astrologers.slice(0, 4);

  return (
    <section>
      <div className="astrologers_section space_sec">
        <div className="container">
          <div className="heading_sec text-center mb-4 pb-lg-2">
            <h2 className="purple_clr">Our Astrologers</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="switches-container m-auto mt-0 mb-5">
            <div className="d-flex justify-content-start mb-5 mt-4">
              <div className="toggle-button">
                <button
                  className={`toggle-option ${call ? "active" : ""}`}
                  onClick={() => setCall(true)}
                >
                  Call With Astrologer
                </button>
                <button
                  className={`toggle-option ${!call ? "active" : ""}`}
                  onClick={() => setCall(false)}
                >
                  Chat With Astrologer
                </button>
                <div
                  className={`toggle-indicator ${call ? "left" : "right"}`}
                ></div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading astrologers...</p>
            </div>
          ) : displayedAstrologers.length === 0 ? (
            <div className="text-center py-5">
              <h5>No astrologers found</h5>
              <p>Please check back later</p>
            </div>
          ) : (
            <div className="astrologers_meet_cont">
              <div className="row">
                {displayedAstrologers.map((astro) => {
                  const imageUrl = astro.profile?.[0]
                    ? `https://api.kundaliexpert.com/kmAstroapp/api/v1/${astro.profile[0]}`
                    : "/default-astro.png";

                  return (
                    <div
                      key={astro.id || astro.astrologerName}
                      className="col-lg-3 col-md-6 mb-4"
                    >
                      <div className="astrologers_box pb-0">
                        <Link to="#">
                          <img
                            src={imageUrl}
                            alt={astro.astrologerName}
                            className="w-100"
                          />
                        </Link>
                        <div className="astrologers_caption">
                          <h6>{astro.astrologerName}</h6>
                          <div className="star d-flex align-items-center">
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <h6 className="ms-1">
                              <span className="badge bg-success">4.9</span>
                            </h6>
                          </div>
                          <div className="exp">
                            <p>
                              Exp. : {astro.experience} Years{" "}
                              <span className="d-block">
                                {astro.languages?.map((l) => l.name).join(", ")}
                              </span>
                            </p>
                          </div>
                          <p className="expertise">
                            <b>Expertise</b>{" "}
                            {astro.specializations
                              ?.map((s) => s.name)
                              .join(", ")}
                          </p>
                          <div className="astrologers_btn mt-3">
                            <Link to="#" className="site_btn">
                              <img
                                src={call ? call_icon : chat_icon}
                                alt="icon"
                                className="img-fluid"
                              />{" "}
                              {call ? "CALL NOW" : "CHAT NOW"}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <p className="more_astrologers text-center mt-4">
            <Link to="our-astrologers" className="site_btn">
              More Astrologers
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
