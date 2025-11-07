import React from "react";
import centerBg from "../../assets/images/center_bg.png";

const HomeMidBanner = () => {
  return (
    <section>
      <div className="center_section space_sec">
        <div className="container">
          <div className="center_img">
            <img
              src={centerBg}
              alt="img"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMidBanner;
