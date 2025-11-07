import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerImg from "../../assets/images/banner_img.png";
import secIcon from "../../assets/images/sec_icon.png";

const BannerSection = () => {
  return (
    <section>
      <div className="banner_section banner_space">
        <div className="container">
          {/* ✅ Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 20000, disableOnInteraction: true }}
           // pagination={{ clickable: true }}
            navigation={false}
            className="banner_slider"
          >
            <SwiperSlide>
              <div className="banner_slide">
                <img src={bannerImg} alt="banner" className="img-fluid w-100" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="banner_slide">
                <img src={bannerImg} alt="banner" className="img-fluid w-100" />
              </div>
            </SwiperSlide>

           
          </Swiper>

          {/* ✅ Banner Info Boxes */}
          <div className="banner_block d-flex align-items-center">
            <div className="banner_col">
              <div className="banner_box">
                <span>
                  <img
                    src={secIcon}
                    alt="icon"
                    className="img-fluid sec_icon"
                  />
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
                  <img
                    src={secIcon}
                    alt="icon"
                    className="img-fluid sec_icon"
                  />
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
                  <img
                    src={secIcon}
                    alt="icon"
                    className="img-fluid sec_icon"
                  />
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
                  <img
                    src={secIcon}
                    alt="icon"
                    className="img-fluid sec_icon"
                  />
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
};

export default BannerSection;
