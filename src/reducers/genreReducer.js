import { FETCH_DETAIL_GENRE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DETAIL_GENRE:
      return action.payload;
    default:
      return state;
  }
};
