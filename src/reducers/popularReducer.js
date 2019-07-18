import _ from "lodash";
import { FETCH_POPULAR } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POPULAR:
      return action.payload;
    default:
      return state;
  }
};
