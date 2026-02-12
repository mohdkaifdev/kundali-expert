import React, { useEffect, useState } from "react";
import secIcon from "../../assets/images/sec_icon.png";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function LearnAstrology() {
 
  const [astrologyCourses,setalastrologyCourses]=useState([])
 

const getlist = async()=>{
const res = await api.get("/v1/course/getCourses");
setalastrologyCourses(res.data.data);
console.log(res.data.data);
}
useEffect(()=>{
getlist();
},[]);

  return (
    <section>
      <div className="learn_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="purple_clr">Learn Astrology</h2>
            <h5 className="gray_clr">
              (For Customized Horoscope Go to Personalized Report section)
            </h5>
          </div>

          <div className="banner_block pt-0 d-flex flex-wrap align-items-center">
            {
              astrologyCourses?.map((item,index)=>{
                return(
                  <div className="banner_col" key={index}>
                    <Link to={`/learn-course-details/${item?.id}`}>
                    <div className="banner_box">
                <span>
                  <img src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${item?.iconImage[0]}`} alt="icon" className="img-fluid sec_icon" />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    {item?.courseSubHeading}{" "}
                    <span className="d-block pe-md-4">
                      {item?.courseDescription}
                    </span>
                  </h5>
                </div>
              </div>
                    </Link>
              
            </div>
                )
              })
            }
            
          </div>

        </div>
      </div>
    </section>
  );
}