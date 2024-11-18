import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="m-30">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
