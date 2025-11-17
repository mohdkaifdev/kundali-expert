// src/components/course-detail/VideoPlayer.jsx
import React from 'react'

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="video-container" style={{ display: 'block' }}>
      <iframe
        id="videoFrame"
        className="video-frame"
        src={`${videoUrl}?autoplay=1`}
        allowFullScreen
        title="Course Video"
      ></iframe>
      <button className="close-video" onClick={onClose}>
        <span>X</span> Close Video
      </button>
    </div>
  )
}

export default VideoPlayer