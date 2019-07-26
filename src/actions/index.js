import anime from "../apis/anime";
import { FETCH_TRENDING } from "./types";
import { FETCH_TOP } from "./types";
import { FETCH_UPCOMING } from "./types";
import { FETCH_POPULAR } from "./types";
import { FETCH_HIGHEST } from "./types";
import { FILTER_SEARCH } from "./types";
import { FETCH_CATEGORIES } from "./types";
import { FETCH_DETAIL } from "./types";
import { FETCH_DETAIL_GENRE } from "./types";
export const fetchTrending = () => async dispatch => {
  const response = await anime.get("/trending/anime");
  dispatch({ type: FETCH_TRENDING, payload: response.data });
};

export const fetchTop = () => async dispatch => {
  const response = await anime.get(
    "/anime?filter[status]=current&sort=-userCount"
  );
  dispatch({ type: FETCH_TOP, payload: response.data });
};

export const fetchUpcoming = () => async dispatch => {
  const response = await anime.get(
    "/anime?filter[status]=upcoming?sort=-popularityRank"
  );
  dispatch({ type: FETCH_UPCOMING, payload: response.data });
};

export const fetchPopular = () => async dispatch => {
  const response = await anime.get("/anime?sort=popularityRank");
  dispatch({ type: FETCH_POPULAR, payload: response.data });
};

export const fetchHighest = () => async dispatch => {
  const response = await anime.get("/anime?sort=-averageRating");
  dispatch({ type: FETCH_HIGHEST, payload: response.data });
};

export const filterSearch = text => async dispatch => {
  const response = await anime.get(`/anime?filter[text]=${text}`);
  dispatch({ type: FILTER_SEARCH, payload: response.data });
};

export const fetchCategories = () => async dispatch => {
  const response = await anime.get(
    "/categories?page%5Blimit%5D=40&page%5Boffset%5D=0&sort=-totalMediaCount"
  );
  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};

export const fetchDetail = id => async dispatch => {
  const response = await anime.get(`/anime/${id}`);
  dispatch({ type: FETCH_DETAIL, payload: response.data });
};

export const fetchDetailGenre = id => async dispatch => {
  const response = await anime.get(`/anime/${id}/genres`);
  dispatch({ type: FETCH_DETAIL_GENRE, payload: response.data });
};
