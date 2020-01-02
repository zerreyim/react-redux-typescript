import { LOAD_CATEGORIES_SUCCESS } from "./categoryActions";
import initialState from '../../initialState';



export const categoryReducer = (state = initialState.categories, action: any) => {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
