import React from 'react';
import '../styles/VideoPlayer.css'; // CSS for styling the video container

function VideoPlayer() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-player">
        <source src="/856360-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
