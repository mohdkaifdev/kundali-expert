import React from "react";
import checkIcon from "../../assets/images/check_icon.png"; // adjust path as needed


const AboutBannerSection = () => {
  return (
    <section>
      <div className="about_banner_section banner_space cd_section">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-8">
              <div className="cd_content">
                <div className="banner_heading d-flex align-items-center">
                  <h2>About KM Sinha</h2>
                </div>

                <div className="banner_listing d-flex">
                  <ul>
                    <li>
                      <img
                        src={checkIcon}
                        alt="icon"
                        className="img-fluid"
                      />{" "}
                      Expert Astrologers |
                    </li>
                    <li>
                      <img
                        src={checkIcon}
                        alt="icon"
                        className="img-fluid"
                      />{" "}
                      Personalized Solutions |
                    </li>
                    <li>
                      <img
                        src={checkIcon}
                        alt="icon"
                        className="img-fluid"
                      />
                      24/7 Support
                    </li>
                  </ul>

                  <div className="para_sec">
                    <p>
                      Understanding Kundali involves finding the Ascendant,
                      understanding the 12 houses representing different facets
                      of life, and noting the planetary positions in each house
                      to gain insights into one’s destiny and qualities of life
                    </p>
                  </div>
                </div>

                <div className="banner_btn mt-4">
                  <a href="#" className="site_btn">
                    CONSULT NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
