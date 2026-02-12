import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function BlogInsights() {
  // const posts = [
  //   { id: 1, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19" , img:biImg1},
  //   { id: 2, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19", img:biImg2},
  //   { id: 3, title: "Journey into Vedic Astrology with KM Sinha Today", date: "MAR 21 - APR 19", img:biImg3},
  // ];
  const [posts,setposts]=useState([]);

  const getthreebogs = async ()=>{
    const res = await api.get(`/web-blog/get-latest-blogs`);

    setposts(res?.data?.data);
   // console.log(res?.data?.data);
  }
  useEffect(()=>{
getthreebogs();
  },[])

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
              <Link to="/blog">
                <div className="bi_box">
                <span>
                  <img src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${p.mainBlogImage}`} alt="img" className="w-100" />
                </span>
                <div className="bi_caption">
                  <p>{p.createdOn}</p>
                  <h4>
                    <a href="#">{p.title}</a>
                  </h4>
                </div>
              </div>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}