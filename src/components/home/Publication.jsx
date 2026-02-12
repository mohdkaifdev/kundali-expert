import React, { useEffect, useState } from "react";

import publicationImg1 from "../../assets/images/publication_img1.png";
import publicationImg2 from "../../assets/images/publication_img2.png";
import publicationImg3 from "../../assets/images/publication_img3.png";
import publicationImg4 from "../../assets/images/publication_img4.png";
import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Publication() {

  const [categoryselected,setcat]=useState(1);
  const [pulicationdata,setpublicationdata]=useState([]);

const getlist = async ()=>{
  const cat = categoryselected
  const res = await api.get(`/magazines/getMagazinesAndBooksByCategoryId?categoryId=${cat}`);
    
setpublicationdata(res.data.data.slice(0, 4))
  
  console.log(res.data.data);
}

useEffect(()=>{
  getlist();
},[categoryselected])

  return (
    <section>
      <div className="publication_section space_sec">
        <div className="container">
          <div className="heading_sec text-center">
            <h2 className="mb-2">Publication</h2>
            <h5>(For Customized Horoscope Go to Personalized Report section)</h5>
          </div>

          <div className="astro_tabs_sec publication_tabs_sec">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                  onClick={()=>setcat(1)}
                >
                  Astrology Magazines
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                  onClick={()=>setcat(2)}
                >
                  Astrology Book
                </button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              {/* Tab 1 */}
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="tabs_content">
                  <div className="row">
                    {pulicationdata?.map((item,index)=>{
                      return(
                        <div className="col-lg-3 col-md-6" key={index}>
                      <div className="astrologers_box p-0">
                        <Link to="#">
                          <img
                            src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${item?.imageLink[0]}`}
                            alt="img"
                            className="w-100 h-auto"
                          />
                        </Link>
                        <div className="astrologers_caption">
                          <div className="star d-flex align-items-center mb-2">
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <h6 className="ms-1">
                              <span className="badge bg-success">4.9</span>
                            </h6>
                          </div>
                          <h6>{item?.magazineTitle}</h6>
                          <h5 className="del_sec mt-1">₹{item?.magazinePrice}</h5>
                        </div>
                      </div>
                    </div>
                      )
                    })}
                    
                  </div>
                </div>
              </div>

              {/* Tab 2 */}
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="tabs_content">
                  <div className="row">
                     {pulicationdata?.map((item,index)=>{
                      return(
                        <div className="col-lg-3 col-md-6" key={index}>
                      <div className="astrologers_box p-0">
                        <Link to="#">
                          <img
                            src={`https://api.kundaliexpert.com/kmAstroapp/api/v1/${item?.imageLink[0]}`}
                            alt="img"
                            className="w-100 h-auto"
                          />
                        </Link>
                        <div className="astrologers_caption">
                          <div className="star d-flex align-items-center mb-2">
                            <span>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <h6 className="ms-1">
                              <span className="badge bg-success">4.9</span>
                            </h6>
                          </div>
                          <h6>{item?.magazineTitle}</h6>
                          <h5 className="del_sec mt-1">₹{item?.magazinePrice}</h5>
                        </div>
                      </div>
                    </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="more_astrologers"><Link to="/magazines-and-books" class="site_btn" >View More</Link></p>
        </div>
      </div>
    </section>
  );
}