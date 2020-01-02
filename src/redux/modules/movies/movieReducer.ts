
import { LOAD_MOVIES_SUCCESS } from "./movieActions";
import initialState from "../../initialState";
import { Movie } from "../../../models";


export const movieReducer = (state = initialState.movies, action: any) => {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS:
      return action.movies as Array<Movie>;
    default:
      return state;
  }
}
