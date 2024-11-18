import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, url } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const res = await axios.get(url, options);
    const results = res.data?.results;
    //console.log(results);
    dispatch(addNowPlayingMovies(results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
