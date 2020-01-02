import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/movies/";

export function getMovies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
