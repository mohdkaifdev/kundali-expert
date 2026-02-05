import React from "react";

const VideoPlayer = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="video-container">
      <iframe
        className="video-frame"
        src={videoUrl}
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Course Video"
      ></iframe>

      <button className="close-video" onClick={onClose}>
        ✕ Close Video
      </button>
    </div>
  );
};

export default VideoPlayer;
