import { FETCH_DETAIL } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return action.payload;
    default:
      return state;
  }
};
