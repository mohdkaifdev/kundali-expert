import React from "react";
import secIcon from "../../assets/images/sec_icon.png"; // adjust path as needed

const AboutReportrBlock = () => {
  return (
    <div className="banner_block d-flex flex-wrap align-items-center pt-0">
      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Financial Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Career Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Medical Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Sade Sati Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Yearly Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Ashtakvarga Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Varga Kundali Report</h5>
          </div>
        </div>
      </div>

      <div className="banner_col">
        <div className="banner_box position-relative mb-3">
          <span>
            <img src={secIcon} alt="icon" className="img-fluid sec_icon" />
          </span>
          <div className="banner_box_inner">
            <h5>Full Report</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutReportrBlock;
