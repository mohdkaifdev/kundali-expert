import React from "react";
import checkIcon from "../../assets/images/check_icon.png";
import courseBanner from "../../assets/images/course_detail_banner.png";
import playIcon from "../../assets/images/course_detail_play.png";


const CourseBanner = () => {
  return (
    <section>
      <div className="course_detail_section banner_space light_bg">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-5">
              <div className="cd_content">
                <div className="banner_heading d-flex align-items-center">
                  <h2>Get Started With Advanced Astrology(Vedic)</h2>
                </div>
                <div className="banner_listing d-flex">
                  <ul>
                    <li>
                      <img src={checkIcon} alt="icon" className="img-fluid" /> Expert Astrologers |
                    </li>
                    <li>
                      <img src={checkIcon} alt="icon" className="img-fluid" /> Personalized Solutions |
                    </li>
                    <li>
                      <img src={checkIcon} alt="icon" className="img-fluid" /> 24/7 Support
                    </li>
                  </ul>
                  <div className="para_sec border-0">
                    <h3>
                      Purchase Course <span>₹17999</span>
                    </h3>
                  </div>
                </div>
                <div className="banner_btn pt-lg-3">
                  <a href="#" className="site_btn yellow_bg">
                    BUY REPORT
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="cd_img position-relative ps-lg-5">
                <img src={courseBanner} alt="img" className="w-100 br_20" />
                <div className="play_btn">
                  <a href="#">
                    <img src={playIcon} alt="icon" className="img-fluid" />
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

export default CourseBanner;
