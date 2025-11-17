// src/components/course-detail/VideoList.jsx
import React from 'react'
import VideoCard from './VideoCard'

const VideoList = ({ videos, onPlayVideo }) => {
  return (
    <section>
      <div className="consultation_list_section videolist space_sec">
        <div className="container">
          <div className="videolistbox">
            <div className="heading_sec mb-4 pb-lg-2">
              <h3 className="mrn_clr mb-0">Personalized Reports</h3>
            </div>
            <div className="vidlist banner_block d-flex flex-wrap align-items-center pt-0">
              {videos.map(video => (
                <VideoCard key={video.id} video={video} onPlay={onPlayVideo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoList