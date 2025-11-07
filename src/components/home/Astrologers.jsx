import React, { useState } from "react";
import bi_img1 from "../../assets/images/bi_img1.png";
import bi_img2 from "../../assets/images/bi_img2.png";
import bi_img3 from "../../assets/images/bi_img3.png";
import call_icon_white from "../../assets/images/call_icon_white.png";
import chat_icon from "../../assets/images/chat_icon.png";

export default function Astrologers() {
  const [activeSwitch, setActiveSwitch] = useState("Monthly");

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

          {/* Switch */}
          <div className="switches-container m-auto mt-0 mb-5">
            <input
              type="radio"
              id="switchMonthly"
              name="switchPlan"
              value="Monthly"
              checked={activeSwitch === "Monthly"}
              onChange={() => setActiveSwitch("Monthly")}
            />
            <input
              type="radio"
              id="switchYearly"
              name="switchPlan"
              value="Yearly"
              checked={activeSwitch === "Yearly"}
              onChange={() => setActiveSwitch("Yearly")}
            />

            <label htmlFor="switchMonthly" id="call">
              Call With Astrologer
            </label>
            <label htmlFor="switchYearly" id="chat">
              Chat With Astrologer
            </label>

            <div className="switch-wrapper">
              <div className="switch">
                <div>Call With Astrologer</div>
                <div>Chat With Astrologer</div>
              </div>
            </div>
          </div>

          {/* Astrologers List */}
          <div className="astrologers_meet_cont">
            {/* Call With Astrologer Section */}
            {activeSwitch === "Monthly" && (
              <div className="row active switchMonthly">
                {[bi_img1, bi_img2, bi_img3, bi_img1].map((img, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="astrologers_box">
                      <a href="#">
                        <img src={img} alt="img" className="w-100" />
                      </a>
                      <div className="astrologers_caption">
                        <h6>Name goes here</h6>
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
                            Exp. : 15 Years{" "}
                            <span className="d-block">
                              Hindi, English, Marathi
                            </span>
                          </p>
                        </div>
                        <p className="expertise">
                          <b>Expertise</b> Career, Vedic Astrology, Match
                          Making,
                          <br />
                          and Vaastu, Gemstones and Hastharekha
                        </p>
                        <div className="astrologers_btn mt-3">
                          <a href="#" className="site_btn">
                            <img
                              src={call_icon_white}
                              alt="icon"
                              className="img-fluid"
                            />{" "}
                            CALL NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chat With Astrologer Section */}
            {activeSwitch === "Yearly" && (
              <div className="row switchYearly">
                {[bi_img1, bi_img2, bi_img3, bi_img1].map((img, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="astrologers_box pb-0 mb-3">
                      <a href="#">
                        <img src={img} alt="img" className="w-100" />
                      </a>
                      <div className="astrologers_caption">
                        <h6>Name goes here</h6>
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
                            Exp. : 15 Years{" "}
                            <span className="d-block">
                              Hindi, English, Marathi
                            </span>
                          </p>
                        </div>
                        <p className="expertise">
                          <b>Expertise</b> Career, Vedic Astrology, Match
                          Making,
                          <br />
                          and Vaastu, Gemstones and Hastharekha
                        </p>
                        <div className="astrologers_btn astrologers_btns mt-3">
                          <a href="#" className="site_btn">
                            <img
                              src={chat_icon}
                              alt="icon"
                              className="img-fluid"
                            />{" "}
                            CHAT NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="more_astrologers">
            <a href="our_astrologers.php" className="site_btn">
              More Astrologers
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
