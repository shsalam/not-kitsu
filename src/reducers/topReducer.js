import { FETCH_TOP } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TOP:
      return action.payload;
    default:
      return state;
  }
};
