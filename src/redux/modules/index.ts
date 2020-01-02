import { combineReducers } from "redux";
import { categoryReducer as categories } from "./categories/categoryReducer";
import { movieReducer as movies} from "./movies/movieReducer";

const rootReducer = combineReducers({
  categories,
  movies
});

export default rootReducer;