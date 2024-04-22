import {
  SIGNUP_SUCCESS, START_TRACKING_SUCCESS,
  SIGNUP_FAILURE, START_TRACKING_FAILURE,
  LOGIN_SUCCESS, STOP_TRACKING_SUCCESS,
  LOGIN_FAILURE, STOP_TRACKING_FAILURE,
  GET_ALL_TRACK_RECORDS_SUCCESS,
  GET_ALL_TRACK_RECORDS_FAILURE
} from "../action/actionType";
const initialState = {
  inputData: null,
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inputData: action.payload,
      };
    case SIGNUP_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, inputData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

export const startTrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TRACKING_SUCCESS:
      return { ...state, inputData: action.payload };
    case START_TRACKING_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

export const stopTrackingReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOP_TRACKING_SUCCESS:
      return { ...state, inputData: action.payload };
    case STOP_TRACKING_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

export const GetAllTrackRecordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRACK_RECORDS_SUCCESS:
      return { ...state, inputData: action.payload };
    case GET_ALL_TRACK_RECORDS_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};