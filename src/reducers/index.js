import { combineReducers } from "redux";
import trendingReducer from "./trendingReducer";
import topReducer from "./topReducer";
import upcomingReducer from "./upcomingReducer";
export default combineReducers({
  trending: trendingReducer,
  top: topReducer,
  upcoming: upcomingReducer
});
