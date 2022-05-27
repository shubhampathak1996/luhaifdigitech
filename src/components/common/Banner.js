import React from "react";

function Banner() {
  return (
    <section className="banner">
      <div className="content">
        <div className="overlayy" />
        <video id="player" src="/assets/luhaif_video.mp4" autoPlay loop muted />
      </div>
    </section>
  );
}

export default Banner;
