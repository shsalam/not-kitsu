import anime from "../apis/anime";
import history from "../history";
import { FETCH_TRENDING } from "./types";
import { FETCH_TOP } from "./types";
import { FETCH_UPCOMING } from "./types";
import { FETCH_POPULAR } from "./types";
import { FETCH_HIGHEST } from "./types";
import { FILTER_SEARCH } from "./types";
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
  response.data.text = text;
  dispatch({ type: FILTER_SEARCH, payload: response.data });
};
