import React from "react";
import secIcon from "../../assets/images/sec_icon.png";

export default function LearnAstrology() {
 // const topics = [
 //   "Vedic vs Western Astrology",
 //   "Planetary Influences",
  //  "Nakshatras Explained",
   // "Muhurta & Auspicious Timing",
  //]; 

  return (
    <section>
      <div className="learn_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Learn Astrology</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="banner_block pt-0 d-flex flex-wrap align-items-center">
            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Consultation{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box pr-2">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Personalized Reports{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Buy Full Reports{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Consultation{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Consultation{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box pr-2">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Personalized Reports{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Buy Full Reports{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    Consultation{" "}
                    <span className="d-block pe-md-4">
                      Your trusted partner in the world of astrology and related
                      services.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}