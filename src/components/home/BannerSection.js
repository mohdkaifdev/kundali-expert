import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/banner_img.png";
import secIcon from "../../assets/images/sec_icon.png";
import api from "../../services/api";

const BannerSection = () => {

const [banners,setbanners]=useState([]);
  const getbanners = async()=>{
    const res = await api.get('/websiteBanner/getWebsiteBannerList');
    if(res.data.response.responseCode == "200")
    {
      setbanners(res.data.data);
    }
    else{
      setbanners("Na")
    }
  }
  useEffect(()=>{
getbanners();

  },[]);

   const belowbannerdata = [
    {
      image: secIcon,
      text: "Consultation",
      peragraph:
        "Your trusted partner in the world of astrology and related services.",
        link: "/consultation"
    },
    {
      image: secIcon,
      text: "Personalized Reports",
      peragraph:
        "Your trusted partner in the world of astrology and related services.",
        link:"/personalized-reports"
    },
    {
      image: secIcon,
      text: "Buy Full Reports",
      peragraph:
        "Your trusted partner in the world of astrology and related services.",
        link: "/buy-full-reports"
    },
  ];


  return (
    <section>
      <div className="banner_section banner_space">
        <div className="container">
          {/* ✅ Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 20000, disableOnInteraction: true }}
           // pagination={{ clickable: true }}
            navigation={false}
            className="banner_slider"
          >
            {banners?.map((item,index)=>{
              return(
                <SwiperSlide>
                  <Link to={item?.redirectionLink}>
                   <div className="banner_slide">
                <img src={item?.fileAttachmentLink} alt="banner" className="img-fluid w-100" />
              </div>
                  </Link>
             
            </SwiperSlide>
              )
            })}
            

           
          </Swiper>

          {/* ✅ Banner Info Boxes */}
          <div className="banner_block d-flex align-items-center">
            {
              belowbannerdata.map((item,index)=>{
                return(
                 
                   <div className="banner_col">
              <Link to={item?.link}>
              <div className="banner_box">
                <span>
                  <img
                    src={item.image}
                    alt="icon"
                    className="img-fluid sec_icon"
                  />
                </span>
                <div className="banner_box_inner">
                  <h5>
                    {item?.text}{" "}
                    <span className="d-block pe-md-4">
                      {item?.peragraph}
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
};

export default BannerSection;
