import { Category } from "../../../models";
import * as categoryApi from "../../../api/categoryApi";

export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';


const loadCategoriesSuccess  = (categories: Array<Category>) => {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories
  }
}

export const loadCategories = () => {
    return function(dispatch) {
    return categoryApi
      .getCategories()
      .then((categories: Array<Category>) => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch(error => {
        throw error;
      });
  };
}