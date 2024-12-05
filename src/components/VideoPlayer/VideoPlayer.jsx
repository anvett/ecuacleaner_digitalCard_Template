"use client";

import React from "react";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const VideoPlayer = ({ videoSrc, title }) => {
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <div className="flex flex-col justify-center items-center py-spacing-3 px-4 md:px-0 pb-3">
      <h1 className="section-subtitle text-light mb-2">{title || "My Custom Player"}</h1>
      <div className="w-full max-w-screen-md">
        <ReactPlayer
          width="100%"
          height="400px"
          url={videoSrc} // Usando videoSrc como la URL del video
          controls={true}
          light={false}
          pip={true}
          className="my-spacing-3"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
