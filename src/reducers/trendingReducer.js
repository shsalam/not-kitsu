import { FETCH_TRENDING } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TRENDING:
      return action.payload;
    default:
      return state;
  }
};
