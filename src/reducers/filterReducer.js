import { FILTER_SEARCH } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FILTER_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
