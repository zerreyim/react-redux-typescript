import { Movie } from "../../../models";
import * as movieApi from "../../../api/movieApi";

export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';


const loadMoviesSuccess  = (movies: Array<Movie>) => {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies
  }
}

export const loadMovies = () => {
    return function(dispatch) {
    return movieApi
      .getMovies()
      .then((movies: Array<Movie>) => {
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        throw error;
      });
  };
}