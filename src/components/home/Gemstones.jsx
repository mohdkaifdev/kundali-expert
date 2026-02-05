import React from "react";
import biImg1 from "../../assets/images/bi_img1.png";
import biImg2 from "../../assets/images/bi_img2.png";
import biImg3 from "../../assets/images/bi_img3.png";

export default function Gemstones() {
 
  return (
    <section id="shop-section">
      <div className="gemstones_section space_sec">
        <div className="container">
          <div className="heading_sec text-center" >
            <h2 className="purple_clr">Gemstones</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="astrologers_box">
                <a href="#">
                  <img src={biImg1} alt="img" className="w-100" />
                </a>
                <div className="astrologers_caption">
                  <div className="star d-flex align-items-center mb-2">
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
                  <h6>
                    Natural Yellow Sapphire Corundum Weight 4.05Ct Kundali
                    Expert
                  </h6>
                  <h5 className="del_sec">
                    <del>₹82775</del> ₹62775
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="astrologers_box">
                <a href="#">
                  <img src={biImg2} alt="img" className="w-100" />
                </a>
                <div className="astrologers_caption">
                  <div className="star d-flex align-items-center mb-2">
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
                  <h6>
                    Natural Yellow Sapphire Corundum Weight 4.05Ct Kundali
                    Expert
                  </h6>
                  <h5 className="del_sec">
                    <del>₹82775</del> ₹62775
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="astrologers_box">
                <a href="#">
                  <img src={biImg3} alt="img" className="w-100" />
                </a>
                <div className="astrologers_caption">
                  <div className="star d-flex align-items-center mb-2">
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
                  <h6>
                    Natural Yellow Sapphire Corundum Weight 4.05Ct Kundali
                    Expert
                  </h6>
                  <h5 className="del_sec">
                    <del>₹82775</del> ₹62775
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="astrologers_box">
                <a href="#">
                  <img src={biImg1} alt="img" className="w-100" />
                </a>
                <div className="astrologers_caption">
                  <div className="star d-flex align-items-center mb-2">
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
                  <h6>
                    Natural Yellow Sapphire Corundum Weight 4.05Ct Kundali
                    Expert
                  </h6>
                  <h5 className="del_sec">
                    <del>₹82775</del> ₹62775
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