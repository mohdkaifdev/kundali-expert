import React, { useState } from 'react';
import kundaliIcon1 from "../../assets/images/h_kundali_icon1.png";
import kundaliIcon2 from "../../assets/images/h_kundali_icon2.png";
import kundaliIcon3 from "../../assets/images/h_kundali_icon3.png";

const KundaliDetails = () => {
  const [name, setName] = useState('');
  // Add more state for forms

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., API call
  };

  return (
    <section>
      <div className="kundali_detail_section">
        <div className="container">
          <div className="kundali_detail_row d-flex">
            {/* ======================== Kundali / Birth Chart ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block">
                <div className="kundali_d_flex d-flex align-items-center justify-content-between">
                  <div className="kundali_d_head">
                    <h4>Kundali / Birth Chart</h4>
                    <h5>Enter Birth Details</h5>
                  </div>
                  <div className="kundali_d_icon">
                    <img
                      src={kundaliIcon1}
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="kundali_d_form">
                  <form action="" className="d-flex flex-wrap">
                    <div className="form_group w-100">
                      <input
                        type="text"
                        className="input_sec w-100"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="date"
                        className="input_sec w-100"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        className="input_sec w-100"
                        placeholder="HH/MM/SEC"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <select
                        className="form-select input_sec"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                    <div className="form_group">
                      <select
                        className="form-select input_sec"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Birth place</option>
                        <option value="1">place 1</option>
                        <option value="2">place 2</option>
                        <option value="3">place 3</option>
                      </select>
                    </div>
                    <div className="form_btn w-100">
                      <button type="submit" className="site_btn w-100 d-block">
                        GET KUDALI
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ======================== Kundali Matching ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block">
                <div className="kundali_d_flex d-flex align-items-center justify-content-between">
                  <div className="kundali_d_head">
                    <h4>Kundali Matching</h4>
                    <h5>Enter Boy’s Details</h5>
                  </div>
                  <div className="kundali_d_icon">
                    <img
                      src={kundaliIcon2}
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="kundali_d_form">
                  <form action="" className="d-flex flex-wrap">
                    <div className="form_group w-100">
                      <input
                        type="text"
                        className="input_sec w-100"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="date"
                        className="input_sec w-100"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        className="input_sec w-100"
                        placeholder="HH/MM/SEC"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <select
                        className="form-select input_sec"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                      </select>
                    </div>
                    <div className="form_group">
                      <select
                        className="form-select input_sec"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Birth place</option>
                        <option value="1">place 1</option>
                        <option value="2">place 2</option>
                        <option value="3">place 3</option>
                      </select>
                    </div>
                    <div className="form_btn w-100">
                      <button type="submit" className="site_btn w-100 d-block">
                        GET KUDALI
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ======================== Today’s Panchang ======================== */}
            <div className="kundali_detail_col">
              <div className="kundali_detail_block kundali_detail_box">
                <div className="kundali_d_flex border-0 d-flex align-items-center justify-content-between px-0">
                  <div className="kundali_d_head">
                    <h4>Today’s Panchang</h4>
                  </div>
                  <div className="kundali_d_icon">
                    <img
                      src={kundaliIcon3}
                      alt="icon"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="panchang_sec">
                  <div className="panchang_box d-flex">
                    <div className="panchang_inner">
                      <p className="input_sec">Sunrise - Sunset</p>
                      <span className="input_sec">06:07:10 - 19:14:21</span>
                    </div>
                    <div className="panchang_inner">
                      <p className="input_sec">Moonrise - Moonset</p>
                      <span className="input_sec">06:07:10 - 19:14:21</span>
                    </div>
                  </div>
                </div>

                <ul>
                  <li>
                    <span>Tithi</span>
                    <span>Saptami</span>
                  </li>
                  <li>
                    <span>Nakshatra</span>
                    <span>Revati 03:38, Jul 18</span>
                  </li>
                  <li>
                    <span>Yog</span>
                    <span>Atigand</span>
                  </li>
                  <li>
                    <span>Karan</span>
                    <span>Vishti</span>
                  </li>
                  <li>
                    <span>Paksha</span>
                    <span>Krishna</span>
                  </li>
                  <li>
                    <span>Shaka Samvat</span>
                    <span>Viśvāvasu</span>
                  </li>
                  <li>
                    <span>Vikram Samvat</span>
                    <span>Kālayukta</span>
                  </li>
                </ul>

                <div className="form_btn w-100">
                  <a
                    href="#"
                    className="site_btn w-100 d-block yello_bg"
                  >
                    VIEW MORE
                  </a>
                </div>
              </div>
            </div>
            {/* ======================== End Panchang ======================== */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KundaliDetails;