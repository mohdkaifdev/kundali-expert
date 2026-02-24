import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footer_section space_sec pb-0">
        <div class="container">
          <div class="footer_row d-flex flex-wrap">
            <div class="footer_col footer_col1">
              <div class="footer_mune">
                <h6>Services</h6>
                <ul>
                  <li>
                    <Link to="/#horoscope">Horoscope</Link>
                  </li>
                  <li>
                    <Link to="/astrology-course">Palmistry</Link>
                  </li>
                  <li>
                    <Link to="/numerology">Numerology</Link>
                  </li>
                  <li>
                    <Link to="/#astroservices">Kundali</Link>
                  </li>
                  <li>
                    <Link to="/vaastu.html">Vastu</Link>
                  </li>
                  <li>
                    <Link to="/transittimeline">Nakshatra</Link>
                  </li>
                  <li>
                    <Link to="/#gemstones">Gemstones</Link>
                  </li>
                  <li>
                    <Link to="/#astroservices">Panchang</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer_col footer_col2">
              <div class="footer_mune">
                <h6>Free Report</h6>
                <ul>
                  <li>
                    <Link to="/#astroservices">Kundali</Link>
                  </li>
                  <li>
                    <Link to="#">Daily Horoscope</Link>
                  </li>
                  <li>
                    <Link to="#">Numerology</Link>
                  </li>
                  <li>
                    <Link to="#">Know Your Lucky Number</Link>
                  </li>
                  <li>
                    <Link to="/reports">Sade Sati</Link>
                  </li>
                  <li>
                    <Link to="/#astroservices">Match Making</Link>
                  </li>
                  <li>
                    <Link to="#">Puja</Link>
                  </li>
                  <li>
                    <Link to="#">Know Your Lucky Colour</Link>
                  </li>
                  <li>
                    <Link to="#">Gemstone Suggestion</Link>
                  </li>
                  <li>
                    <Link to="/#astroservices">Daily Panchang</Link>
                  </li>
                  <li>
                    <Link to="#">Daily Prediction</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer_col footer_col3">
              <div class="footer_mune">
                <h6>Services</h6>
                <ul>
                  <li>
                    <Link to="#">Horoscope</Link>
                  </li>
                  <li>
                    <Link to="#">Palmistry</Link>
                  </li>
                  <li>
                    <Link to="#">Numerology</Link>
                  </li>
                  <li>
                    <Link to="#">Kundali</Link>
                  </li>
                  <li>
                    <Link to="#">Vastu</Link>
                  </li>
                  <li>
                    <Link to="#">Nakshatra</Link>
                  </li>
                  <li>
                    <Link to="#">Gemstones</Link>
                  </li>
                  <li>
                    <Link to="#">Panchang</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer_col footer_col4">
              <div class="footer_mune">
                <h6>Visiting Locations</h6>
                <ul>
                  <li>
                    <Link to="#">Mumbai</Link>
                  </li>
                  <li>
                    <Link to="#">Gorakhpur</Link>
                  </li>
                  <li>
                    <Link to="#">Ghaziabad Uttar Pradesh</Link>
                  </li>
                  <li>
                    <Link to="#">Jaipur</Link>
                  </li>
                  <li>
                    <Link to="#">Chennai</Link>
                  </li>
                  <li>
                    <Link to="#">Chandigarh</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer_col footer_col5">
              <div class="footer_mune">
                <h6>Contact</h6>
                <ul>
                  <li>
                    Head Office :{" "}
                    <span>
                      B1-101, Block-E, Classic Residency Apartment, Raj Nagar
                      Extension, Ghaziabad, Uttar Pradesh - 201017
                    </span>
                  </li>
                  <li>
                    Mumbai Branch :{" "}
                    <span>
                      Shop 2, Floor - Grd, Plot 675/676, Jasota Kutir Chs, Anant
                      Patil Marg, Shivaji Park, Tel Exchange Dadar(W), Mumbai -
                      400028
                    </span>
                  </li>
                  <li>
                    Gorakhpur Branch :{" "}
                    <span>
                      Hno 600 D, Shivnagar Colony, Basharatpur, Gorakhpur, Uttar
                      Pradesh - 273004
                    </span>
                  </li>
                </ul>
                <div class="ss_icons mt-3">
                  <ul class="d-flex align-items-center gap-1">
                    <li>
                      <Link to="https://www.facebook.com/kundaliexpertkmsinha">
                        <i class="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/kundaliexpert">
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/kundaliexpert">
                        <i class="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/kundali-expert1/">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright_sec d-flex align-items-center justify-content-between">
            <p>Copyright © Kundali Expert &nbsp;|&nbsp; All Rights Reserved</p>
            <p>
              <Link to="privacy-policy">Privacy & Policy</Link> &nbsp;|&nbsp;{" "}
              <Link to="terms-conditions">Terms & Conditions</Link>&nbsp;|&nbsp;{" "}
              <Link to="refund-cancellation">Refund & Cancellation</Link>
              &nbsp;|&nbsp; <Link to="shipping-policy">Shipping Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
