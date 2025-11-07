import React from "react";
import { Link } from "react-router-dom";
import courseImg1 from "../../assets/images/course_detail_img1.png";
import courseImg2 from "../../assets/images/course_detail_img2.png";
import courseImg3 from "../../assets/images/course_detail_img3.png";
import courseImg4 from "../../assets/images/course_detail_img4.png";
import courseImg5 from "../../assets/images/course_detail_img5.png";

const AstrologyCourse = () => {
  return (
    <section>
      <div className="c_details_section c_list_section space_sec b_space_top">
        <div className="container">
          <div className="heading_sec mb-4 pb-lg-3">
            <h3 className="mrn_clr mb-0">Learn Astrology</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
                <Link to="/course-detail">
                  <img src={courseImg1} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Basic Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
               <Link to="/course-detail">
                  <img src={courseImg2} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Advance Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
                <Link to="/course-detail">
                  <img src={courseImg3} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Medical Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
                <Link to="/course-detail">
                  <img src={courseImg4} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Palmistry</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
                <Link to="/course-detail">
                  <img src={courseImg5} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Numerology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
                <Link to="/course-detail">
                  <img src={courseImg1} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Vaastu Course</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
               <Link to="/course-detail">
                  <img src={courseImg1} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Basic Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
               <Link to="/course-detail">
                  <img src={courseImg2} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Advance Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="astrologers_box p-0 overflow-hidden position-relative">
               <Link to="/course-detail">
                  <img src={courseImg3} alt="img" className="w-100 h-auto" />
                </Link>
                <div className="astrologers_caption">
                  <h4>Medical Astrology</h4>
                  <h5>
                    @INR 16999<span>+ GST Only</span>
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

export default AstrologyCourse;
