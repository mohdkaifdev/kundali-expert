import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// ✅ Import all images
import checkIcon from "../../assets/images/check_icon.png";
import courseDetailBanner from "../../assets/images/course_detail_banner.png";
import coursePlay from "../../assets/images/course_detail_play.png";
import courseImg1 from "../../assets/images/course_detail_img1.png";
import courseImg2 from "../../assets/images/course_detail_img2.png";
import courseImg3 from "../../assets/images/course_detail_img3.png";
import courseImg4 from "../../assets/images/course_detail_img4.png";
import courseImg5 from "../../assets/images/course_detail_img5.png";

const CourseIntro = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='video']", {});
    return () => Fancybox.destroy();
  }, []);

  return (
    <>
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
                  <img
                    src={courseDetailBanner}
                    alt="img"
                    className="w-100 br_20"
                  />
                  <div className="play_btn">
                    <a
                      href="https://youtu.be/W4tp7E61ea8"
                      data-fancybox="video"
                    >
                      <img
                        src={coursePlay}
                        alt="icon"
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

      <section>
        <div className="c_details_section space_sec">
          <div className="container">
            <div className="heading_sec mb-4 pb-lg-3">
              <h3 className="mrn_clr mb-0">Introducing</h3>
            </div>
            <div className="row">
              {/* ✅ Each astrologers_box */}
              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg1} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a
                        href="https://youtu.be/W4tp7E61ea8"
                        data-fancybox="video"
                      >
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light d-inline-flex align-items-center">
                    <h5>Free</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>Introduction</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg2} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a
                        href="https://youtu.be/W4tp7E61ea8"
                        data-fancybox="video"
                      >
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light offer_box_blue d-inline-flex align-items-center">
                    <h5>Paid</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>
                      Calculation of Shadbal Bhavbal and its importance
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg3} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a href="#">
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light d-inline-flex align-items-center">
                    <h5>Free</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>Calculation of Uccha Bal & its application</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg4} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a href="#">
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light offer_box_blue d-inline-flex align-items-center">
                    <h5>Paid</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>Calculation of Oja-Yugma Bal & its application</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg1} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a href="#">
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light d-inline-flex align-items-center">
                    <h5>Free</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>Calculation of Drekanna Bal & its application</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="astrologers_box p-0 overflow-hidden position-relative">
                  <div className="video_box position-relative">
                    <img src={courseImg5} alt="img" className="w-100 h-auto" />
                    <div className="play_btn">
                      <a href="#">
                        <img
                          src={coursePlay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="offer_box offer_box_light offer_box_blue d-inline-flex align-items-center">
                    <h5>Paid</h5>
                  </div>
                  <div className="astrologers_caption">
                    <h4>Calculation of Kendra Bal & its application</h4>
                  </div>
                </div>
              </div>

              {/* ✅ You can continue the same pattern for remaining boxes if needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseIntro;
