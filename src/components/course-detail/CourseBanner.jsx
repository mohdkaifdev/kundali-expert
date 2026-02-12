import React from "react";
import checkIcon from "../../assets/images/check_icon.png";
import courseDetailBanner from "../../assets/images/course_detail_banner.png";
import courseDetailPlay from "../../assets/images/course_detail_play.png";

const CourseBanner = ({ data, course, onPlayVideo }) => {
  return (
    <section>
      <div className="course_detail_section banner_space light_bg">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-5">
              <div className="cd_content">
                <div className="banner_heading">
                  <h2>{data?.courseTitle}</h2>
                </div>

                <div className="banner_listing d-flex">
                  <ul>
                    {course.features.map((feat, i) => (
                      <li key={i}>
                        <img src={checkIcon} alt="icon" /> {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="para_sec border-0">
                    <h3>
                      Purchase Course <span>₹{data?.price}</span>
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
                <img
                  src={courseDetailBanner}
                  alt="img"
                  className="w-100 br_20"
                />
                <div className="play_btn">
                  <a
                    role="button"
                    onClick={() =>
                      data?.introVideoLink &&
                      onPlayVideo(data.introVideoLink)
                    }
                  >
                    <img
                      src={courseDetailPlay}
                      alt="play"
                      className="img-fluid"
                    />
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
