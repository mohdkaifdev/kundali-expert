// src/components/course-detail/VideoCard.jsx
import React from "react";
import courseDetailPlay from "../../assets/images/course_detail_play.png";
import biImg1 from "../../assets/images/bi_img1.png";

const VideoCard = ({ video, onPlay }) => {
  return (
    <div className="banner_col">
      <div className="banner_box position-relative">
        <img src={biImg1} alt="icon" className="img-fluid sec_icon" />
        <div className="banner_box_inner">
          <h5>{video.courseSessionTitle}</h5>
        </div>

        <div className="play_btn">
          {video?.videoStreamLink ? (
            <a
              href={video.videoStreamLink}
              onClick={(e) => {
                e.preventDefault();
                onPlay(video.videoStreamLink);
              }}
            >
              <img src={courseDetailPlay} alt="Play" className="img-fluid" />
            </a>
          ) : (
            ""
          )}
        </div>
        {video?.videoStreamLink ? (
          video?.free ? (
            <div className="offer_box offer_box_light d-inline-flex align-items-center">
              <p>Free Video</p>
            </div>
          ) : (
            <div className="offer_box offer_box_light d-inline-flex align-items-center">
              <p>Paid</p>
            </div>
          )
        ) : (
          <div className="offer_box offer_box_light d-inline-flex align-items-center">
            <p>Comming Soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
