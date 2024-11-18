import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-32 mx-16 w-1/2">
      <h1 className="text-6xl font-semi-bold p-5">{title}</h1>
      <p className="text-xl p-5">{overview}</p>
      <div className="mx-5">
        <button className="bg-gray-400 px-10 py-5 text-white rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-400 px-10 py-5 mx-2 text-white rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
