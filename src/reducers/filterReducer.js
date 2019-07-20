import _ from "lodash";
import { FILTER_SEARCH } from "../actions/types";
const initialState = {
  items: {},
  text: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SEARCH:
      return {
        ...state,
        items: action.payload,
        text: action.payload.text
      };
    default:
      return state;
  }
};
