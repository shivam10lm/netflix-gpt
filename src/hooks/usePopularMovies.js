import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const results = res.data?.results;
    console.log(results);
    dispatch(addPopularMovies(results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
