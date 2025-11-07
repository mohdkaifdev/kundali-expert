import React from "react";
import biImg1 from "../../assets/images/bi_img1.png";
import biImg2 from "../../assets/images/bi_img2.png";
import biImg3 from "../../assets/images/bi_img3.png";

export default function BlogInsights() {
  const posts = [
    { id: 1, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19" , img:biImg1},
    { id: 2, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19", img:biImg2},
    { id: 3, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19", img:biImg3},
  ];

  return (
    <section>
      <div className="bi_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Blog and insights</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>
          <div className="row">
            {posts.map((p) => (
            <div key={p.id} className="col-lg-4 col-md-6">
              <div className="bi_box">
                <span>
                  <img src={p.img} alt="img" className="w-100" />
                </span>
                <div className="bi_caption">
                  <p>{p.date}</p>
                  <h4>
                    <a href="#">{p.title}</a>
                  </h4>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}