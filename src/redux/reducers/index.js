import { combineReducers } from "redux";
import {
  SignupReducer,
  LoginReducer,
  startTrackingReducer,
  stopTrackingReducer,
  GetAllTrackRecordsReducer
} from "./reducers";

const rootReducer = combineReducers({
  signup: SignupReducer,
  login: LoginReducer,
  start_track: startTrackingReducer,
  stop_track: stopTrackingReducer,
  get_all_track_records: GetAllTrackRecordsReducer
});

export default rootReducer;
