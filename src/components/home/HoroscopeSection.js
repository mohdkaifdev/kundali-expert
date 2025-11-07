import React from 'react';
import horoscopeIcon1 from "../../assets/images/horoscope_icon1.png";
import horoscopeIcon2 from "../../assets/images/horoscope_icon2.png";
import horoscopeIcon3 from "../../assets/images/horoscope_icon3.png";
import horoscopeIcon4 from "../../assets/images/horoscope_icon4.png";
import horoscopeIcon5 from "../../assets/images/horoscope_icon5.png";
import horoscopeIcon6 from "../../assets/images/horoscope_icon6.png";
import horoscopeIcon7 from "../../assets/images/horoscope_icon7.png";
import horoscopeIcon8 from "../../assets/images/horoscope_icon8.png";
import horoscopeIcon9 from "../../assets/images/horoscope_icon9.png";
import horoscopeIcon10 from "../../assets/images/horoscope_icon10.png";
import horoscopeIcon11 from "../../assets/images/horoscope_icon11.png";
import horoscopeIcon12 from "../../assets/images/horoscope_icon12.png";
// Import others

const HoroscopeSection = () => {
  return (
   <section>
      <div className="horoscope_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Today’s Horoscope</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="horoscope_block d-flex flex-wrap">
            <div className="horoscope_col">
              <div className="horoscope_box clr1 text-center">
                <span>
                  <img src={horoscopeIcon1} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr2 text-center">
                <span>
                  <img src={horoscopeIcon2} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr3 text-center">
                <span>
                  <img src={horoscopeIcon3} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr4 text-center">
                <span>
                  <img src={horoscopeIcon4} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr5 text-center">
                <span>
                  <img src={horoscopeIcon5} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr6 text-center">
                <span>
                  <img src={horoscopeIcon6} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr7 text-center">
                <span>
                  <img src={horoscopeIcon7} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr8 text-center">
                <span>
                  <img src={horoscopeIcon8} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr9 text-center">
                <span>
                  <img src={horoscopeIcon9} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr10 text-center">
                <span>
                  <img src={horoscopeIcon10} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr11 text-center">
                <span>
                  <img src={horoscopeIcon11} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>

            <div className="horoscope_col">
              <div className="horoscope_box clr12 text-center">
                <span>
                  <img src={horoscopeIcon12} alt="icon" className="img-fluid" />
                </span>
                <h4>Aries</h4>
                <p>Mar 21 - Apr 19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeSection;