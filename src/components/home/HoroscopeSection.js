import React from "react";
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
import { Link } from "react-router-dom";
// Import others

const HoroscopeSection = () => {
  const horoscopeList = [
    { id: 1, name: "Aries", image: horoscopeIcon1, color: "clr1" },
    { id: 2, name: "Taurus", image: horoscopeIcon2, color: "clr2" },
    { id: 3, name: "Gemini", image: horoscopeIcon3, color: "clr3" },
    { id: 4, name: "Cancer", image: horoscopeIcon4, color: "clr4" },
    { id: 5, name: "Leo", image: horoscopeIcon5, color: "clr5" },
    { id: 6, name: "Virgo", image: horoscopeIcon6, color: "clr6" },
    { id: 7, name: "Libra", image: horoscopeIcon7, color: "clr7" },
    { id: 8, name: "Scorpio", image: horoscopeIcon8, color: "clr8" },
    { id: 9, name: "Sagittarius", image: horoscopeIcon9, color: "clr9" },
    { id: 10, name: "Capricorn", image: horoscopeIcon10, color: "clr10" },
    { id: 11, name: "Aquarius", image: horoscopeIcon11, color: "clr11" },
    { id: 12, name: "Pisces", image: horoscopeIcon12, color: "clr12" },
  ];

  return (
    <section id="horoscope">
      <div className="horoscope_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Today’s Horoscope</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="horoscope_block d-flex flex-wrap">
            {horoscopeList.map((item) => (
              <div className="horoscope_col" key={item.id}>
                <Link to={`/horoscope/${item.name.toLowerCase()}`}>
                  <div className={`horoscope_box ${item.color} text-center`}>
                    <span>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </span>
                    <h4>{item.name}</h4>
                    {/* <p>Mar 21 - Apr 19</p> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoroscopeSection;
