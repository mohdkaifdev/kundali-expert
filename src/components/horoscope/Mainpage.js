import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import AnalogClock from "./AnalogClock";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useRef } from "react";
function Mainpage() {
  const [datashow, setdata] = useState({
    data: "No Data Avilable"
  });
  const [userday, setday] = useState(1);
  const [rashiid, setrashiid] = useState(null);
  const [activeSign, setActiveSign] = useState("");
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const { id } = useParams(); // aries, taurus etc

  // 🔹 Zodiac list
  const rahilist = [
    { id: "1", name: "Aries", image: horoscopeIcon1, color: "clr1" },
    { id: "2", name: "Taurus", image: horoscopeIcon2, color: "clr2" },
    { id: "3", name: "Gemini", image: horoscopeIcon3, color: "clr3" },
    { id: "4", name: "Cancer", image: horoscopeIcon4, color: "clr4" },
    { id: "5", name: "Leo", image: horoscopeIcon5, color: "clr5" },
    { id: "6", name: "Virgo", image: horoscopeIcon6, color: "clr6" },
    { id: "7", name: "Libra", image: horoscopeIcon7, color: "clr7" },
    { id: "8", name: "Scorpio", image: horoscopeIcon8, color: "clr8" },
    { id: "9", name: "Sagittarius", image: horoscopeIcon9, color: "clr9" },
    { id: "10", name: "Capricorn", image: horoscopeIcon10, color: "clr10" },
    { id: "11", name: "Aquarius", image: horoscopeIcon11, color: "clr11" },
    { id: "12", name: "Pisces", image: horoscopeIcon12, color: "clr12" },
  ];

  // 🔹 Sync URL param → active sign
  useEffect(() => {
    if (!id) return;

    const found = rahilist.find(
      item => item.name.toLowerCase() === id
    );

    if (found) {
      setrashiid(found.id);
      setActiveSign(found.name);
    }
  }, [id]);

  // 🔹 Fetch horoscope
  const gethorescope = async () => {
    let url;

    if (userday === 1) {
      url = `/dailyHoroscope/getDailyHoroscope?rashiId=${rashiid}&languageId=1`;
    } else if (userday === 2) {
      url = `/v1/horoscope/getGeneralHoroscope?langId=1&rashiId=${rashiid}&horoscopeTypeId=2`;
    } else {
      url = `/v1/horoscope/getGeneralHoroscope?langId=1&rashiId=${rashiid}&horoscopeTypeId=3`;
    }

    try {
      const res = await api.get(url);
      console.log(res);
      if(userday === 1){
        setdata({
            data: res?.data?.data?.horoscopeDescription
        })
      }
      else{
         setdata({
            data: res?.data,
        })
      }
      
      console.log(res?.data?.data?.horoscopeDescription);
    } catch (err) {
      console.error(err);
    }
  };
const today = new Date();
const showdate = String(today.getDate()).padStart(2, "0") + "/" +
  String(today.getMonth() + 1).padStart(2, "0") + "/" +
  today.getFullYear()

  useEffect(() => {
    if (!rashiid) return;
    gethorescope();
  }, [userday, rashiid]);

  return (
    <section className="pt-5">
      <div className="bi_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Today's Horoscope</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="horescopetab shadow-sm p-3 mb-5 bg-body-tertiary rounded">

                {/* Tabs */}
                <ul className="nav nav-pills" onClick={scrollToSection}>
                  <li className="nav-item" onClick={scrollToSection}>
                    <button
                      className={`nav-link ${userday === 1 ? "active" : ""}`}
                      onClick={() => setday(1)}
                    >
                      DAILY
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${userday === 2 ? "active" : ""}`}
                      onClick={() => setday(2)}
                    >
                      WEEKLY
                    </button>
                  </li>
                  <li className="nav-item" onClick={scrollToSection}>
                    <button
                      className={`nav-link ${userday === 3 ? "active" : ""}`}
                      onClick={() => setday(3)}
                    >
                      MONTHLY
                    </button>
                  </li>
                </ul>
                {/* Zodiac */}
                <div className="horoscope_block d-flex flex-wrap mt-4">
                  {rahilist.map((item) => (
                    <div
                      className="horoscope_col"
                      key={item.id}
                      onClick={() => {
                        setrashiid(item.id);
                        setActiveSign(item.name);
                      }}
                    >
                      <div
                      onClick={scrollToSection}
                        className={`horoscope_box ${item.color} text-center ${
                          activeSign === item.name ? "active" : ""
                        }`}
                      >
                        <span>
                          <img src={item.image} alt={item.name} className="img-fluid" />
                        </span>
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="todayhores px-5 mt-4" ref={sectionRef}>
                  <h2 className="purple_clr">{activeSign} Horoscope</h2>
                  <p className="dates py-2">
                    {/* {formatApiDate(datashow?.date)} */}
                    {showdate}
                  </p>
                  <p className="conrent">
                    {datashow?.data}
                  </p>
                </div>

              </div>
            </div>

            <div className="col-md-4">
                <div className="todayclock">
                     <h4 className="purple_clr text-center p-3">Astro Clock</h4>
                     <div className="clockdiv text-center">
                        <AnalogClock/>
                     </div>
                     <div className="text-center btnmk p-4">
                       
 <Link className="site_btn w-100 d-block yello_bg"  to="/clock">About Astro Clock</Link>
                     </div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mainpage;