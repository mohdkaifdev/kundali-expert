// src/components/course-detail/VideoCard.jsx
import React from 'react'
import courseDetailPlay from "../../assets/images/course_detail_play.png";
import biImg1 from "../../assets/images/bi_img1.png";

const VideoCard = ({ video, onPlay }) => {
  return (
    <div className="banner_col">
      <div className="banner_box position-relative">
        <img src={biImg1} alt="icon" className="img-fluid sec_icon" />
        <div className="banner_box_inner">
          <h5>{video.title}</h5>
        </div>
        <div className="play_btn">
          <a onClick={() => onPlay(video.videoUrl)}>
            <img src={courseDetailPlay} alt="icon" className="img-fluid" />
          </a>
        </div>
        <div className="offer_box offer_box_light d-inline-flex align-items-center">
          <p>FREE SERVICE</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard