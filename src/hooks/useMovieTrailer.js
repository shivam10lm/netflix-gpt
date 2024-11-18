import { useEffect } from "react";
import { options } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-U`;
    const res = await axios.get(url, options);
    const results = res.data.results;

    const filterData = results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
